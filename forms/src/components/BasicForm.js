import React from 'react';
import Button from './Button';
import Input from './Input';

const BasicForm = (props) => {

  const nameValidity = (name) => {
    return name.trim() !== ''; //checks for empty string but nothing else
  }

  const emailValidity = (email) => {
    return email.contains('@'); //obvs very simple implementation 
  }

  return (
    <form>
      <div className='control-group'>
        <Input validityFunction={nameValidity} className='form-control' value='First Name' type='text' id='name' htmlFor='name' />
        <Input validityFunction={nameValidity} className='form-control' value='Last Name' type='text' id='name' htmlFor='name' />
        <Input validityFunction={emailValidity} className='form-control' value='Email Address' type='email' id='name' htmlFor='name' />
      </div>
      <Button className='form-actions' value='Submit' />
    </form>
  );
};

export default BasicForm;
