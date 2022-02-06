import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return (
      <h2 className='expenses-list__fallback'>
        Found no expenses for the selected year
      </h2>
    );
  }

  return (
    <ul className='expenses-list'>
      {props.expenses.map((exp) => (
        <ExpenseItem
          key={exp.id} // providing a unique 'key' helps React to render items in an array/list without having to reload the entire list
          date={exp.date}
          amount={exp.amount}
          title={exp.title}
        />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
