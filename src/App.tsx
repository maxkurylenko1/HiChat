import { useEffectOnce } from './hooks/useEffectOnce';
import refreshToken from './api/refreshToken';
import Navigator from './navigation/Navigator';
import '@fontsource/lato';
import '@fontsource/pt-sans';

const App = () => {
  useEffectOnce(() => {
    const token = window.localStorage.getItem('token');

    if (token) {
      refreshToken().then((res) => {
        if (res?.status === 200) {
          window.localStorage.setItem('token', res.token);
        }
      });

      setInterval(() => {
        refreshToken().then((res) => {
          if (res?.status === 200) {
            window.localStorage.setItem('token', res.token);
          }
        });
      }, 55000);
    }
  });

  return <Navigator />;
};

export default App;
