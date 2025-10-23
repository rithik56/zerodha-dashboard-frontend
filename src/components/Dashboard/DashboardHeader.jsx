// ============================================ 
// src/components/Dashboard/DashboardHeader.jsx 
// ============================================ 
import React from 'react'; 
import { RefreshCw } from 'lucide-react'; 

export const DashboardHeader = ({ 
  title = 'Portfolio Dashboard', 
  subtitle = 'Zerodha Holdings Overview', 
  onRefresh, 
  isRefreshing = false, 
  isAuthenticated = true, 
  loginUrl = null, 
}) => { 
  return ( 
    <div className="flex items-center justify-between mb-8"> 
      <div> 
        <h1 className="text-4xl font-bold text-white mb-2">{title}</h1> 
        <p className="text-slate-400">{subtitle}</p> 
      </div> 
      
      <div className="flex gap-3"> 
        {!isAuthenticated && loginUrl && ( 
          <a 
            href={loginUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all" 
          > 
            Login with Zerodha 
          </a> 
        )} 
        
        {isAuthenticated && onRefresh && ( 
          <button 
            onClick={onRefresh} 
            disabled={isRefreshing} 
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed" 
          > 
            <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} /> 
            Refresh 
          </button> 
        )} 
      </div> 
    </div> 
  ); 
};