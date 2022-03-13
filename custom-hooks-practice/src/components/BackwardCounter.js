import useCounter from '../hooks/use-counter';

import Card from './Card';

const BackwardCounter = () => {
  const backwardsInterval = -1;

  const counter = useCounter(backwardsInterval);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
