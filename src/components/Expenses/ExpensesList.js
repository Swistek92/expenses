import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
const ExpensesList = ({ filterByYear }) => {
  if (filterByYear.length === 0) {
    return <h2 className='expenses-list__fallback'> no expenses found.</h2>;
  }
  return (
    <ul className='expenses-list'>
      {filterByYear.map((e) => (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
