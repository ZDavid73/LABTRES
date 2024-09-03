import React, { useState } from 'react';
import './NewExpenseForm.css';

interface NewExpenseFormProps {
  onAddExpense: (expense: {
    id: string;
    name: string;
    amount: number;
    category: string;
    date: string;
  }) => void;
}

const NewExpenseForm: React.FC<NewExpenseFormProps> = ({ onAddExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newExpense = {
      id: Date.now().toString(),
      name,
      amount,
      category,
      date: new Date().toLocaleDateString(),
    };
    
    onAddExpense(newExpense);
    
    // Reset form
    setName('');
    setAmount(0);
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Expense</h2>
      <div>
        <label>Expense Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Amount:</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(Number(e.target.value))} 
          required 
        />
      </div>
      <div>
        <label>Category:</label>
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          required
        >
          <option value="">-- Select --</option>
          <option value="Savings">Savings</option>
          <option value="Food">Food</option>
          <option value="House">House</option>
          <option value="Miscellaneous">Miscellaneous</option>
          <option value="Leisure">Leisure</option>
          <option value="Health">Health</option>
          <option value="Subscriptions">Subscriptions</option>
        </select>
      </div>
      <button type="submit">Register Expense</button>
    </form>
  );
};

export default NewExpenseForm;
