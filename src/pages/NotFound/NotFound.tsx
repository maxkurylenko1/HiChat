import { FC } from 'react';
import { Button, Result } from 'antd';

interface NotFoundProps {
    goHomeHandler: () => void;
}

const NotFound:FC<NotFoundProps> = ({ goHomeHandler }) => (
  <div>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button onClick={goHomeHandler} type="primary">Back Home</Button>}
    />
  </div>
);

export default NotFound;
