// Mock data for Zerodha Kite API /api/auth endpoint
export const authStatusData = 
{
    "authenticated": true,
    "loginUrl": null
}


// Function to simulate login API response
export const login = (credentials) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simple validation
      if (credentials && credentials.user_id && credentials.password) {
        resolve(authData);
      } else {
        reject({
          status: "error",
          error_type: "AuthenticationFailed",
          message: "Invalid credentials"
        });
      }
    }, 500); // Simulate network delay
  });
};

// Function to simulate logout API response
export const logout = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "success",
        data: {
          message: "Logout successful"
        }
      });
    }, 300);
  });
};

export default { login, logout };