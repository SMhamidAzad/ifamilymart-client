import axios from "axios";

const fetcher = axios.create({
  // baseURL: "https://ifamilymart-client.onrender.com",
  baseURL: "http://localhost:8000",
});

export default fetcher;