// ============================================ 
// src/components/Dashboard/HoldingsTable.jsx 
// ============================================ 
import React from 'react'; 
import { HoldingRow } from './HoldingRow'; 
import { LoadingSpinner } from '../UI/LoadingSpinner'; 

const TableHeader = () => ( 
  <thead className="bg-slate-900"> 
    <tr> 
      <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">Symbol</th> 
      <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">Quantity</th> 
      <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">Avg. Price</th> 
      <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">LTP</th> 
      <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">Investment</th> 
      <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">Current Value</th> 
      <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">P&L</th> 
      <th className="px-6 py-4 text-right text-sm font-semibold text-slate-300">P&L %</th> 
    </tr> 
  </thead> 
); 

const EmptyState = ({ message = 'No holdings found' }) => ( 
  <tr> 
    <td colSpan="8" className="px-6 py-12 text-center text-slate-400"> 
      {message} 
    </td> 
  </tr> 
); 

export const HoldingsTable = ({ holdings, loading }) => { 
  return ( 
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden"> 
      <div className="overflow-x-auto"> 
        <table className="w-full"> 
          <TableHeader /> 
          <tbody> 
            {loading ? ( 
              <tr> 
                <td colSpan="8"> 
                  <LoadingSpinner message="Loading holdings..." /> 
                </td> 
              </tr> 
            ) : holdings.length === 0 ? ( 
              <EmptyState /> 
            ) : ( 
              holdings.map((holding, index) => ( 
                <HoldingRow key={holding.isin || index} holding={holding} /> 
              )) 
            )} 
          </tbody> 
        </table> 
      </div> 
    </div> 
  ); 
};