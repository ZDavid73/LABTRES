import React, { useState } from 'react';
import BudgetInput from './components/BudgetInput/BudgetInput';
import ExpenseList from './components/ExpenseList/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter/ExpenseFilter';
import CircularProgress from './components/CircularProgress/CircularProgress';
import NewExpenseForm from './components/NewExpenseForm/NewExpenseForm';
import './App.css';

interface Expense {
  id: string;
  name: string;
  amount: number;
  category: string;
  date: string;
}

const App: React.FC = () => {
  const [budget, setBudget] = useState<number>(0);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const remaining = budget - totalExpenses;

  const addExpense = (expense: Expense) => {
    if (editingExpense) {
      setExpenses(expenses.map(e => (e.id === editingExpense.id ? expense : e)));
      setEditingExpense(null);
    } else {
      setExpenses([...expenses, expense]);
    }
  };

  const deleteExpense = (id: string) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const editExpense = (id: string) => {
    const expenseToEdit = expenses.find(expense => expense.id === id);
    if (expenseToEdit) {
      setEditingExpense(expenseToEdit);
    }
  };

  return (
    <div className="App">
      {budget <= 0 ? (
        <BudgetInput onBudgetSet={setBudget} />
      ) : (
        <>
          <CircularProgress value={totalExpenses} maxValue={budget} text={`${(totalExpenses / budget) * 100}%`} />
          <h2>Budget: ${budget}</h2>
          <h2>Remaining: ${remaining}</h2>
          <h2>Expenses: ${totalExpenses}</h2>

          <ExpenseFilter selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

          <NewExpenseForm onAddExpense={addExpense} />

          <ExpenseList 
            expenses={expenses.filter(expense => selectedCategory === 'All' || expense.category === selectedCategory)}
            onDelete={deleteExpense}
            onEdit={editExpense}
          />

          {editingExpense && (
            <div>
              <h2>Edit Expense</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  const updatedExpense = {
                    id: editingExpense.id,
                    name: formData.get('name') as string,
                    amount: Number(formData.get('amount')),
                    category: formData.get('category') as string,
                    date: editingExpense.date,
                  };
                  addExpense(updatedExpense);
                }}
              >
                <input name="name" defaultValue={editingExpense.name} placeholder="Expense Name" />
                <input name="amount" type="number" defaultValue={editingExpense.amount} placeholder="Amount" />
                <select name="category" defaultValue={editingExpense.category}>
                  <option value="Savings">Savings</option>
                  <option value="Food">Food</option>
                  <option value="House">House</option>
                  <option value="Miscellaneous">Miscellaneous</option>
                  <option value="Leisure">Leisure</option>
                  <option value="Health">Health</option>
                  <option value="Subscriptions">Subscriptions</option>
                </select>
                <button type="submit">Update Expense</button>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;
