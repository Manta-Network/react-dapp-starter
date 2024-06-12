import MantaSvg from '@/assets/home/manta.svg?react';
import { notification } from 'antd';

const Example = () => {
  const handleNotification = () => {
    notification.success({
      message: 'Notification Success'
    });
  };

  return (
    <div>
      <h1>Example</h1>
      <MantaSvg />
      <div>
        <button onClick={handleNotification}>
          click here to test Notification
        </button>
      </div>
    </div>
  );
};

export default Example;
