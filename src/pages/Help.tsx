
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const faqItems = [
  {
    question: "What is genetic mutation classification?",
    answer: "Genetic mutation classification is the process of categorizing genetic mutations based on their characteristics, potential impact, and significance. It helps researchers understand how specific mutations might affect biological functions, cause diseases, or influence treatment responses."
  },
  {
    question: "How accurate are the machine learning algorithms used?",
    answer: "The accuracy of our algorithms ranges from 78% to 92%, depending on the algorithm chosen. Neural Networks typically provide the highest accuracy (92%) while Logistic Regression offers around 78% accuracy but with faster processing times. The accuracy is continuously improved as our models learn from more data."
  },
  {
    question: "Can I use my own dataset for classification?",
    answer: "Currently, the platform is designed to classify individual mutation descriptions using our pre-trained models. In future updates, we plan to add functionality for users to upload and analyze their own datasets or to train custom models for specific research needs."
  },
  {
    question: "What information should I include in my mutation description for best results?",
    answer: "For optimal results, include details such as: the specific gene name, the mutation location (e.g., exon number, nucleotide position), the type of mutation (e.g., substitution, deletion, insertion), the exact change (e.g., G>A, p.Val600Glu), and any known functional consequences if available."
  },
  {
    question: "How does the platform handle novel mutations?",
    answer: "Our algorithms can classify novel mutations based on patterns learned from similar, known mutations. While the classification of novel mutations may have lower confidence scores, the system provides probability distributions across possible classifications to assist researchers in making informed assessments."
  },
  {
    question: "Can I download or export my results?",
    answer: "Yes, all classification results can be downloaded in multiple formats including CSV, JSON, and PDF. These exports include the classification outputs, confidence scores, and performance metrics of the algorithm used."
  },
];

const glossaryItems = [
  {
    term: "Allele",
    definition: "An alternative form of a gene that arises by mutation and is found at the same place on a chromosome."
  },
  {
    term: "Amino Acid",
    definition: "The building blocks of proteins, encoded by DNA. There are 20 different amino acids that can be combined to make a protein."
  },
  {
    term: "Base Pair",
    definition: "Two nucleotides on opposite complementary DNA strands that are connected via hydrogen bonds (A-T and G-C)."
  },
  {
    term: "Chromosome",
    definition: "A thread-like structure of nucleic acids and protein found in the nucleus of most living cells, carrying genetic information in the form of genes."
  },
  {
    term: "Codon",
    definition: "A sequence of three nucleotides that together form a unit of genetic code in a DNA or RNA molecule, specifying a particular amino acid in a protein."
  },
  {
    term: "Deletion",
    definition: "A type of mutation where a section of DNA is lost or deleted during DNA replication."
  },
  {
    term: "Exon",
    definition: "The part of a gene that encodes for a protein or part of it. Exons are separated by introns."
  },
  {
    term: "Gene",
    definition: "A sequence of nucleotides in DNA that encodes the synthesis of a gene product, either RNA or protein."
  },
  {
    term: "Genome",
    definition: "The complete set of genes or genetic material present in a cell or organism."
  },
  {
    term: "Insertion",
    definition: "A type of mutation where additional base pairs are inserted into a DNA sequence."
  },
  {
    term: "Intron",
    definition: "A segment of a DNA or RNA molecule that does not code for proteins and interrupts the sequence of genes."
  },
  {
    term: "Missense Mutation",
    definition: "A point mutation that results in the substitution of a different amino acid in the protein product."
  },
  {
    term: "Mutation",
    definition: "A permanent alteration in the DNA sequence that may lead to changes in the structure or function of a gene product."
  },
  {
    term: "Natural Language Processing (NLP)",
    definition: "A field of artificial intelligence focused on enabling computers to understand, interpret, and manipulate human language."
  },
  {
    term: "Neural Network",
    definition: "A series of algorithms designed to recognize patterns in data, modeled loosely after the human brain."
  },
  {
    term: "Nonsense Mutation",
    definition: "A point mutation that results in a premature stop codon, leading to a truncated protein product."
  },
  {
    term: "Nucleotide",
    definition: "The basic structural unit of DNA and RNA, consisting of a base, a sugar molecule, and a phosphate group."
  },
  {
    term: "Phenotype",
    definition: "The set of observable characteristics of an individual resulting from the interaction of its genotype with the environment."
  },
  {
    term: "Polymorphism",
    definition: "The presence of genetic variation within a population."
  },
  {
    term: "SNP (Single Nucleotide Polymorphism)",
    definition: "A variation in a single nucleotide that occurs at a specific position in the genome, where each variation is present in a significant portion of the population."
  },
  {
    term: "Splicing",
    definition: "The process where introns are removed and exons are joined together in RNA after transcription."
  },
  {
    term: "Transcription",
    definition: "The process of creating an RNA copy of a DNA sequence, the first step of gene expression."
  },
  {
    term: "Translation",
    definition: "The process where ribosomes synthesize proteins after the process of transcription of DNA to RNA."
  },
  {
    term: "Wild Type",
    definition: "The typical or naturally occurring form of an organism, strain, gene, or characteristic as it occurs in nature."
  }
];

const algorithmTerms = [
  {
    term: "Accuracy",
    definition: "The proportion of correct predictions among the total number of predictions made by a model."
  },
  {
    term: "Classification",
    definition: "The process of predicting the class or category to which a data point belongs."
  },
  {
    term: "Confusion Matrix",
    definition: "A table used to describe the performance of a classification model by showing the counts of true positives, false positives, true negatives, and false negatives."
  },
  {
    term: "F1 Score",
    definition: "The harmonic mean of precision and recall, providing a balance between these two metrics."
  },
  {
    term: "Feature",
    definition: "An individual measurable property or characteristic of a phenomenon being observed, used as input to a machine learning model."
  },
  {
    term: "Logistic Regression",
    definition: "A statistical model that uses a logistic function to model a binary dependent variable, often used for binary classification problems."
  },
  {
    term: "Neural Network",
    definition: "A series of algorithms designed to recognize patterns in data, modeled loosely after the human brain."
  },
  {
    term: "Overfitting",
    definition: "When a model learns the detail and noise in the training data to the extent that it negatively impacts the performance of the model on new data."
  },
  {
    term: "Precision",
    definition: "The ratio of correctly predicted positive observations to the total predicted positives, indicating the accuracy of positive predictions."
  },
  {
    term: "Random Forest",
    definition: "An ensemble learning method that constructs multiple decision trees during training and outputs the class that is the mode of the individual trees' classifications."
  },
  {
    term: "Recall (Sensitivity)",
    definition: "The ratio of correctly predicted positive observations to all observations in the actual positive class, indicating the model's ability to find all positive instances."
  },
  {
    term: "SVM (Support Vector Machine)",
    definition: "A supervised learning model that analyzes data for classification and regression analysis by finding the hyperplane that best divides a dataset into classes."
  },
  {
    term: "Training Data",
    definition: "The dataset used to train a machine learning model, consisting of input features and their corresponding target values."
  },
  {
    term: "Validation Data",
    definition: "A dataset used to evaluate a model's performance during training and tune hyperparameters."
  },
  {
    term: "XGBoost",
    definition: "An implementation of gradient boosting decision trees designed for speed and performance, often used for classification and regression."
  }
];

const Help = () => {
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
                  Help Center
                </span>
              </h1>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Everything you need to know about genetic mutation classification and using our platform.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="faq" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="faq">Frequently Asked Questions</TabsTrigger>
                <TabsTrigger value="glossary">Glossary</TabsTrigger>
                <TabsTrigger value="guide">User Guide</TabsTrigger>
              </TabsList>
              
              {/* FAQ Tab */}
              <TabsContent value="faq">
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                    <CardDescription>
                      Find answers to common questions about genetic mutation classification and using our platform.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {faqItems.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent>
                            <p className="text-slate-700 dark:text-slate-300">
                              {item.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* Glossary Tab */}
              <TabsContent value="glossary">
                <Card>
                  <CardHeader>
                    <CardTitle>Glossary</CardTitle>
                    <CardDescription>
                      Learn the terminology related to genetic mutations and machine learning classification.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="genetic" className="w-full">
                      <TabsList className="mb-4">
                        <TabsTrigger value="genetic">Genetic Terms</TabsTrigger>
                        <TabsTrigger value="algorithms">Algorithm Terms</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="genetic">
                        <div className="grid md:grid-cols-2 gap-4">
                          {glossaryItems.map((item, index) => (
                            <div key={index} className="border-b border-slate-200 dark:border-slate-700 pb-4 mb-4 last:border-0 last:mb-0 last:pb-0">
                              <h3 className="font-semibold text-lg text-slate-800 dark:text-white mb-1">{item.term}</h3>
                              <p className="text-slate-700 dark:text-slate-300 text-sm">
                                {item.definition}
                              </p>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="algorithms">
                        <div className="grid md:grid-cols-2 gap-4">
                          {algorithmTerms.map((item, index) => (
                            <div key={index} className="border-b border-slate-200 dark:border-slate-700 pb-4 mb-4 last:border-0 last:mb-0 last:pb-0">
                              <h3 className="font-semibold text-lg text-slate-800 dark:text-white mb-1">{item.term}</h3>
                              <p className="text-slate-700 dark:text-slate-300 text-sm">
                                {item.definition}
                              </p>
                            </div>
                          ))}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </TabsContent>
              
              {/* User Guide Tab */}
              <TabsContent value="guide">
                <Card>
                  <CardHeader>
                    <CardTitle>User Guide</CardTitle>
                    <CardDescription>
                      Step-by-step instructions for using the Genetic Mutation Classifier platform.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">Getting Started</h3>
                        <ol className="list-decimal pl-5 space-y-3 text-slate-700 dark:text-slate-300">
                          <li>
                            <span className="font-medium">Navigate to the Classify page:</span> Click on "Classify" in the top navigation menu to access the classification interface.
                          </li>
                          <li>
                            <span className="font-medium">Prepare your mutation text:</span> Gather the descriptive text about the genetic mutation you wish to classify. The more details provided, the more accurate the classification will be.
                          </li>
                          <li>
                            <span className="font-medium">Select an algorithm:</span> Choose from available algorithms based on your specific needs. Each algorithm has different strengths and performance characteristics.
                          </li>
                        </ol>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">Using the Classification Tool</h3>
                        <ol className="list-decimal pl-5 space-y-3 text-slate-700 dark:text-slate-300">
                          <li>
                            <span className="font-medium">Enter mutation description:</span> Type or paste your mutation text into the input field. Include details such as gene name, mutation type, and location.
                          </li>
                          <li>
                            <span className="font-medium">Select your preferred algorithm:</span> Review the algorithm options and select the one that best suits your needs based on accuracy, speed, and complexity.
                          </li>
                          <li>
                            <span className="font-medium">Submit for classification:</span> Click the "Classify Mutation" button to process your submission.
                          </li>
                          <li>
                            <span className="font-medium">Review results:</span> Analyze the classification output, which includes probability distributions, performance metrics, and detailed analysis.
                          </li>
                        </ol>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">Understanding Results</h3>
                        <ul className="list-disc pl-5 space-y-3 text-slate-700 dark:text-slate-300">
                          <li>
                            <span className="font-medium">Classification overview:</span> Provides the primary classification with confidence level and algorithm used.
                          </li>
                          <li>
                            <span className="font-medium">Probability distribution:</span> Visualizes the probability of the mutation belonging to each possible class.
                          </li>
                          <li>
                            <span className="font-medium">Detailed analysis:</span> Shows key features identified in the text and their influence on the classification.
                          </li>
                          <li>
                            <span className="font-medium">Performance metrics:</span> Displays accuracy, precision, recall, and F1 scores for the selected algorithm on similar mutation classifications.
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">Comparing Algorithms</h3>
                        <ul className="list-disc pl-5 space-y-3 text-slate-700 dark:text-slate-300">
                          <li>
                            <span className="font-medium">Visit the Compare page:</span> Access detailed comparisons of different machine learning algorithms.
                          </li>
                          <li>
                            <span className="font-medium">Review performance metrics:</span> Compare accuracy, processing speed, and other important metrics across algorithms.
                          </li>
                          <li>
                            <span className="font-medium">Algorithm information:</span> Learn about the strengths, weaknesses, and best use cases for each algorithm.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Help;
