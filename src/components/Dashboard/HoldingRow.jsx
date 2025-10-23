// ============================================ 
// src/components/Dashboard/HoldingRow.jsx 
// ============================================ 
import React from 'react'; 
import { TrendingUp, TrendingDown } from 'lucide-react'; 
import { formatCurrency, formatPercentage } from '../../utils/formatters'; 
import { calculateHoldingPnL } from '../../utils/calculations'; 

export const HoldingRow = ({ holding }) => { 
  const { pnl, pnlPercentage } = calculateHoldingPnL(holding); 
  const isProfit = pnl >= 0; 
  const colorClass = isProfit ? 'text-green-400' : 'text-red-400'; 
  const Icon = isProfit ? TrendingUp : TrendingDown; 

  return ( 
    <tr className="border-t border-slate-700 hover:bg-slate-700/50 transition-colors"> 
      <td className="px-6 py-4"> 
        <div className="font-semibold text-white">{holding.tradingsymbol}</div> 
        <div className="text-sm text-slate-400">{holding.exchange}</div> 
      </td> 
      <td className="px-6 py-4 text-right text-white">{holding.quantity}</td> 
      <td className="px-6 py-4 text-right text-white"> 
        {formatCurrency(holding.average_price)} 
      </td> 
      <td className="px-6 py-4 text-right text-white"> 
        {formatCurrency(holding.last_price)} 
      </td> 
      <td className="px-6 py-4 text-right text-white"> 
        {formatCurrency(holding.investment)} 
      </td> 
      <td className="px-6 py-4 text-right text-white"> 
        {formatCurrency(holding.currentValue)} 
      </td> 
      <td className={`px-6 py-4 text-right font-semibold ${colorClass}`}> 
        {formatCurrency(pnl)} 
      </td> 
      <td className={`px-6 py-4 text-right font-semibold ${colorClass}`}> 
        <div className="flex items-center justify-end gap-1"> 
          <Icon className="w-4 h-4" /> 
          {formatPercentage(pnlPercentage)} 
        </div> 
      </td> 
    </tr> 
  ); 
};