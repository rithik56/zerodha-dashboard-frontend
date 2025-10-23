// Export all mock API functions
import getHoldings from './holdings';
import getPositions from './positions';
import getProfile from './profile';
import auth from './auth';

// Mock API service
const mockAPI = {
  holdings: getHoldings,
  positions: getPositions,
  profile: getProfile,
  auth
};

export {
  getHoldings,
  getPositions,
  getProfile,
  auth
};

export default mockAPI;