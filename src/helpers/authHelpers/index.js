import moment from 'moment';

export const setAuthData = (user, token) => {
  localStorage.setItem("meStudentAuthData", JSON.stringify(user));
  localStorage.setItem("meStudentAuthToken", token);
};

export const getAuthData = () => {
  const userData = localStorage.getItem("meStudentAuthData");
  const authToken = localStorage.getItem("meStudentAuthToken");
  
  if (userData && authToken) {
    try {
      if(authToken){
        // Decode JWT token to get expiration time
        const tokenParts = authToken.split('.');
        if (tokenParts.length === 3) {
          const payload = JSON.parse(atob(tokenParts[1]));
          const expirationTime = payload.exp ? moment.unix(payload.exp) : null;

          if (expirationTime && moment().isSameOrAfter(expirationTime)) {
            console.warn("Token has expired");
            clearAuthData();
            return null;
          }else{
            return {
              user: JSON.parse(userData),
              token: authToken
            }
          }
        }else{
          clearAuthData();
          return null;
        }
      }else{
        clearAuthData();
        return null;
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      clearAuthData();
      return null;
    }
  }

  clearAuthData();
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
