import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseList.css';

interface ExpenseListProps {
  expenses: Array<{
    id: string;
    name: string;
    amount: number;
    category: string;
    date: string;
  }>;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Expense List</h2>
      {expenses.map((expense) => (
        <ExpenseItem 
          key={expense.id} 
          expense={expense} 
          onDelete={onDelete} 
          onEdit={onEdit} 
        />
      ))}
    </div>
  );
};

export default ExpenseList;
