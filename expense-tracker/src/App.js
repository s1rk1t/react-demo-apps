import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState } from 'react';

const INITIAL_EXPENSES = [
  {
    id: 'exp1',
    title: 'Car Insurance',
    amount: '110.00',
    date: new Date(2022, 2, 28),
  },
  {
    id: 'exp2',
    title: 'Mortgage',
    amount: '786.53',
    date: new Date(2021, 2, 30),
  },
  {
    id: 'exp3',
    title: 'Bankruptcy',
    amount: '321.12',
    date: new Date(2021, 3, 21),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
