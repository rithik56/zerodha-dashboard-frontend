// ============================================ 
// src/components/UI/LoadingSpinner.jsx 
// ============================================ 
import React from 'react'; 
import { RefreshCw } from 'lucide-react'; 

export const LoadingSpinner = ({ message = 'Loading...' }) => ( 
  <div className="flex flex-col items-center justify-center py-12"> 
    <RefreshCw className="w-8 h-8 animate-spin text-slate-400 mb-2" /> 
    <p className="text-slate-400">{message}</p> 
  </div> 
);