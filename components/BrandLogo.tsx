
import React from 'react';

interface BrandLogoProps {
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={className}>
      <img 
        src="/Logo.png" 
        alt="AuralithBit Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default BrandLogo;
