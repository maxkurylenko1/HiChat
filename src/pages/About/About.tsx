import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const click = () => {
    // dispatch(getUsers());
    navigate('/');
  };

  return (
    <div>
      <button type="button" onClick={() => click()}>Home</button>
      <span>Hey))</span>
    </div>
  );
};

export default About;
