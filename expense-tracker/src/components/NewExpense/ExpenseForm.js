import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState('');
  const [enteredAmount, setAmount] = useState('');
  const [enteredDate, setDate] = useState('');

  //   const [userInput, setUserInput] = useState({
  //     title: '',
  //     amount: '',
  //     date: '',
  //   });

  // using the callback function within the setUserInput call ensures that the prevState is the most up to date snapshot of the current state
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, title: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, amount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, date: event.target.value };
    // });
  };

  // preventDefault ensures the page will not reload on form submission, which would result in losing the form data
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    // setting values back to empty string ensures that after form data is submitted
    // the values in the form will return to their initial (blank) state
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.stopEditing}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
