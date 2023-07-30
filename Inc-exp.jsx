import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
function Inc_exp()
{
    const {transactions} = useContext(GlobalContext);
    const transEntry = transactions.map((transaction) => (transaction.amount))
    const incomeAmounts = transEntry.filter((amount) => (amount > 0))
    const income = incomeAmounts.reduce((acc, item) => (acc + item), 0)
    var expenseAmounts = transEntry.filter((amount) => (amount < 0))
    const expense = expenseAmounts.reduce((acc, item) => (acc + item), 0)
    return <div className="inc-exp-container">
        <div>
            <p><strong>INCOME</strong></p>
            <p className = "money-plus">₹{income}</p>
        </div>
        <div>
            <p><strong>EXPENSE</strong></p>
            <p className = "money-minus">₹{Math.abs(expense)}</p>
        </div>
    </div>
}
export default Inc_exp;