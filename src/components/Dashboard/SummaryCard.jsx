// ============================================ 
// src/components/Dashboard/SummaryCard.jsx 
// ============================================ 
import React from 'react'; 
import { Card } from '../UI/Card'; 
import { formatCurrency, formatPercentage } from '../../utils/formatters'; 

export const SummaryCard = ({ icon: Icon, label, value, isPnL = false }) => { 
  const isProfit = isPnL && value >= 0; 
  const isLoss = isPnL && value < 0; 
  const variant = isProfit ? 'profit' : isLoss ? 'loss' : 'default'; 
  const colorClass = isProfit ? 'text-green-400' : isLoss ? 'text-red-400' : 'text-white'; 

  const formatValue = () => { 
    if (label.includes('%')) { 
      return formatPercentage(value); 
    } 
    return formatCurrency(value); 
  }; 

  return ( 
    <Card variant={variant}> 
      <div className="flex items-center gap-2 text-slate-400 mb-2"> 
        <Icon className="w-5 h-5" /> 
        <span className="text-sm">{label}</span> 
      </div> 
      <p className={`text-2xl font-bold ${colorClass}`}> 
        {formatValue()} 
      </p> 
    </Card> 
  ); 
};