import axios from "axios";

const API_URL = "http://39.96.56.146:9000/api/auth/";

const register = (username, password) => {
  return axios.post(API_URL + "signup", {
    username,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
const expobj = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default expobj;