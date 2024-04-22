import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { ISignFormCredentials } from 'types/interfaces/ISignFormCredentials';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import useSetPageTitle from '../../hooks/useSetPageTitle';
import SignUp from './SignUp';
import { SignInSchema } from '../../utils/Schemas/signSchema';

export const initialStateSignInForm:ISignFormCredentials = {
  username: '',
  password: '',
};

const SignUpContainer = () => {
  const { loading } = useAppSelector((state) => state.SignInSlice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useSetPageTitle('Sign up');

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
    <SignUp
      handleSubmit={formik.handleSubmit}
      handleChange={formik.handleChange}
      signInValues={formik.values}
      signInErrors={formik.errors}
      loading={loading}
    />
  );
};

export default SignUpContainer;
