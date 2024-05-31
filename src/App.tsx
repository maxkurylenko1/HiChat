import { useAppDispatch } from './hooks/redux';
import { useEffectOnce } from './hooks/useEffectOnce';
import refreshToken from './api/refreshToken';
import Navigator from './navigation/Navigator';
import '@fontsource/lato';
import '@fontsource/pt-sans';
import { setIntervalToken } from './store/reducers/SignInSlice';

const App = () => {
  const dispatch = useAppDispatch();

  useEffectOnce(() => {
    const token = window.localStorage.getItem('token');

    if (token) {
      refreshToken().then((res) => {
        if (res?.status === 200) {
          window.localStorage.setItem('token', res.token);
        }
      });

      const intervalToken = setInterval(() => {
        refreshToken().then((res) => {
          if (res?.status === 200) {
            window.localStorage.setItem('token', res.token);
            console.log('Let me tell you something');
          }
        });
      }, 55000);

      dispatch(setIntervalToken(intervalToken));
    }
  });

  return <Navigator />;
};

export default App;
