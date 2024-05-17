import { AppDispatch } from 'store/store';
import parseJwt from '../../utils/parseJwt';
import requestToApi from '../../utils/requestToApi';
import { setSignInLoading } from '../reducers/SignInSlice';

// eslint-disable-next-line max-len
export const getUsers = () => async (dispatch: AppDispatch): Promise<undefined> => {
  try {
    const data = await requestToApi({
      method: 'GET',
      url: '/users',
    });

    console.log(data);

    return undefined;
  } catch (error) {
    console.log(error);
  }

  return undefined;
};
