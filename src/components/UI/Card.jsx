// ============================================ 
// src/components/UI/Card.jsx 
// ============================================ 
import React from 'react'; 

export const Card = ({ children, className = '', variant = 'default' }) => { 
  const baseClass = 'bg-slate-800 rounded-xl p-6 border'; 
  const variants = { 
    default: 'border-slate-700', 
    profit: 'border-green-500/30', 
    loss: 'border-red-500/30', 
  }; 

  return ( 
    <div className={`${baseClass} ${variants[variant]} ${className}`}> 
      {children} 
    </div> 
  ); 
};