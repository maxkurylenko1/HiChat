import { ChangeEvent, FC, FormEvent } from 'react';
import { Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import { ISignUpFormCredentials } from 'types/interfaces/ISignFormCredentials';
import { FormikErrors } from 'formik';
import WhiteArrowSVG from '../../assets/svg/WhiteArrow/WhiteArrowSVG';
import SignUpSVG from '../../assets/svg/Signup/SignUpSVG';
import styles from './signup.module.scss';

interface SignUpProps {
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    signInValues: ISignUpFormCredentials;
    signInErrors: FormikErrors<ISignUpFormCredentials>;
    loading: boolean;
  }

const SignUp:FC<SignUpProps> = ({ handleSubmit, handleChange, signInErrors, signInValues, loading }) => (
  <section className={styles.signUp}>
    <div className={styles.container}>
      <div className={styles.content}>
        <form className={styles.leftside} onSubmit={handleSubmit}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>
              Create your account
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
          <div className={styles.inputContainer}>
            <span className={styles.text}>Confirm your password</span>
            <Input.Password
              type="password"
              name="passwordConfirmation"
              maxLength={52}
              visibilityToggle={false}
              className={styles.input}
              onChange={handleChange}
              value={signInValues.passwordConfirmation}
            />
            <div className={styles.errorTextContainer}>
              <span className={styles.errorText}>
                {signInErrors.passwordConfirmation}
              </span>
            </div>
          </div>

          <Button type="primary" className={styles.submitButton} loading={loading} htmlType="submit">
            <span className={styles.buttonText}>Submit</span>
            <div className={styles.arrowIcon}>
              <WhiteArrowSVG />
            </div>
          </Button>
          <span className={styles.lightText}>Already have an account?</span>
          <Link to="/sign-in" className={styles.link}>Sign in</Link>
        </form>
        <div className={styles.rightside}>
          <SignUpSVG />
        </div>
      </div>
    </div>
  </section>
);

export default SignUp;
