import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { REQUEST_TIME_OUT } from '../../constants/common';
import { getServerBaseURL } from './get-server-base-url';

export interface CustomAxiosInstance extends AxiosInstance {
  <T>(url: string, config?: AxiosRequestConfig): T;
}

/**
 * 创建 Axios 请求实例
 *
 * @returns {CustomAxiosInstance} axios 请求实例
 * @author YuZhanglong <loveyzl1123@gmail.com>
 */
const createAxiosRequest = () => {
  const req = axios.create({
    timeout: REQUEST_TIME_OUT,
    baseURL: getServerBaseURL(),
    withCredentials: true,
  });

  req.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      return Promise.reject(err);
    },
  );

  req.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (err) => {
      console.log('axios response error:', err?.response?.data);

      // 浏览器环境
      if (typeof window !== 'undefined') {
        const { message } = require('../../browser');
        message.error(err?.response?.data?.message || '网络错误');
      }
      return Promise.reject(err?.response?.data);
    },
  );
  return req as CustomAxiosInstance;
};

export const request = createAxiosRequest();
