import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      {/* Using spread operator allows for all key->value pairs in the props object 
      to be passed into the input element*/}
    </div>
  );
};

export default Input;
