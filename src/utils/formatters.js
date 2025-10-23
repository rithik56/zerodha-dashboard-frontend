import { UI_CONFIG } from '../config/constants'; 

/** 
 * Format number as currency 
 */ 
export const formatCurrency = (amount, options = {}) => { 
  if (amount === null || amount === undefined) return '-'; 
  
  return new Intl.NumberFormat(UI_CONFIG.LOCALE, { 
    style: 'currency', 
    currency: UI_CONFIG.CURRENCY, 
    maximumFractionDigits: 2, 
    ...options, 
  }).format(amount); 
}; 

/**
 * Format number as percentage 
 */ 
export const formatPercentage = (value, decimals = 2) => { 
  if (value === null || value === undefined) return '-'; 
  return `${value.toFixed(decimals)}%`; 
}; 

/** 
 * Format large numbers with K, M, B suffixes 
 */ 
export const formatCompactNumber = (num) => { 
  if (num === null || num === undefined) return '-'; 
  
  const absNum = Math.abs(num); 
  if (absNum >= 1e9) return `${(num / 1e9).toFixed(2)}B`; 
  if (absNum >= 1e6) return `${(num / 1e6).toFixed(2)}M`; 
  if (absNum >= 1e3) return `${(num / 1e3).toFixed(2)}K`; 
  return num.toFixed(2); 
};