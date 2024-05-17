import { FC } from 'react';

const Root:FC<any> = ({ click }) => (
  <div>
    <button onClick={() => { click(); }} type="button">Click</button>
    Main page
  </div>
);

export default Root;
