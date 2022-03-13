import useCounter from '../hooks/use-counter'; // custom hook

import Card from './Card';

const ForwardCounter = () => {
  const forwardsInterval = 1;

  const counter = useCounter(forwardsInterval);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
