import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { getUsers } from '../../store/actions/getUsers';
import Root from './Root';

const RootContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const click = () => {
    dispatch(getUsers());
    // navigate('/about');
  };

  return <Root click={click} />;
};

export default RootContainer;
