import { AppDispatch } from 'store/store';
import { ISignFormCredentials } from 'types/interfaces/ISignFormCredentials';
import requestToApi from '../../utils/requestToApi';
import { setSignInData, setSignInLoading } from '../reducers/SignInSlice';

export const signIn = (credentials: ISignFormCredentials) => async (dispatch: AppDispatch): Promise<number | undefined> => {
  dispatch(setSignInLoading(true));
  try {
    const data = await requestToApi({
      method: 'POST',
      url: '/signIn',
      data: credentials,
    });

    if (data) {
      dispatch(setSignInData(data.data));
    }
  } catch (error) {
    console.log(error);
  }

  dispatch(setSignInLoading(false));

  return undefined;
};
