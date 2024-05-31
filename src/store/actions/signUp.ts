import { AppDispatch } from '../store';
import { setSignInLoading } from '../reducers/SignInSlice';
import requestToApi from '../../utils/requestToApi';
import { ISignFormCredentials } from '../../types/interfaces/ISignFormCredentials';

const signUp = (credentials: ISignFormCredentials) => async (dispatch: AppDispatch): Promise<number | undefined> => {
  try {
    dispatch(setSignInLoading(true));

    const data = await requestToApi({
      method: 'POST',
      url: '/signUp',
      noAuth: true,
      config: {
        data: {
          username: credentials.username,
          password: credentials.password,
        },
      },
    });

    dispatch(setSignInLoading(false));

    return data?.status;
  } catch (error) {
    dispatch(setSignInLoading(false));
    console.log(error);

    return undefined;
  }
};

export default signUp;
