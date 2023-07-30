import React from "react";
import Header from "./components/Header.jsx";
import Balance from "./components/Balance.jsx";
import Inc_exp from "./components/Inc-exp.jsx";
import TransactionsList from "./components/TransactionsList.jsx";
import AddTransaction from "./components/addTransaction.jsx";
import {GlobalProvider} from "./context/GlobalState.js";

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
