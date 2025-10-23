// ============================================ 
// src/hooks/useHoldings.js 
// ============================================ 
import { useState, useEffect, useCallback } from 'react'; 
import apiService from '../services/api'; 
import { calculatePortfolioSummary } from '../utils/calculations'; 

export const useHoldings = (autoFetch = true) => { 
  const [holdings, setHoldings] = useState([]); 
  const [summary, setSummary] = useState({ 
    totalInvestment: 0, 
    currentValue: 0, 
    totalPnL: 0, 
    totalPnLPercentage: 0, 
  }); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const fetchHoldings = useCallback(async () => { 
    setLoading(true); 
    setError(null); 

    try { 
      const data = await apiService.getHoldings(); 
      console.log(data)
      const holdingsData = data.holdings || []; 
      
      setHoldings(holdingsData); 
      setSummary(calculatePortfolioSummary(holdingsData)); 
    } catch (err) { 
      setError(err.message); 
      console.error('Error fetching holdings:', err); 
    } finally { 
      setLoading(false); 
    } 
  }, []); 

  useEffect(() => { 
    if (autoFetch) { 
      fetchHoldings(); 
    } 
  }, [autoFetch, fetchHoldings]); 

  return { 
    holdings, 
    summary, 
    loading, 
    error, 
    refetch: fetchHoldings, 
  }; 
};