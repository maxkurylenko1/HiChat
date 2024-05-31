import { FC } from 'react';

const Root:FC<any> = ({ click, logout }) => (
  <div>
    <button onClick={() => { click(); }} type="button">Click</button>
    <button onClick={() => { logout(); }} type="button" color="blue">Logout</button>
    Main page
  </div>
);

export default Root;
