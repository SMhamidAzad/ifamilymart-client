import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://ifamilymart-client.onrender.com",
});

export default fetcher;