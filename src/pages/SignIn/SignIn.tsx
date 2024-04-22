import { ChangeEvent, FC, FormEvent } from 'react';
import { Button, Input, Image } from 'antd';
import { FormikErrors } from 'formik';
import { ISignFormCredentials } from 'types/interfaces/ISignFormCredentials';
import { Link } from 'react-router-dom';
import WhiteArrowSVG from '../../assets/svg/WhiteArrow/WhiteArrowSVG';
import SignInSVG from '../../assets/svg/SignIn/SignInSVG';
import styles from './signin.module.scss';

interface SignInProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  signInValues: ISignFormCredentials;
  signInErrors: FormikErrors<ISignFormCredentials>;
  loading: boolean;
}

const SignIn:FC<SignInProps> = ({ handleSubmit, handleChange, signInValues, signInErrors, loading }) => (
  <section className={styles.signIn}>
    <div className={styles.container}>
      <div className={styles.content}>
        <form className={styles.leftside} onSubmit={handleSubmit}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>
              Sign in to your account
            </p>
          </div>
          <div className={styles.inputContainer}>
            <span>Username</span>
            <Input
              name="username"
              maxLength={52}
              className={styles.input}
              onChange={handleChange}
              value={signInValues.username}
            />
            <div className={styles.errorTextContainer}>
              <span className={styles.errorText}>
                {signInErrors.username}
              </span>
            </div>
          </div>
          <div className={styles.inputContainer}>
            <span className={styles.text}>Password</span>
            <Input.Password
              type="password"
              name="password"
              maxLength={52}
              className={styles.input}
              onChange={handleChange}
              value={signInValues.password}
            />
            <div className={styles.errorTextContainer}>
              <span className={styles.errorText}>
                {signInErrors.password}
              </span>
            </div>
          </div>

          <Button type="primary" className={styles.submitButton} loading={loading} htmlType="submit">
            <span className={styles.buttonText}>Submit</span>
            <div className={styles.arrowIcon}>
              <WhiteArrowSVG />
            </div>
          </Button>
          <span className={styles.lightText}>Don’t have an account?</span>
          <Link to="/sign-up" className={styles.link}>Sign up</Link>
        </form>
        <div className={styles.rightside}>
          <SignInSVG />
        </div>
      </div>
    </div>
  </section>
);

export default SignIn;
