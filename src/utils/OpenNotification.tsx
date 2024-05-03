import Alert, { notification } from 'antd';

import { FC } from 'react';

interface OpenNotificationProps {
    text: string;
    title: string;
    type: 'success' | 'info' | 'error' | 'warning' | undefined;
}

export const OpenNotification: FC<OpenNotificationProps> = ({ text, type, title }):null => {
  notification.open({
    message: title,
    description: text,
    type,
  });

  return null;
};
