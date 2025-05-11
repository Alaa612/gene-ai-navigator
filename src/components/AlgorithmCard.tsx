
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

interface AlgorithmCardProps {
  name: string;
  description: string;
  accuracy: number;
  speed: string;
  tooltip: string;
  onSelect: () => void;
}

const AlgorithmCard = ({ name, description, accuracy, speed, tooltip, onSelect }: AlgorithmCardProps) => {
  return (
    <Card className="overflow-hidden bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-genomic-purple dark:hover:border-genomic-purple transition-colors">
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg">{name}</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            {description}
          </CardDescription>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-500">
                <HelpCircle size={18} />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Accuracy</p>
            <div className="flex items-center">
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mr-2">
                <div 
                  className="h-2 bg-genomic-purple rounded-full" 
                  style={{ width: `${accuracy}%` }}
                />
              </div>
              <span className="text-xs font-medium">{accuracy}%</span>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">Speed</p>
            <p className="font-medium text-sm">{speed}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button 
          onClick={onSelect} 
          variant="outline" 
          className="w-full hover:bg-genomic-purple hover:text-white transition-colors"
        >
          Select Algorithm
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AlgorithmCard;
