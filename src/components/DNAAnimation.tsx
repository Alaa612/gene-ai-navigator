
import React from 'react';

const DNAAnimation = ({ className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center animate-dna-rotate opacity-20">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M150 50C116.863 50 90 76.8629 90 110C90 143.137 116.863 170 150 170C183.137 170 210 143.137 210 110C210 76.8629 183.137 50 150 50ZM150 250C116.863 250 90 223.137 90 190C90 156.863 116.863 130 150 130C183.137 130 210 156.863 210 190C210 223.137 183.137 250 150 250Z"
            stroke="url(#dna-gradient)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M96 80L204 220"
            stroke="url(#dna-gradient)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="15 15"
          />
          <path
            d="M204 80L96 220"
            stroke="url(#dna-gradient)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="15 15"
          />
          <defs>
            <linearGradient
              id="dna-gradient"
              x1="50"
              y1="50"
              x2="250"
              y2="250"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9b87f5" />
              <stop offset="1" stopColor="#33C3F0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default DNAAnimation;
