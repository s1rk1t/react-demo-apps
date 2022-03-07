import React, { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value; // return latest snapshot (as a string)
    // possible for this element
    const enteredAmountAsNumber = +enteredAmount; // convert that string into a number
    // and assign that value to a constant
    if (
      enteredAmount.trim().length === 0 ||
      (enteredAmountAsNumber < 1) | (enteredAmountAsNumber > 5)
    ) {
      setAmountIsValid(false);
      return; // this might want to throw an exception to a log
    }

    props.onAddToCart(enteredAmountAsNumber);

    setAmountIsValid(true);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
