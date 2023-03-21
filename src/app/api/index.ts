import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'JWT token',
  },
};
