/**
 * Auth Utility Functions
 * Helper functions for authentication
 */

// Get current user from localStorage
export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// Get auth token
export const getToken = () => {
  return localStorage.getItem('token');
};

// Check if user is logged in
export const isLoggedIn = () => {
  return !!getToken() && !!getCurrentUser();
};

// Logout user
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('loggedIn');
  // Keep signupData for convenience
};

// Clear all auth data (complete reset)
export const clearAllAuthData = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('loggedIn');
  localStorage.removeItem('signupData');
};
