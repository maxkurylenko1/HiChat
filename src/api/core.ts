import axios, { AxiosInstance } from 'axios';

const baseURL = process.env.API_URL || 'localhost:3000';

const instance: AxiosInstance = axios.create({
  baseURL,
});
