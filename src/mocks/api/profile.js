// Mock data for Zerodha Kite API /api/profile endpoint
export const profileData = {
  "status": "success",
  "data": {
    "user_id": "AB1234",
    "user_name": "John Doe",
    "email": "john.doe@example.com",
    "user_type": "individual",
    "broker": "ZERODHA",
    "exchanges": ["NSE", "BSE", "MCX"],
    "products": ["CNC", "NRML", "MIS"],
    "order_types": ["MARKET", "LIMIT", "SL", "SL-M"],
    "avatar_url": "https://example.com/avatar.jpg",
    "meta": {
      "demat_consent": "physical"
    }
  }
};

// Function to simulate API response
export const getProfile = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(profileData);
    }, 300); // Simulate network delay
  });
};

export default getProfile;