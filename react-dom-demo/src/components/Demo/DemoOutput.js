import React from 'react';

const DemoOutput = (props) => {
  return <p>{props.show ? 'This is new!' : ''}</p>;
};

// ensures Component only re-rendered if there is a state, props, and/or context change.
// also ensures that the children Components are not re-rendered
export default React.demo(DemoOutput);
