import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { ISignFormCredentials } from 'types/interfaces/ISignFormCredentials';
import { useEffect } from 'react';
import { setIntervalToken } from '../../store/reducers/SignInSlice';
import refreshToken from '../../api/refreshToken';
import { signIn } from '../../store/actions/signIn';
import { SignInSchema } from '../../utils/Schemas/signSchema';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import useSetPageTitle from '../../hooks/useSetPageTitle';
import SignIn from './SignIn';

export const initialStateSignInForm:ISignFormCredentials = {
  username: '',
  password: '',
};

const SignInContainer = () => {
  const { loading, intervalToken } = useAppSelector((state) => state.SignInSlice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useSetPageTitle('Sign in');

  const formik = useFormik({
    initialValues: initialStateSignInForm,
    validationSchema: SignInSchema,
    validateOnChange: false,
    onSubmit: async (values:ISignFormCredentials):Promise<void> => {
      const signInData = await dispatch(signIn(values));

      if (signInData?.status === 200) {
        const newIntervalToken = setInterval(() => {
          refreshToken().then((res) => {
            if (res?.status === 200) {
              window.localStorage.setItem('token', res.token);
            }
          });
        }, 55000);

        dispatch(setIntervalToken(newIntervalToken));

        window.localStorage.setItem('token', signInData.token);
        navigate('/');
      }
    },
  });

  useEffect(() => {
    window.localStorage.clear();
    if (intervalToken !== null) clearInterval(intervalToken);
  }, []);

  return (
    <SignIn
      handleSubmit={formik.handleSubmit}
      handleChange={formik.handleChange}
      signInValues={formik.values}
      signInErrors={formik.errors}
      loading={loading}
    />
  );
};

export default SignInContainer;
