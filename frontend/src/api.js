import axios from "axios";
const API = process.env.REACT_APP_API_BASE || "http://localhost:5000";
export const add = (a, b) => axios.get(`${API}/api/add`, { params: { a, b }});
export const factorial = (n) => axios.get(`${API}/api/factorial`, { params: { n }});