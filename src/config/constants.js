// ============================================ 
// src/config/constants.js 
// ============================================ 
export const API_CONFIG = { 
  BASE_URL: import.meta.env.VITE_API_BASE_URL, 
  ENDPOINTS: { 
    HOLDINGS: '/api/holdings', 
    POSITIONS: '/api/positions', 
    PROFILE: '/api/profile', 
    AUTH_STATUS: '/api/auth/status', 
  }, 
  TIMEOUT: 10000, 
}; 

export const UI_CONFIG = { 
  CURRENCY: 'INR', 
  LOCALE: 'en-IN', 
  REFRESH_INTERVAL: 30000, // 30 seconds 
}; 

export const COLORS = { 
  PROFIT: 'text-green-400', 
  LOSS: 'text-red-400', 
  PROFIT_BORDER: 'border-green-500/30', 
  LOSS_BORDER: 'border-red-500/30', 
};

export const isProduction = import.meta.env.MODE === 'production'