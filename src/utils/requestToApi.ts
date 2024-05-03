/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosRequestConfig } from 'axios';
import instance from '../api/core';

interface IRequestToApiProps {
    method?: string;
    url: string;
    data?: any;
}

const requestToApi = ({
  method = 'GET',
  url = '',
  data,
}: IRequestToApiProps) => {
  const requestConfig: AxiosRequestConfig = {
    method,
    url,
    data,
  };

  return instance(requestConfig);
};

export default requestToApi;
