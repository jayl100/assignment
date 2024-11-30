import axios, {AxiosRequestConfig} from 'axios';
import {getToken, removeToken} from "../store/authStore";

const BASE_URL = "http://localhost:9000/";
const DEFAULT_TIMEOUT = 300000;

export const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: DEFAULT_TIMEOUT,
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken() ? getToken() : '',
    },
    withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // 로그인 만료 처리
      if (error.response.status === 401) {
        removeToken();
        window.location.href = '/login';
        return;
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const httpClient = createClient();

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const requestHandler = async <R = undefined, T = undefined>(method: RequestMethod, url: string, payload?: T) => {
  let response;
  
  switch (method) {
    case 'GET':
      response = await httpClient.get<R>(url);
      break;
    case 'POST':
      response = await httpClient.post(url, payload);
      break;
    case 'PUT':
      response = await httpClient.put<R>(url, payload);
      break;
    case 'DELETE':
      response = await httpClient.delete<R>(url);
      break;
  }
  
  return response.data;
};