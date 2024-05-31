import { AppDispatch } from 'store/store';
import { ISignFormCredentials } from 'types/interfaces/ISignFormCredentials';
import parseJwt from '../../utils/parseJwt';
import { ISignInResponse } from '../../types/interfaces/ISignInResponse';
import requestToApi from '../../utils/requestToApi';
import { setSignInData, setSignInLoading } from '../reducers/SignInSlice';

// eslint-disable-next-line max-len
export const signIn = (credentials: ISignFormCredentials) => async (dispatch: AppDispatch): Promise<ISignInResponse | undefined> => {
  dispatch(setSignInLoading(true));
  try {
    const data = await requestToApi({
      method: 'POST',
      url: '/signIn',
      data: credentials,
      noAuth: true,
      config: {
        withCredentials: true,
      },
    });

    if (data?.status === 200) dispatch(setSignInData({ name: parseJwt(data?.data?.accessToken).name }));
    dispatch(setSignInLoading(false));

    return { status: data?.status, token: data?.data?.accessToken };
  } catch (error) {
    console.log(error);
  }

  dispatch(setSignInLoading(false));

  return undefined;
};
