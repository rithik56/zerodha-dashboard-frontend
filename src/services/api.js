// ============================================ 
// src/services/api.js 
// ============================================ 
import { API_CONFIG } from '../config/constants'; 

class ApiService { 
  constructor(baseURL = API_CONFIG.BASE_URL) { 
    this.baseURL = baseURL; 
  } 

  /** 
   * Generic fetch wrapper with error handling 
   */ 
  async fetch(endpoint, options = {}) { 
    const url = `${this.baseURL}${endpoint}`; 
    const config = { 
      headers: { 
        'Content-Type': 'application/json', 
        ...options.headers, 
      }, 
      ...options, 
    }; 

    try { 
      const response = await fetch(url, config); 
      
      if (!response.ok) { 
        const errorData = await response.json().catch(() => ({})); 
        throw new Error( 
          errorData.message || 
          errorData.error || 
          `HTTP ${response.status}: ${response.statusText}` 
        ); 
      } 

      return await response.json(); 
    } catch (error) { 
      if (error.name === 'AbortError') { 
        throw new Error('Request timeout'); 
      } 
      throw error; 
    } 
  } 

  /** 
   * Get holdings 
   */ 
  async getHoldings() { 
    return this.fetch(API_CONFIG.ENDPOINTS.HOLDINGS); 
  } 

  /** 
   * Get positions 
   */ 
  async getPositions() { 
    return this.fetch(API_CONFIG.ENDPOINTS.POSITIONS); 
  } 

  /** 
   * Get user profile 
   */ 
  async getProfile() { 
    return this.fetch(API_CONFIG.ENDPOINTS.PROFILE); 
  } 

  /** 
   * Get authentication status 
   */ 
  async getAuthStatus() { 
    return this.fetch(API_CONFIG.ENDPOINTS.AUTH_STATUS); 
  } 
} 

export default new ApiService();