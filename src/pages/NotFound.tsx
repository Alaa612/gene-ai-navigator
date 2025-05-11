
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import DNAAnimation from "@/components/DNAAnimation";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 px-4">
      <div className="relative w-full max-w-lg">
        <div className="absolute -top-40 left-20 opacity-20">
          <DNAAnimation className="w-80 h-80" />
        </div>
        
        <div className="text-center relative z-10">
          <h1 className="text-8xl font-bold bg-gradient-to-r from-genomic-purple to-genomic-blue bg-clip-text text-transparent mb-4">
            404
          </h1>
          <p className="text-2xl text-slate-700 dark:text-slate-300 mb-8">
            Oops! This genetic sequence doesn't exist.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            The page you're looking for couldn't be found.
            <br />
            It might have been deleted, moved, or never existed.
          </p>
          <Link to="/">
            <Button className="btn-gradient px-8 py-6 text-lg rounded-xl">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
