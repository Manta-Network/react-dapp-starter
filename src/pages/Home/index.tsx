import MantaSvg from '@/assets/home/manta.svg?react';
import { HomeStep } from '@/models';
import useStore from '@/store';
import { useEffect } from 'react';

const Home = () => {
  const setHomeStep = useStore().setHomeStep;
  const queryStatus = useStore().queryStatus;

  useEffect(() => {
    queryStatus();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          setHomeStep(HomeStep.default);
        }}
      >
        Action
      </button>
      <MantaSvg />
    </div>
  );
};

export default Home;
