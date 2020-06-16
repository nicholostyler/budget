import React, { useState, useReducer } from 'react';
import './App.css';
import ExpenseListItem from './ExpenseListItem';

export default function App() {
  const [expenses, setExpenses] = useState(0);
  const [budget, setBudget] = useState(0);
  const [transactions, setTransactions] = useState([{ amount: 20, description: 'tire flat' }]);
  const [newAmount, setNewAmount] = useState(0);
  const [newDescription, setNewDescription] = useState('');

  let budgetAmount = 0;
  const mockList = [
    {
      amount: 50,
      description: 'Fix car'
    },
    {
      amount: 30,
      description: 'Fix house'
    }
  ];

  const addTransaction = (e) => {
    e.preventDefault();
    

    // make sure the states are not default
    if (newAmount != 0 && newDescription != '') {
      const newTransaction = { amount: newAmount, description: newDescription };

      let amount = parseInt(newAmount);
      let oldAmount = parseInt(expenses);
      // copy the current trasaction list
      const list = [...transactions];

      // add the new transaction amount onto the rolling expense total
      setExpenses(oldAmount + amount);

      // push the new transation onto the old list
      list.push(newTransaction);
      console.log(e.target);
      setTransactions(list);
    }
  }

  return (
    <div className="container">
      <div className="expenses-column column">
        <form className="budgetForm" onSubmit={addTransaction}>
          <label htmlFor="budgetquery" className="bugetlabel">Please enter your budget</label>
          <input type="text" className="input" onChange={(e) => setBudget(e.target.value)} name="budgetquery" placeholder="ex: $5000" />
        </form>
        <form className="expenseForm column" onSubmit={addTransaction} >
          <label htmlFor="expensequery" className="bugetlabel">Please enter your expense label</label>
          <input type="text" className="input" name="descriptionquery" placeholder="ex: Car repair" onChange={(e) => setNewDescription(e.target.value)} />
          <label htmlFor="amountquery" className="bugetlabel">Please enter expense amount</label>
          <input type="number" className="input" onChange={(e) => setNewAmount(e.target.value)} name="amountquery" placeholder="ex: $5000" />
          <button className="button" type="submit">Add</button>
        </form>
      </div>
      <div className="output-column column">
        <div className="expensesHud">
          <div className="hudRow">
            <h2 className="hudTitle">BUDGET</h2>
            <h1 id="hudBudgetAmount">${budget}</h1>
          </div>
          <div className="hudRow">
            <h2 className="hudTitle">EXPENSES</h2>
            <h1 id="hudExpensesAmount">${expenses}</h1>
          </div>
        </div>
        <div className="expensesList">
          {(transactions).map(transaction => (
            <ExpenseListItem transaction={transaction} />
          ))}
        </div>
      </div>
    </div>
  );
}
