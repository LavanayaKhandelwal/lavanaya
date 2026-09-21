import React from 'react';

/**
 * Hand-drawn SVG illustrations and editorial marks
 */

export const FlowerMark: React.FC<{ className?: string; size?: number }> = ({ 
  className = "w-6 h-6", 
  size = 24 
}) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Abstract hand-drawn 8-petal daisy mark */}
    <circle cx="16" cy="7" r="4.5" fill="#D69589" stroke="#3E2723" strokeWidth="1.5" />
    <circle cx="22.3" cy="9.7" r="4.5" fill="#A38D89" stroke="#3E2723" strokeWidth="1.5" />
    <circle cx="25" cy="16" r="4.5" fill="#D69589" stroke="#3E2723" strokeWidth="1.5" />
    <circle cx="22.3" cy="22.3" r="4.5" fill="#D69589" stroke="#3E2723" strokeWidth="1.5" />
    <circle cx="16" cy="25" r="4.5" fill="#A38D89" stroke="#3E2723" strokeWidth="1.5" />
    <circle cx="9.7" cy="22.3" r="4.5" fill="#D69589" stroke="#3E2723" strokeWidth="1.5" />
    <circle cx="7" cy="16" r="4.5" fill="#A38D89" stroke="#3E2723" strokeWidth="1.5" />
    <circle cx="9.7" cy="9.7" r="4.5" fill="#D69589" stroke="#3E2723" strokeWidth="1.5" />
    {/* Center dot */}
    <circle cx="16" cy="16" r="4.8" fill="#3E2723" />
    <circle cx="16" cy="16" r="2" fill="#F4C9D6" />
  </svg>
);

export const HandDrawnArrow: React.FC<{ 
  className?: string; 
  direction?: 'down' | 'right' | 'curved-right' | 'curved-left';
  color?: string;
}> = ({ className = "w-12 h-8", direction = 'curved-right', color = "#3E2723" }) => {
  if (direction === 'curved-right') {
    return (
      <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 45 C 30 15, 65 10, 85 30"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="1 0"
        />
        <path
          d="M72 26 L87 32 L82 45"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (direction === 'curved-left') {
    return (
      <svg className={className} viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M90 45 C 70 15, 35 10, 15 30"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M28 26 L13 32 L18 45"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 20 H52" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M40 10 L52 20 L40 30" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const HandDrawnStar: React.FC<{ className?: string; color?: string }> = ({ 
  className = "w-5 h-5", 
  color = "#3E2723" 
}) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M12 2L14.4 8.6L21.5 9.2L16.1 13.9L17.8 20.8L12 17.1L6.2 20.8L7.9 13.9L2.5 9.2L9.6 8.6L12 2Z" 
      stroke={color} 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

export const WashiTape: React.FC<{ 
  color?: string; 
  className?: string;
  width?: string;
}> = ({ color = "#D69589", className = "", width = "w-24" }) => (
  <div 
    className={`h-6 ${width} border border-[#3E2723]/20 opacity-85 shadow-xs ${className}`}
    style={{ 
      backgroundColor: color,
      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(62,39,35,0.03) 4px, rgba(62,39,35,0.03) 8px)',
      clipPath: 'polygon(0% 15%, 3% 0%, 97% 0%, 100% 18%, 98% 85%, 100% 100%, 2% 100%, 0% 82%)'
    }}
  />
);

export const PaperClip: React.FC<{ className?: string; color?: string }> = ({ 
  className = "w-6 h-10", 
  color = "#3E2723" 
}) => (
  <svg className={className} viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M7 14V29C7 32.866 10.134 36 14 36C17.866 36 21 32.866 21 29V9C21 5.134 17.866 2 14 2C10.134 2 7 5.134 7 9V26C7 28.2091 8.79086 30 11 30C13.2091 30 15 28.2091 15 26V13" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

export const PencilScribble: React.FC<{ className?: string }> = ({ className = "w-28 h-6" }) => (
  <svg className={className} viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M2 12C20 4 35 18 50 10C65 2 80 18 95 9C105 3 112 14 118 8" 
      stroke="#3E2723" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
    />
  </svg>
);
