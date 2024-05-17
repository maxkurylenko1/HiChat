import axios, { Axios, AxiosInstance } from 'axios';
import { EPageRoutes } from 'types/enums/EPageRoutes';
import { checkErrorMessage } from '../utils/checkErrorMessage';
import refreshToken from './refreshToken';
import { OpenNotification } from '../utils/OpenNotification';

const baseURL = 'http://localhost:3000';

const instance: AxiosInstance = axios.create({
  baseURL,
});

instance.interceptors.response.use(
  (response) => response,
  (error): void => {
    if (error.code === 'ERR_CANCELED') return;
    if (!error?.response?.status) {
      OpenNotification({
        title: error?.code || 'Error',
        type: 'error',
        text: error?.message || '',
      });

      return;
    }
    if (error.response.status === 500) {
      OpenNotification({
        title: 'Error',
        type: 'error',
        text: checkErrorMessage(error),
      });
    }
    if (error.response.status === 400) {
      OpenNotification({
        title: 'Warning',
        type: 'warning',
        text: checkErrorMessage(error),
      });
    }
    if (error.response.status === 401) {
      localStorage.clear();
      OpenNotification({
        title: 'Warning',
        type: 'warning',
        text: checkErrorMessage(error),
      });
    }
    if (error.response.status === 403) {
      OpenNotification({
        title: 'Warning',
        type: 'warning',
        text: checkErrorMessage(error),
      });
    }
  },
);

export default instance;
