
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AlgorithmCard from "@/components/AlgorithmCard";
import { useToast } from "@/hooks/use-toast";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const algorithms = [
  {
    id: 'logistic-regression',
    name: 'Logistic Regression',
    description: 'Simple linear classifier',
    accuracy: 78,
    speed: 'Very Fast',
    tooltip: 'A statistical method that estimates the probability of a binary outcome based on one or more predictor variables. Simple but effective for linearly separable data.'
  },
  {
    id: 'svm',
    name: 'Support Vector Machine',
    description: 'Effective for complex classifications',
    accuracy: 85,
    speed: 'Fast',
    tooltip: 'Creates a hyperplane that separates data into classes. Excellent for high-dimensional spaces and complex classification tasks.'
  },
  {
    id: 'random-forest',
    name: 'Random Forest',
    description: 'Ensemble learning method',
    accuracy: 88,
    speed: 'Medium',
    tooltip: 'Combines multiple decision trees to create a more accurate and stable prediction. Good for handling non-linear relationships.'
  },
  {
    id: 'neural-network',
    name: 'Neural Network',
    description: 'Deep learning approach',
    accuracy: 92,
    speed: 'Slow',
    tooltip: 'Complex model inspired by the human brain. Can learn intricate patterns in data but requires more computational resources.'
  },
];

// Different result data for each algorithm
const getResultDataForAlgorithm = (algorithmId: string) => {
  switch (algorithmId) {
    case 'logistic-regression':
      return [
        { name: 'Class A', probability: 0.72 },
        { name: 'Class B', probability: 0.21 },
        { name: 'Class C', probability: 0.05 },
        { name: 'Class D', probability: 0.02 },
      ];
    case 'svm':
      return [
        { name: 'Class A', probability: 0.68 },
        { name: 'Class B', probability: 0.24 },
        { name: 'Class C', probability: 0.06 },
        { name: 'Class D', probability: 0.02 },
      ];
    case 'random-forest':
      return [
        { name: 'Class A', probability: 0.81 },
        { name: 'Class B', probability: 0.12 },
        { name: 'Class C', probability: 0.04 },
        { name: 'Class D', probability: 0.03 },
      ];
    case 'neural-network':
      return [
        { name: 'Class A', probability: 0.89 },
        { name: 'Class B', probability: 0.08 },
        { name: 'Class C', probability: 0.02 },
        { name: 'Class D', probability: 0.01 },
      ];
    default:
      return [
        { name: 'Class A', probability: 0.72 },
        { name: 'Class B', probability: 0.21 },
        { name: 'Class C', probability: 0.05 },
        { name: 'Class D', probability: 0.02 },
      ];
  }
};

// Different confusion matrix for each algorithm
const getConfusionMatrixForAlgorithm = (algorithmId: string) => {
  switch (algorithmId) {
    case 'logistic-regression':
      return [
        { name: 'True Positive', value: 78 },
        { name: 'False Positive', value: 10 },
        { name: 'False Negative', value: 12 },
        { name: 'True Negative', value: 76 },
      ];
    case 'svm':
      return [
        { name: 'True Positive', value: 83 },
        { name: 'False Positive', value: 8 },
        { name: 'False Negative', value: 7 },
        { name: 'True Negative', value: 79 },
      ];
    case 'random-forest':
      return [
        { name: 'True Positive', value: 85 },
        { name: 'False Positive', value: 7 },
        { name: 'False Negative', value: 5 },
        { name: 'True Negative', value: 80 },
      ];
    case 'neural-network':
      return [
        { name: 'True Positive', value: 90 },
        { name: 'False Positive', value: 5 },
        { name: 'False Negative', value: 3 },
        { name: 'True Negative', value: 83 },
      ];
    default:
      return [
        { name: 'True Positive', value: 85 },
        { name: 'False Positive', value: 7 },
        { name: 'False Negative', value: 5 },
        { name: 'True Negative', value: 80 },
      ];
  }
};

// Performance metrics for each algorithm
const getPerformanceMetricsForAlgorithm = (algorithmId: string) => {
  const algorithm = algorithms.find(a => a.id === algorithmId);
  const baseAccuracy = algorithm ? algorithm.accuracy : 78;
  
  return {
    accuracy: baseAccuracy,
    precision: baseAccuracy + Math.floor(Math.random() * 8) - 2,
    recall: baseAccuracy - Math.floor(Math.random() * 5),
    f1Score: baseAccuracy - Math.floor(Math.random() * 3),
    processingTime: algorithm?.id === 'neural-network' ? 3.45 : 
                    algorithm?.id === 'random-forest' ? 1.78 : 
                    algorithm?.id === 'svm' ? 1.12 : 0.82
  };
};

const Classify = () => {
  const [inputText, setInputText] = useState('');
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<boolean>(false);
  const [resultData, setResultData] = useState<Array<{ name: string; probability: number }>>([]);
  const [confusionMatrix, setConfusionMatrix] = useState<Array<{ name: string; value: number }>>([]);
  const [performanceMetrics, setPerformanceMetrics] = useState<any>(null);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputText.trim()) {
      toast({
        title: "Error",
        description: "Please enter mutation text to classify",
        variant: "destructive",
      });
      return;
    }
    
    if (!selectedAlgorithm) {
      toast({
        title: "Error",
        description: "Please select a classification algorithm",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      setIsProcessing(false);
      setResults(true);
      
      // Set algorithm-specific results
      setResultData(getResultDataForAlgorithm(selectedAlgorithm));
      setConfusionMatrix(getConfusionMatrixForAlgorithm(selectedAlgorithm));
      setPerformanceMetrics(getPerformanceMetricsForAlgorithm(selectedAlgorithm));
      
      toast({
        title: "Classification Complete",
        description: "Your genetic mutation has been classified successfully!",
      });
    }, 2000);
  };

  const handleAlgorithmSelect = (id: string) => {
    setSelectedAlgorithm(id);
    toast({
      title: "Algorithm Selected",
      description: `You've selected the ${algorithms.find(a => a.id === id)?.name} algorithm`,
    });
  };

  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Your results are being downloaded as CSV",
    });
  };

  const handleReset = () => {
    setInputText('');
    setSelectedAlgorithm(null);
    setResults(false);
    setResultData([]);
    setConfusionMatrix([]);
    setPerformanceMetrics(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="pt-16 pb-10 bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 dna-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-genomic-purple to-genomic-blue bg-clip-text text-transparent">
                  Classify Genetic Mutations
                </span>
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Upload or paste text describing a genetic mutation to classify it using our advanced machine learning algorithms.
              </p>
            </div>
          </div>
        </section>

        {/* Classification Form */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Input Form */}
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Mutation Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Enter or paste text describing the genetic mutation:
                        </label>
                        <Textarea 
                          value={inputText}
                          onChange={(e) => setInputText(e.target.value)}
                          placeholder="E.g., The TP53 gene mutation leads to a substitution of arginine with histidine at position 175, resulting in a non-functional p53 protein that cannot bind to DNA..."
                          className="h-40"
                        />
                      </div>
                      <div className="flex justify-between">
                        <Button 
                          type="submit" 
                          className="btn-gradient"
                          disabled={isProcessing || !selectedAlgorithm || !inputText.trim()}
                        >
                          {isProcessing ? "Processing..." : "Classify Mutation"}
                        </Button>
                        {inputText && (
                          <Button 
                            type="button"
                            variant="outline"
                            onClick={handleReset}
                          >
                            Reset
                          </Button>
                        )}
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Algorithm Selection */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">Select Algorithm</h2>
                <div className="space-y-4">
                  {algorithms.map((algorithm) => (
                    <AlgorithmCard
                      key={algorithm.id}
                      name={algorithm.name}
                      description={algorithm.description}
                      accuracy={algorithm.accuracy}
                      speed={algorithm.speed}
                      tooltip={algorithm.tooltip}
                      onSelect={() => handleAlgorithmSelect(algorithm.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section - Conditionally Render */}
        {results && (
          <section className="py-10 bg-slate-50 dark:bg-slate-800/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Classification Results</h2>
              
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="details">Detailed Analysis</TabsTrigger>
                  <TabsTrigger value="metrics">Performance Metrics</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <Card>
                    <CardHeader>
                      <CardTitle>Classification Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-medium mb-4">Classification Results</h3>
                          <p className="mb-2">
                            <span className="font-semibold">Algorithm:</span> {algorithms.find(a => a.id === selectedAlgorithm)?.name}
                          </p>
                          <p className="mb-2">
                            <span className="font-semibold">Primary Classification:</span> {resultData[0]?.name} ({(resultData[0]?.probability * 100).toFixed(0)}% probability)
                          </p>
                          <p className="mb-6">
                            <span className="font-semibold">Confidence Level:</span> {resultData[0]?.probability > 0.8 ? 'High' : resultData[0]?.probability > 0.6 ? 'Medium' : 'Low'}
                          </p>
                          
                          <Button onClick={handleDownload} className="btn-gradient">
                            Download Results
                          </Button>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium mb-4">Probability Distribution</h3>
                          <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <BarChart
                                data={resultData}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                              >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="probability" fill="#9b87f5" name="Probability" />
                              </BarChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="details">
                  <Card>
                    <CardHeader>
                      <CardTitle>Detailed Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium mb-3">Feature Importance</h3>
                          <p className="text-slate-700 dark:text-slate-300 mb-4">
                            The model identified these key features in the text that influenced the classification:
                          </p>
                          <ul className="list-disc pl-5 space-y-2">
                            <li><span className="font-medium">TP53 gene mention</span> - Strong indicator for cancer-related mutation</li>
                            <li><span className="font-medium">Position 175</span> - Known hotspot for pathogenic variants</li>
                            <li><span className="font-medium">Substitution type</span> - Arginine to histidine is often pathogenic</li>
                            <li><span className="font-medium">Functional impact</span> - Loss of DNA binding is significant</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-medium mb-3">Similar Classified Mutations</h3>
                          <p className="text-slate-700 dark:text-slate-300 mb-4">
                            Mutations with similar classification profiles:
                          </p>
                          <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                              <thead>
                                <tr>
                                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Mutation</th>
                                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Gene</th>
                                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Classification</th>
                                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Similarity</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                <tr>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">R175H</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">TP53</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">Class A</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">98%</td>
                                </tr>
                                <tr>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">V157F</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">TP53</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">Class A</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">87%</td>
                                </tr>
                                <tr>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">Y220C</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">TP53</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">Class A</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">82%</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="metrics">
                  <Card>
                    <CardHeader>
                      <CardTitle>Performance Metrics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {performanceMetrics && (
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="text-lg font-medium mb-3">Confusion Matrix</h3>
                            <div className="h-64">
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                  data={confusionMatrix}
                                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                >
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="name" />
                                  <YAxis />
                                  <Tooltip />
                                  <Bar dataKey="value" fill="#33C3F0" name="Count" />
                                </BarChart>
                              </ResponsiveContainer>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-medium mb-3">Key Metrics</h3>
                            <div className="space-y-4">
                              <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Accuracy</p>
                                <div className="flex items-center">
                                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mr-2">
                                    <div 
                                      className="h-2 bg-genomic-purple rounded-full" 
                                      style={{ width: `${performanceMetrics.accuracy}%` }}
                                    />
                                  </div>
                                  <span className="text-sm font-medium">{performanceMetrics.accuracy}%</span>
                                </div>
                              </div>
                              
                              <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Precision</p>
                                <div className="flex items-center">
                                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mr-2">
                                    <div 
                                      className="h-2 bg-genomic-purple rounded-full" 
                                      style={{ width: `${performanceMetrics.precision}%` }}
                                    />
                                  </div>
                                  <span className="text-sm font-medium">{performanceMetrics.precision}%</span>
                                </div>
                              </div>
                              
                              <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Recall</p>
                                <div className="flex items-center">
                                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mr-2">
                                    <div 
                                      className="h-2 bg-genomic-purple rounded-full" 
                                      style={{ width: `${performanceMetrics.recall}%` }}
                                    />
                                  </div>
                                  <span className="text-sm font-medium">{performanceMetrics.recall}%</span>
                                </div>
                              </div>
                              
                              <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">F1 Score</p>
                                <div className="flex items-center">
                                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mr-2">
                                    <div 
                                      className="h-2 bg-genomic-purple rounded-full" 
                                      style={{ width: `${performanceMetrics.f1Score}%` }}
                                    />
                                  </div>
                                  <span className="text-sm font-medium">{performanceMetrics.f1Score}%</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="mt-8">
                              <h4 className="text-md font-medium mb-2">Processing Time</h4>
                              <p className="text-slate-700 dark:text-slate-300">
                                <span className="font-semibold">Total time:</span> {performanceMetrics.processingTime.toFixed(2)} seconds
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Classify;
