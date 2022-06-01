import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const onChangeYear = (year) => {
    setFilteredYear(year);
  };
  const filterByYear = expenses.filter(
    (e) => e.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeYear={onChangeYear} />
        <ExpensesChart expenses={filterByYear} />
        <ExpensesList filterByYear={filterByYear} />
      </Card>
    </div>
  );
};

export default Expenses;
