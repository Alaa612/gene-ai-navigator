import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

// Comparison data
const accuracyData = [
  { name: 'Logistic Regression', accuracy: 78 },
  { name: 'SVM', accuracy: 85 },
  { name: 'Random Forest', accuracy: 88 },
  { name: 'Neural Network', accuracy: 92 },
  { name: 'XGBoost', accuracy: 90 },
];

const performanceData = [
  { 
    name: 'Logistic Regression', 
    accuracy: 78, 
    precision: 76,
    recall: 75,
    f1: 75,
    speed: 95,
  },
  { 
    name: 'SVM', 
    accuracy: 85,
    precision: 83,
    recall: 82,
    f1: 82,
    speed: 80,
  },
  { 
    name: 'Random Forest', 
    accuracy: 88,
    precision: 86,
    recall: 85,
    f1: 85,
    speed: 70,
  },
  { 
    name: 'Neural Network', 
    accuracy: 92,
    precision: 91,
    recall: 88,
    f1: 89,
    speed: 40,
  },
  { 
    name: 'XGBoost', 
    accuracy: 90,
    precision: 89,
    recall: 87,
    f1: 88,
    speed: 65,
  },
];

const algorithmDetails = [
  {
    id: 'logistic-regression',
    name: 'Logistic Regression',
    description: 'A statistical method that estimates the probability of a binary outcome based on one or more predictor variables.',
    strengths: [
      'Simple and easy to implement',
      'Fast training and prediction',
      'Less prone to overfitting with small datasets',
      'Highly interpretable results'
    ],
    weaknesses: [
      'Assumes linear relationship between features',
      'Limited to linear decision boundaries',
      'Not ideal for complex relationships',
      'Requires feature engineering'
    ],
    bestFor: 'Binary classification tasks with clear linear relationships between features',
    accuracy: '78%',
    speed: 'Very Fast (<0.5s)'
  },
  {
    id: 'svm',
    name: 'Support Vector Machine',
    description: 'Creates a hyperplane that separates data into classes with maximum margin between support vectors.',
    strengths: [
      'Effective in high-dimensional spaces',
      'Versatile through different kernel functions',
      'Memory efficient as it uses subset of points',
      'Works well with clear margin of separation'
    ],
    weaknesses: [
      'Not suitable for large datasets (training is slow)',
      'Sensitive to noise',
      'Less interpretable than simpler models',
      'Requires careful tuning of hyperparameters'
    ],
    bestFor: 'Medium-sized datasets with complex but clear separation boundaries',
    accuracy: '85%',
    speed: 'Fast (1-2s)'
  },
  {
    id: 'random-forest',
    name: 'Random Forest',
    description: 'An ensemble learning method that constructs multiple decision trees during training and outputs the mode of the classes.',
    strengths: [
      'Handles non-linear relationships well',
      'Provides feature importance',
      'Resistant to overfitting',
      'Handles missing values and maintains accuracy'
    ],
    weaknesses: [
      'Can be computationally intensive',
      'Less interpretable than single decision trees',
      'May overfit on noisy datasets',
      'Biased towards categorical variables with more levels'
    ],
    bestFor: 'Complex classification tasks with feature interactions and non-linear relationships',
    accuracy: '88%',
    speed: 'Medium (2-5s)'
  },
  {
    id: 'neural-network',
    name: 'Neural Network',
    description: 'Deep learning model inspired by the human brain, consisting of multiple layers of interconnected nodes.',
    strengths: [
      'Excellent at capturing complex patterns',
      'Highly flexible architecture',
      'Can learn feature representation automatically',
      'State-of-the-art performance on many tasks'
    ],
    weaknesses: [
      'Requires large amounts of data',
      'Computationally expensive to train',
      'Difficult to interpret (black box)',
      'Prone to overfitting without regularization'
    ],
    bestFor: 'Complex tasks with large amounts of data and where interpretability is less important than performance',
    accuracy: '92%',
    speed: 'Slow (>10s)'
  },
  {
    id: 'xgboost',
    name: 'XGBoost',
    description: 'Gradient boosting framework that uses ensemble of weak prediction models to create a stronger model.',
    strengths: [
      'Often achieves state-of-the-art results',
      'Handles missing values natively',
      'Built-in regularization',
      'Efficient implementation'
    ],
    weaknesses: [
      'More complex to tune than simpler models',
      'Can overfit if not properly configured',
      'Less interpretable than linear models',
      'Memory intensive for large datasets'
    ],
    bestFor: 'Structured/tabular data where predictive performance is the primary goal',
    accuracy: '90%',
    speed: 'Medium (3-7s)'
  },
];

const radarData = [
  {
    algorithm: 'Logistic Regression',
    accuracy: 78,
    precision: 76,
    recall: 75,
    f1_score: 75,
    speed: 95,
    simplicity: 90,
  },
  {
    algorithm: 'SVM',
    accuracy: 85,
    precision: 83,
    recall: 82,
    f1_score: 82,
    speed: 80,
    simplicity: 70,
  },
  {
    algorithm: 'Random Forest',
    accuracy: 88,
    precision: 86,
    recall: 85,
    f1_score: 85,
    speed: 70,
    simplicity: 65,
  },
  {
    algorithm: 'Neural Network',
    accuracy: 92,
    precision: 91,
    recall: 88,
    f1_score: 89,
    speed: 40,
    simplicity: 30,
  },
  {
    algorithm: 'XGBoost',
    accuracy: 90,
    precision: 89,
    recall: 87,
    f1_score: 88,
    speed: 65,
    simplicity: 50,
  },
];

const processedRadarData = [
  { subject: 'Accuracy', 'Logistic Regression': 78, 'SVM': 85, 'Random Forest': 88, 'Neural Network': 92, 'XGBoost': 90 },
  { subject: 'Precision', 'Logistic Regression': 76, 'SVM': 83, 'Random Forest': 86, 'Neural Network': 91, 'XGBoost': 89 },
  { subject: 'Recall', 'Logistic Regression': 75, 'SVM': 82, 'Random Forest': 85, 'Neural Network': 88, 'XGBoost': 87 },
  { subject: 'F1 Score', 'Logistic Regression': 75, 'SVM': 82, 'Random Forest': 85, 'Neural Network': 89, 'XGBoost': 88 },
  { subject: 'Speed', 'Logistic Regression': 95, 'SVM': 80, 'Random Forest': 70, 'Neural Network': 40, 'XGBoost': 65 },
  { subject: 'Simplicity', 'Logistic Regression': 90, 'SVM': 70, 'Random Forest': 65, 'Neural Network': 30, 'XGBoost': 50 },
];

const Compare = () => {
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
                  Algorithm Comparison
                </span>
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Compare the performance of different machine learning algorithms for genetic mutation classification.
              </p>
            </div>
          </div>
        </section>

        {/* Main Comparison Section */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="detailed">Detailed Comparison</TabsTrigger>
                <TabsTrigger value="algorithm-info">Algorithm Information</TabsTrigger>
              </TabsList>
              
              {/* Overview Tab */}
              <TabsContent value="overview">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Algorithm Accuracy Comparison</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={accuracyData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
                            <YAxis label={{ value: 'Accuracy (%)', angle: -90, position: 'insideLeft' }} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="accuracy" fill="#9b87f5" name="Accuracy" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Performance Metrics Radar</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <RadarChart outerRadius={90} data={processedRadarData}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} />
                            <Radar name="Logistic Regression" dataKey="Logistic Regression" stroke="#8884d8" fill="#8884d8" fillOpacity={0.2} />
                            <Radar name="SVM" dataKey="SVM" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.2} />
                            <Radar name="Random Forest" dataKey="Random Forest" stroke="#ff8042" fill="#ff8042" fillOpacity={0.2} />
                            <Radar name="Neural Network" dataKey="Neural Network" stroke="#0088FE" fill="#0088FE" fillOpacity={0.2} />
                            <Radar name="XGBoost" dataKey="XGBoost" stroke="#FFBB28" fill="#FFBB28" fillOpacity={0.2} />
                            <Legend />
                            <Tooltip />
                          </RadarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Performance Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Algorithm</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Accuracy</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Precision</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Recall</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">F1 Score</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Speed</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                          {performanceData.map((item) => (
                            <tr key={item.name}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{item.name}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{item.accuracy}%</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{item.precision}%</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{item.recall}%</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{item.f1}%</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                                <div className="flex items-center">
                                  <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full mr-2">
                                    <div 
                                      className="h-2 bg-genomic-purple rounded-full" 
                                      style={{ width: `${item.speed}%` }}
                                    />
                                  </div>
                                  <span>{item.speed}%</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Detailed Comparison Tab */}
              <TabsContent value="detailed">
                <div className="grid gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Performance Metrics By Algorithm</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-96">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={performanceData}
                            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
                            <YAxis label={{ value: 'Score (%)', angle: -90, position: 'insideLeft' }} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="accuracy" fill="#9b87f5" name="Accuracy" />
                            <Bar dataKey="precision" fill="#33C3F0" name="Precision" />
                            <Bar dataKey="recall" fill="#7E69AB" name="Recall" />
                            <Bar dataKey="f1" fill="#D6BCFA" name="F1 Score" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>Speed Comparison</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                              data={performanceData}
                              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                              layout="vertical"
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis type="number" domain={[0, 100]} />
                              <YAxis dataKey="name" type="category" width={120} />
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="speed" fill="#33C3F0" name="Processing Speed" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Cost-Benefit Analysis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            {/* A scatter plot showing accuracy vs speed */}
                            <BarChart
                              data={performanceData.map(item => ({
                                name: item.name,
                                value: (item.accuracy + item.f1) / 2 / (100 - item.speed + 10) * 100,
                              }))}
                              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
                              <YAxis label={{ value: 'Efficiency Score', angle: -90, position: 'insideLeft' }} />
                              <Tooltip formatter={(value) => {
                                if (typeof value === 'number') {
                                  return [`${value.toFixed(2)}`, 'Efficiency']
                                }
                                return [value, 'Efficiency']
                              }} />
                              <Legend />
                              <Bar dataKey="value" fill="#7E69AB" name="Efficiency Score" />
                            </BarChart>
                          </ResponsiveContainer>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                          Efficiency score is calculated based on the balance between accuracy and processing speed, 
                          where higher values indicate better overall performance considering both metrics.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
              
              {/* Algorithm Information Tab */}
              <TabsContent value="algorithm-info">
                <div className="space-y-8">
                  {algorithmDetails.map((algorithm) => (
                    <Card key={algorithm.id} id={algorithm.id}>
                      <CardHeader>
                        <CardTitle>{algorithm.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-700 dark:text-slate-300 mb-4">
                          {algorithm.description}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="font-semibold text-lg mb-2 text-slate-800 dark:text-white">Strengths</h3>
                            <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                              {algorithm.strengths.map((strength, idx) => (
                                <li key={idx}>{strength}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h3 className="font-semibold text-lg mb-2 text-slate-800 dark:text-white">Weaknesses</h3>
                            <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                              {algorithm.weaknesses.map((weakness, idx) => (
                                <li key={idx}>{weakness}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <h3 className="font-semibold text-lg mb-2 text-slate-800 dark:text-white">Best Used For</h3>
                          <p className="text-slate-700 dark:text-slate-300">
                            {algorithm.bestFor}
                          </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                          <div>
                            <h3 className="font-semibold text-md mb-1 text-slate-800 dark:text-white">Accuracy</h3>
                            <p className="text-slate-700 dark:text-slate-300">
                              {algorithm.accuracy}
                            </p>
                          </div>
                          
                          <div>
                            <h3 className="font-semibold text-md mb-1 text-slate-800 dark:text-white">Processing Speed</h3>
                            <p className="text-slate-700 dark:text-slate-300">
                              {algorithm.speed}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Compare;
