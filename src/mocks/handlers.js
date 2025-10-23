import { http, HttpResponse } from 'msw';
import { API_CONFIG } from '../config/constants';
import { holdingsData } from './api/holdings';
import { positionsData } from './api/positions';
import { profileData } from './api/profile';
import { authStatusData } from './api/authStatus';

const API_BASE_URL = API_CONFIG.BASE_URL;
const API_ENDPOINTS = API_CONFIG.ENDPOINTS;

export const handlers = [

  http.get(`${API_BASE_URL}${API_ENDPOINTS.HOLDINGS}`, async () => {
    return HttpResponse.json(holdingsData);
  }),


  http.get(`${API_BASE_URL}${API_ENDPOINTS.POSITIONS}`, async () => {
    console.log('🎭 MSW: Intercepted positions request');


    return HttpResponse.json(positionsData);
  }),

  http.get(`${API_BASE_URL}${API_ENDPOINTS.PROFILE}`, async () => {
    console.log('🎭 MSW: Intercepted profile request');
    

    return HttpResponse.json(profileData)
  }),

  http.get(`${API_BASE_URL}${API_ENDPOINTS.AUTH_STATUS}`, async () => {
    console.log('🎭 MSW: Intercepted auth status request');
    

    return HttpResponse.json(authStatusData)
  }),
];
