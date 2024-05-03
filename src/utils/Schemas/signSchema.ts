/* eslint-disable no-useless-escape */
import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
  username: Yup.string().max(32).min(6, 'Username must be at least 6 characters').required('Username is required'),
  password: Yup.string().max(32).required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must contain 8 characters, one uppercase, one number and one special characters',
    ),
});

export const SignUpSchema = Yup.object().shape({});
