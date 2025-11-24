export const setAuthData = (user, token) => {
  localStorage.setItem("meStudentAuthData", JSON.stringify(user));
  localStorage.setItem("meStudentAuthToken", token);
};

export const getAuthData = () => {
  const userData = localStorage.getItem("meStudentAuthData");
  const authToken = localStorage.getItem("meStudentAuthToken");
  
  console.log("Auth Token:", authToken, userData);
  if (userData && authToken) {
    try {
      return {
        user: JSON.parse(userData),
        token: authToken
      };
    } catch (error) {
      console.error("Error parsing auth data:", error);
      clearAuthData();
      return null;
    }
  }
  return null;
};

export const clearAuthData = () => {
  localStorage.removeItem("meStudentAuthData");
  localStorage.removeItem("meStudentAuthToken");
};

export const isAuthenticated = () => {
  const authData = getAuthData();
  return authData !== null;
};
