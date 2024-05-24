import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./components/Budget";
import { AppProvider } from "./context/AppContext";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import CurrencySelector from "./components/CurrencySelector";

const App = () => {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">Company's Budget Allocation</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
          <div className="col-sm">
            <CurrencySelector />
          </div>
        </div>
        <div className="mt-3">
          <h2 className="mt-3">Allocation</h2>
          <ExpenseList />
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <h2 className="mt-3">Change Allocation</h2>
            <AllocationForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
