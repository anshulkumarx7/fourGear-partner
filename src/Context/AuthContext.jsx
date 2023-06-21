import React, { createContext, useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// Create the authentication context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [tokenExpiration, setTokenExpiration] = useState(0);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    phone: "",
    password: "",
  });

  let configRegenerateToken = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:5000/api/partners/refresh',
    headers: { 
      'Authorization': `Bearer ${refreshToken}`
    }
  };
  useEffect(() => {
    // Check if the user is logged in using local storage
    const storedAccessToken = localStorage.getItem('accessToken');
    const storedRefreshToken = localStorage.getItem('refreshToken');
    const storedTokenExpiration = localStorage.getItem('tokenExpiration');
    console.log("Checking user is logged in or not");
    if (storedAccessToken && storedRefreshToken && storedTokenExpiration) {
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken);
      setTokenExpiration(Date.now() / 1000 + 20);
      setIsLoggedIn(true);
      console.log("User is already logged in")
    }
  }, []);
  useEffect(() => {
    const checkTokenExpiration = () => {
      // console.log("Regenerate");
      console.log("regenerate")
      console.log(tokenExpiration);
      if (tokenExpiration && tokenExpiration < Date.now() / 1000) {
        console.log("Hello");
        regenerateToken(configRegenerateToken);
      }
    };
    // Check expiration every second
    const tokenExpirationTimer = setInterval(checkTokenExpiration, 1000); 
    return () => {
      clearInterval(tokenExpirationTimer);
    };
  }, [tokenExpiration]);

  //regenerateToken
  const regenerateToken = async(configRegenerateToken) => {
    try{
        console.log('Regenerating')
        const response = await axios.request(configRegenerateToken);
        console.log(response);
        const newAccessToken = response.data.token;

        localStorage.setItem('accessToken', newAccessToken);
        localStorage.setItem('tokenExpiration', Date.now() / 1000 + 20);
        
        setAccessToken(newAccessToken);
        setTokenExpiration(Date.now() / 1000 + 20);
    }catch(error){
        console.error('Token regeneration failed', error);
        logout(); // Logout if token regeneration fails
    }
  };

  //login 
  const [loginError,setLoginError]=useState("");
  const login = async(config) => {
    try {
        setLoading(true);
        const response = await axios.request(config);
        const accessToken = response.data.token;
        const refreshToken = response.data.refreshToken;

        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('tokenExpiration', Date.now() / 1000 + 20);
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        setTokenExpiration(Date.now() / 1000 + 20);
        console.log(tokenExpiration);
        setIsLoggedIn(true);
        setLoading(false);
        console.log(JSON.stringify(response.data));
        console.log("navigate");
        navigate("/dashboard");
        console.log("navigated");
        setLoginError("");
      } catch (error) {
        console.log(error);
        setLoginError(error.response.data.message);
        setIsLoggedIn(false);
        setLoading(false);
      }
  };
//logout
  const logout = () => {
    setIsLoggedIn(false);
    setAccessToken(null);
    setRefreshToken(null);
    setTokenExpiration(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('tokenExpiration');
    navigate('/');
    console.log("Logged out");
  };

return (
    <AuthContext.Provider value={{ isLoggedIn,logout,loading,setLoading,loginData,setLoginData,login,loginError,regenerateToken}}>
      {children}
    </AuthContext.Provider>
  );
};
