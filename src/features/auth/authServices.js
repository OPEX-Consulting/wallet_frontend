import axios from "axios";
const API_URL = "http://localhost:8080/api/auth/login";

// Register User
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    // set the token
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// create function

const login = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
  login,
};

export default authService;
