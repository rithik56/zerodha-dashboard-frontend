// ============================================ 
// src/utils/calculations.js 
// ============================================ 

/** 
 * Calculate portfolio summary from holdings 
 */ 
export const calculatePortfolioSummary = (holdings) => { 
  if (!Array.isArray(holdings) || holdings.length === 0) { 
    return { 
      totalInvestment: 0, 
      currentValue: 0, 
      totalPnL: 0, 
      totalPnLPercentage: 0, 
    }; 
  } 

  const totalInvestment = holdings.reduce( 
    (sum, holding) => sum + (holding.investment || 0), 
    0 
  ); 

  const currentValue = holdings.reduce( 
    (sum, holding) => sum + (holding.currentValue || 0), 
    0 
  ); 

  const totalPnL = currentValue - totalInvestment; 
  const totalPnLPercentage = totalInvestment > 0 
    ? (totalPnL / totalInvestment) * 100 
    : 0; 

  return { 
    totalInvestment, 
    currentValue, 
    totalPnL, 
    totalPnLPercentage, 
  }; 
}; 

/** 
 * Calculate P&L for individual holding 
 */ 
export const calculateHoldingPnL = (holding) => { 
  const pnl = holding.currentValue - holding.investment; 
  const pnlPercentage = holding.investment > 0 
    ? (pnl / holding.investment) * 100 
    : 0; 

  return { pnl, pnlPercentage }; 
};