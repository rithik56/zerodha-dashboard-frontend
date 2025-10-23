// ============================================ 
// src/hooks/useAuth.js 
// ============================================ 
import { useState, useEffect } from 'react'; 
import apiService from '../services/api'; 

export const useAuth = () => { 
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [loginUrl, setLoginUrl] = useState(null); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => { 
    const checkAuth = async () => { 
      try { 
        const data = await apiService.getAuthStatus(); 
        setIsAuthenticated(data.authenticated); 
        setLoginUrl(data.loginUrl); 
      } catch (error) { 
        console.error('Auth check failed:', error); 
        setIsAuthenticated(false); 
      } finally { 
        setLoading(false); 
      } 
    }; 

    checkAuth(); 
  }, []); 

  return { isAuthenticated, loginUrl, loading }; 
};