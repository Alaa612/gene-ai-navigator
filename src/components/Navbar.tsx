
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Check if user prefers dark mode
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                  window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-genomic-purple to-genomic-blue flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 6L21 17H3L12 6Z" fill="currentColor" />
                </svg>
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-genomic-purple to-genomic-blue bg-clip-text text-transparent">
                GeneMutate
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-genomic-purple dark:hover:text-genomic-purple-light transition-colors">
              Home
            </Link>
            <Link to="/classify" className="text-gray-700 dark:text-gray-200 hover:text-genomic-purple dark:hover:text-genomic-purple-light transition-colors">
              Classify
            </Link>
            <Link to="/compare" className="text-gray-700 dark:text-gray-200 hover:text-genomic-purple dark:hover:text-genomic-purple-light transition-colors">
              Compare
            </Link>
            <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-genomic-purple dark:hover:text-genomic-purple-light transition-colors">
              About
            </Link>
            <Link to="/help" className="text-gray-700 dark:text-gray-200 hover:text-genomic-purple dark:hover:text-genomic-purple-light transition-colors">
              Help
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="ml-4"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
              <span className="sr-only">Toggle dark mode</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="mr-2"
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
              <span className="sr-only">Toggle dark mode</span>
            </Button>

            <button onClick={toggleMenu} className="text-gray-700 dark:text-gray-200 hover:text-genomic-purple">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg py-2">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-6">
            <Link to="/" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-genomic-purple dark:hover:text-genomic-purple-light">
              Home
            </Link>
            <Link to="/classify" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-genomic-purple dark:hover:text-genomic-purple-light">
              Classify
            </Link>
            <Link to="/compare" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-genomic-purple dark:hover:text-genomic-purple-light">
              Compare
            </Link>
            <Link to="/about" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-genomic-purple dark:hover:text-genomic-purple-light">
              About
            </Link>
            <Link to="/help" className="block py-2 text-gray-700 dark:text-gray-200 hover:text-genomic-purple dark:hover:text-genomic-purple-light">
              Help
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
