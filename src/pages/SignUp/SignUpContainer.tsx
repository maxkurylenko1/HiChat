import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import signUp from '../../store/actions/signUp';
import { ISignUpFormCredentials } from '../../types/interfaces/ISignFormCredentials';
import { EPageRoutes } from '../../types/enums/EPageRoutes';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import useSetPageTitle from '../../hooks/useSetPageTitle';
import SignUp from './SignUp';
import { SignUpSchema } from '../../utils/Schemas/signSchema';

export const initialStateSignInForm:ISignUpFormCredentials = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const SignUpContainer = () => {
  const { loading } = useAppSelector((state) => state.SignInSlice);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useSetPageTitle('Sign up');

  const formik = useFormik({
    initialValues: initialStateSignInForm,
    validationSchema: SignUpSchema,
    validateOnChange: false,
    onSubmit: async (values:ISignUpFormCredentials):Promise<void> => {
      const status = await dispatch(signUp({ username: values.username, password: values.password }));

      if (status && status === 201) {
        navigate(EPageRoutes.SIGN_IN_PAGE_ROUTE);
      }
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
