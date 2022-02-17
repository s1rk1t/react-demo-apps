import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import { ErrorModal } from '../UI/ErrorModal';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault(); // we don't want the page to reload on submission because we'd lose state
    const nameRefValue = nameInputRef.current.value;
    const ageRefValue = ageInputRef.current.value;
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (greater than zero)',
      });
      return;
    }
    const key = Math.random().toString();

    props.onAddUser(enteredUsername, enteredAge, key);
    // console.log(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input
            id='username'
            type='text'
            value={enteredUsername}
            onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor='age'>Age (in years)</label>
          <input
            id='age'
            type='number'
            value={enteredAge}
            onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
