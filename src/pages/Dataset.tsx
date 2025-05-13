import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { downloadGeneDataset, generateGeneExpressionDataset } from '@/utils/geneDataset';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Dataset = () => {
  const [previewData, setPreviewData] = useState<string>('');
  const [sampleCount, setSampleCount] = useState<number>(1000);

  const handleGeneratePreview = () => {
    const data = generateGeneExpressionDataset(10); // Just 10 samples for preview
    setPreviewData(data);
  };

  const handleDownload = () => {
    downloadGeneDataset(sampleCount);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Gene Expression Dataset</h1>
            <p className="text-muted-foreground mt-2">
              Synthetic gene expression data for machine learning and analysis
            </p>
          </div>
          
          <Separator />
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Dataset Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Description</h3>
                  <p className="text-sm text-muted-foreground">
                    This synthetic dataset represents gene expression data that could be used for 
                    training machine learning models. Each sample represents a single gene with 
                    various features.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-medium">Features</h3>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    <li><span className="font-medium">Gene_ID:</span> Unique identifier for each gene (e.g., GENE0001)</li>
                    <li><span className="font-medium">Gene_Name:</span> Common gene name (e.g., BRCA1)</li>
                    <li><span className="font-medium">Expression_Level:</span> A float number indicating expression intensity (0.01 - 15.0)</li>
                    <li><span className="font-medium">Mutation_Count:</span> Number of observed mutations (integer 0-10)</li>
                    <li><span className="font-medium">GC_Content:</span> GC content percentage in the gene sequence (0.3-0.8)</li>
                    <li><span className="font-medium">Chromosome:</span> Chromosome location (1-22, X, Y)</li>
                    <li><span className="font-medium">Is_Disease_Associated:</span> Binary label (0=No, 1=Yes) indicating if the gene is linked to a disease</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium">Distribution</h3>
                  <p className="text-sm text-muted-foreground">
                    Approximately 30% of genes are marked as disease-associated (Is_Disease_Associated = 1).
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Download Dataset</h2>
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium">
                    Number of samples:
                    <select 
                      className="ml-2 p-2 border rounded-md"
                      value={sampleCount}
                      onChange={(e) => setSampleCount(Number(e.target.value))}
                    >
                      <option value={100}>100</option>
                      <option value={500}>500</option>
                      <option value={1000}>1,000</option>
                      <option value={5000}>5,000</option>
                      <option value={10000}>10,000</option>
                    </select>
                  </label>
                </div>
                
                <div className="space-y-2">
                  <Button onClick={handleDownload} className="w-full">
                    Download CSV File
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Format: CSV with headers (UTF-8 encoding)
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    onClick={handleGeneratePreview}
                    className="w-full"
                  >
                    Preview Sample Data
                  </Button>
                </div>
                
                {previewData && (
                  <div className="mt-4">
                    <h3 className="font-medium mb-2">Data Preview (10 samples)</h3>
                    <pre className="bg-muted p-2 rounded-md text-xs overflow-x-auto max-h-48">
                      {previewData}
                    </pre>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dataset;
