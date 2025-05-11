
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DNAAnimation from "@/components/DNAAnimation";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-16 md:pt-24 pb-16 relative overflow-hidden dna-bg">
          <div className="absolute top-0 right-0 opacity-10 w-1/3 h-full">
            <DNAAnimation />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-genomic-purple to-genomic-blue bg-clip-text text-transparent">
                  About Our Project
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300">
                Leveraging artificial intelligence to transform genetic mutation classification and analysis
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-title mb-6">Our Mission</h2>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                Our platform uses AI and natural language processing to help researchers and enthusiasts classify genetic mutations using text-based data. By leveraging machine learning models, we aim to make genetic analysis more accessible, accurate, and efficient than traditional methods.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                The GeneMutate project was born from the need to interpret complex genetic information without requiring specialized bioinformatics expertise. Our tools bridge the gap between raw genetic data and meaningful insights, enabling researchers to focus on discovery rather than data processing.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-title mb-6">Impact on Research</h2>
              
              <div className="space-y-8">
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">Healthcare Advancements</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    By accurately classifying genetic mutations, our platform helps healthcare professionals develop personalized treatment plans based on a patient's genetic profile. This enables more effective therapies with fewer side effects.
                  </p>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">Genetic Research</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Researchers can analyze large datasets of genetic mutations more efficiently, discovering patterns and relationships that would be difficult to identify manually. This accelerates the pace of genetic research and discovery.
                  </p>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">Drug Development</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Pharmaceutical companies can use our platform to identify potential drug targets and understand how genetic mutations might affect drug efficacy and safety, leading to more targeted and effective medications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="section-title mb-6">Our Technology</h2>
              
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">Natural Language Processing</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Our platform uses advanced NLP techniques to extract meaningful information from text descriptions of genetic mutations. This allows researchers to work with unstructured data from scientific literature, clinical notes, and research papers.
                </p>
              </div>
              
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">Machine Learning Algorithms</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  We employ a variety of machine learning algorithms, from traditional statistical methods to advanced neural networks. Each algorithm has been carefully tuned to handle the specific challenges of genetic data analysis.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-slate-800 dark:text-white">Interactive Visualization</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Complex genetic data is presented through intuitive visualizations that make it easy to understand relationships, patterns, and insights. This helps bridge the gap between raw data and actionable information.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
