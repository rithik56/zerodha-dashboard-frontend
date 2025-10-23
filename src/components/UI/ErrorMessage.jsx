// ============================================ 
// src/components/UI/ErrorMessage.jsx 
// ============================================ 
import React from 'react'; 

export const ErrorMessage = ({ message, onRetry, loginUrl }) => ( 
  <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 mb-6"> 
    <p className="text-red-400">{message}</p> 
    {onRetry && ( 
      <button 
        onClick={onRetry} 
        className="mt-2 text-sm text-blue-400 hover:text-blue-300 underline" 
      > 
        Try again 
      </button> 
    )} 
    {loginUrl && ( 
      <a 
        href={loginUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block mt-2 text-sm text-green-400 hover:text-green-300 underline" 
      > 
        Click here to authenticate 
      </a> 
    )} 
  </div> 
);