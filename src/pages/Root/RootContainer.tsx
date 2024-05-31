import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { getUsers } from '../../store/actions/getUsers';
import logout from '../../api/logout';
import Root from './Root';

const RootContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const click = () => {
    dispatch(getUsers());
    navigate('/about');
  };

  const logoutHandler = async () => {
    const status = await logout();

    window.localStorage.clear();
    navigate('/sign-in');
  };

  return <Root click={click} logout={logoutHandler} />;
};

export default RootContainer;
