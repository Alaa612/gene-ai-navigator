
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Dna } from "lucide-react";
import DNAAnimation from "@/components/DNAAnimation";
import FeatureCard from "@/components/FeatureCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-16 md:pt-24 pb-24 md:pb-32 dna-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12">
                <div className="relative animate-fade-in">
                  <span className="inline-block bg-genomic-purple/10 text-genomic-purple dark:bg-genomic-purple/20 dark:text-genomic-purple-light rounded-full px-3 py-1 text-sm font-medium mb-4">
                    AI-Powered Genomic Analysis
                  </span>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    <span className="bg-gradient-to-r from-genomic-purple to-genomic-blue bg-clip-text text-transparent">
                      Classify. Compare. Understand
                    </span>
                    <br />
                    <span className="text-slate-800 dark:text-white">
                      Genetic Mutations with AI.
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl">
                    Our platform uses advanced machine learning and natural language processing to help researchers classify genetic mutations from text data with unprecedented accuracy.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/classify">
                      <Button className="btn-gradient text-lg px-8 py-6 rounded-xl">
                        Start Classifying
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link to="/about">
                      <Button variant="outline" className="text-lg px-8 py-6 rounded-xl">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 mt-12 md:mt-0">
                <div className="relative h-64 md:h-96 animate-float">
                  <DNAAnimation className="absolute inset-0" />
                  <div className="absolute inset-0 bg-gradient-to-br from-genomic-purple/20 to-genomic-blue/20 rounded-3xl backdrop-blur-sm glass-card animate-pulse-gentle"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Dna size={120} className="text-genomic-purple/80" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Section */}
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="section-title mb-4">Advanced Features</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Explore the cutting-edge tools that make genetic mutation classification more accessible and accurate than ever before.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Dna className="w-6 h-6 text-genomic-purple" />}
                title="Text-Based Classification"
                description="Upload or paste text descriptions of genetic mutations extracted from medical literature or research papers."
              />

              <FeatureCard
                icon={
                  <svg className="w-6 h-6 text-genomic-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                  </svg>
                }
                title="Multiple ML Algorithms"
                description="Choose between different machine learning algorithms including Logistic Regression, SVM, Random Forest, and Neural Networks."
              />

              <FeatureCard
                icon={<Dna className="w-6 h-6 text-genomic-purple" />}
                title="Visual Result Analysis"
                description="Visualize classification results through intuitive charts, accuracy metrics, and performance comparisons."
              />

              <FeatureCard
                icon={
                  <svg className="w-6 h-6 text-genomic-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                }
                title="Algorithm Comparison"
                description="Compare performance metrics across different algorithms to identify the best approach for your specific data."
              />

              <FeatureCard
                icon={<Dna className="w-6 h-6 text-genomic-purple" />}
                title="Real-time Processing"
                description="Get instantaneous classification results without lengthy processing times, thanks to our optimized algorithms."
              />

              <FeatureCard
                icon={
                  <svg className="w-6 h-6 text-genomic-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                }
                title="Comprehensive Help"
                description="Access our detailed documentation, glossary, and educational resources to better understand genetic mutations and our tools."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-genomic-purple/10 to-genomic-blue/10 dark:from-genomic-purple/5 dark:to-genomic-blue/5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h2 className="section-title mb-6">Ready to Start Classifying?</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
                Begin analyzing genetic mutations with our powerful AI platform. No account required to try it out.
              </p>
              <Link to="/classify">
                <Button className="btn-gradient text-lg px-8 py-6 rounded-xl">
                  Try It Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
