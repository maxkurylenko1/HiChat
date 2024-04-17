import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import { ISignFormCredentials } from 'types/interfaces/ISignFormCredentials';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import useSetPageTitle from '../../hooks/useSetPageTitle';
import { SignInSchema } from './Schemas/signin';
import SignIn from './SignIn';

export const initialStateSignInForm:ISignFormCredentials = {
  username: '',
  password: '',
};

const SignInContainer = () => {
  const { loading } = useAppSelector((state) => state.SignInSlice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useSetPageTitle('Sign in');

  const formik = useFormik({
    initialValues: initialStateSignInForm,
    validationSchema: SignInSchema,
    validateOnChange: false,
    onSubmit: async (values:ISignFormCredentials, { setSubmitting }):Promise<void> => {
      // const prevLoc = location?.state?.from;
      // const status = await dispatch(setLogin(values, '/api/Users/Login'));

      // if (status === 200 && !lastPage) {
      //   if (prevLoc?.pathname) {
      //     navigate(`${prevLoc.pathname}${prevLoc?.search}`);
      //   } else {
      //     navigate(EPageRoute.DASHBOARD_PAGE_ROUTE);
      //   }
      // } else if (status === 200 && lastPage) {
      //   navigate(lastPage);
      // } else {
      //   setSubmitting(true);
      // }
    },
  });

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
