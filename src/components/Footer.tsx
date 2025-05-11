
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <Link to="/" className="inline-flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-genomic-purple to-genomic-blue flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6L21 17H3L12 6Z" fill="currentColor" />
                </svg>
              </div>
              <span className="ml-2 text-lg font-bold bg-gradient-to-r from-genomic-purple to-genomic-blue bg-clip-text text-transparent">
                GeneMutate
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Advanced genetic mutation classification platform using artificial intelligence and natural language processing.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Navigation</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-genomic-purple dark:hover:text-genomic-purple-light">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/classify" className="text-sm text-gray-600 dark:text-gray-400 hover:text-genomic-purple dark:hover:text-genomic-purple-light">
                  Classify Mutations
                </Link>
              </li>
              <li>
                <Link to="/compare" className="text-sm text-gray-600 dark:text-gray-400 hover:text-genomic-purple dark:hover:text-genomic-purple-light">
                  Compare Algorithms
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-genomic-purple dark:hover:text-genomic-purple-light">
                  About Project
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/help" className="text-sm text-gray-600 dark:text-gray-400 hover:text-genomic-purple dark:hover:text-genomic-purple-light">
                  Help & Documentation
                </Link>
              </li>
              <li>
                <Link to="/glossary" className="text-sm text-gray-600 dark:text-gray-400 hover:text-genomic-purple dark:hover:text-genomic-purple-light">
                  Glossary
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-genomic-purple dark:hover:text-genomic-purple-light">
                  Research Papers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-genomic-purple dark:hover:text-genomic-purple-light">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            &copy; {new Date().getFullYear()} GeneMutate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
