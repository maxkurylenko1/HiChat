/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig } from 'axios';
import instance from '../api/core';

interface IRequestToApiProps {
    method?: string;
    url: string;
    data?: any;
    config?: AxiosRequestConfig;
    noAuth?: boolean;
}

const requestToApi = ({
  method = 'GET',
  url = '',
  data,
  config,
  noAuth = false,
}: IRequestToApiProps) => {
  const requestConfig: AxiosRequestConfig = {
    method,
    url,
    data,
  };

  if (!noAuth) {
    const token = window.localStorage.getItem('token');
    const headers = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    Object.assign(requestConfig, headers);
  }

  if (config) {
    Object.assign(requestConfig, config);
  }

  return instance(requestConfig);
};

export default requestToApi;
