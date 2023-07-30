import React from "react";
import Header from "./Header.jsx";
import Balance from "./Balance.jsx";
import Inc_exp from "./Inc-exp.jsx";
import TransactionsList from "./TransactionsList.jsx";
import AddTransaction from "./addTransaction.jsx";
import {GlobalProvider} from "./GlobalState.js";

function App() {
  return (
    <GlobalProvider >
      <div className="container">
        <Header />
        <Balance />
        <Inc_exp />
        <TransactionsList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
export default App;
