import axios from "axios";

const BASE_URL = "http://cvmena.herokuapp.com/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
