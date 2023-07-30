import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState.js";
import TransactionEntry from "./TransactionsEntry.jsx";
function TransactionsList()
{
    const {transactions} = useContext(GlobalContext);
    return <div>
        <h3>History</h3>
        <ul id = "list" className = "list">
            {transactions.map((transaction) => (<TransactionEntry id = {transaction.id} key = {transaction.id} transactions={transactions} transaction = {transaction} />))}
        </ul>
    </div>
}
export default TransactionsList;