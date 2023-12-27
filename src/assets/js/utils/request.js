import axios from "axios";
var env = require("../config/env.js");
const request = axios.create({
  baseURL: env.domain + "/api",
});

export const setAuth = () => {
  const token = JSON.parse(localStorage.getItem("auth") || "{}");
  const refreshToken = token.auth;
  request.defaults.headers.common["Authorization"] = `Bearer ${refreshToken}`;
};

setAuth();

export default request;
