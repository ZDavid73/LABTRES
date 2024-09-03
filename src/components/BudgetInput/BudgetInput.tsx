import React, { useState } from 'react';
import './BudgetInput.css';

interface BudgetInputProps {
  onBudgetSet: (budget: number) => void;
}

const BudgetInput: React.FC<BudgetInputProps> = ({ onBudgetSet }) => {
  const [budget, setBudget] = useState<number>(0);

  const handleSubmit = () => {
    if (budget > 0) {
      onBudgetSet(budget);
    }
  };

  return (
    <div className="budget-input-container">
      <h2>Define Budget</h2>
      <input 
        type="number" 
        value={budget} 
        onChange={(e) => setBudget(Number(e.target.value))} 
        placeholder="Enter your budget" 
      />
      <button onClick={handleSubmit}>Define Budget</button>
    </div>
  );
};

export default BudgetInput;
