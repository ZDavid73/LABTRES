import React from 'react';
import { SwipeableListItem, LeadingActions, TrailingActions, SwipeAction } from 'react-swipeable-list';
import './ExpenseItem.css';

interface ExpenseItemProps {
  expense: {
    id: string;
    name: string;
    amount: number;
    category: string;
    date: string;
  };
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ expense, onDelete, onEdit }) => {
  
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => onEdit(expense.id)}>
        <div style={{ padding: '20px', backgroundColor: 'blue', color: 'white' }}>Edit</div>
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction destructive onClick={() => onDelete(expense.id)}>
        <div style={{ padding: '20px', backgroundColor: 'red', color: 'white' }}>Delete</div>
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableListItem
      leadingActions={leadingActions()}
      trailingActions={trailingActions()}
    >
      <div style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
        <h3>{expense.name}</h3>
        <p>Category: {expense.category}</p>
        <p>Date: {expense.date}</p>
        <p>Amount: ${expense.amount}</p>
      </div>
    </SwipeableListItem>
  );
};

export default ExpenseItem;
