import React, {useContext} from "react";
import { GlobalContext } from "/GlobalState";

function TransactionEntry({transaction})
{
    const {deleteTransactions} = useContext(GlobalContext)
    const sign = transaction.amount > 0 ? '+' : '-'
    return(
     <li className= {transaction.amount < 0 ? "minus" : "plus"}>
        <strong>{transaction.text}</strong><span className= {transaction.amount < 0 ? "money-minus" : "money-plus"}>{sign} ₹{Math.abs(transaction.amount)}</span>
        <button onClick={() => deleteTransactions(transaction.id)} className="delete-btn">X</button>
    </li>
    )
}
export default TransactionEntry;
