import { useNavigate, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import { ISignFormCredentials } from 'types/interfaces/ISignFormCredentials';
import { signIn } from '../../store/actions/signActions';
import { SignInSchema } from '../../utils/Schemas/signSchema';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import useSetPageTitle from '../../hooks/useSetPageTitle';
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
    onSubmit: async (values:ISignFormCredentials):Promise<void> => {
      dispatch(signIn(values));
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
