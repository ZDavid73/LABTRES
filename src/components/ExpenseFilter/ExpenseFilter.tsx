import React from 'react';
import './ExpenseFilter.css';

interface ExpenseFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const ExpenseFilter: React.FC<ExpenseFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  const categories = ['All', 'Savings', 'Food', 'House', 'Miscellaneous', 'Leisure', 'Health', 'Subscriptions'];

  return (
    <div>
      <label htmlFor="category">Filter by Category</label>
      <select 
        id="category" 
        value={selectedCategory} 
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
