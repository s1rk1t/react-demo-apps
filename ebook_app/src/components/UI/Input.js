import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
      {/* Using spread operator allows for all key->value pairs in the props object 
      to be passed into the input element*/}
    </div>
  );
});

export default Input;
