import axios from "axios";
import { API } from "../config/api";
import authHeader from "./headers";

const register = async (form_data) => {
  const response = await axios.post(`${API}/signup/`, form_data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

const login = async (form_data) => {
  const { username } = form_data;
  const response = await axios.post(`${API}/user_login/`, form_data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data));

    return await getUserByUsername(username);
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("token");
};

const getUserByUsername = async (username) => {
  const response = await axios.get(`${API}/get_user_by_username/${username}`, {
    headers: authHeader(),
  });
  if (response.data) {
    localStorage.setItem("profile", JSON.stringify(response.data));
  }
  return response.data.user;
};

const services = {
  register,
  login,
  logout,
  getUserByUsername,
};

export default services;
