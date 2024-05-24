import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, currency, dispatch } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

  const handleBudgetChange = (event) => {
    const updatedBudget = parseInt(event.target.value, 10);

    if (updatedBudget > 20000) {
      alert("The budget should not exceed 20000");
      return;
    }

    if (updatedBudget < totalExpenses) {
      alert("The budget cannot be lower than the total expenses");
      return;
    }

    setNewBudget(updatedBudget);

    dispatch({
      type: "SET_BUDGET",
      payload: updatedBudget,
    });
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};

export default Budget;
