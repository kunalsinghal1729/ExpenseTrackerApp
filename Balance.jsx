import React, {useContext} from "react";
import { GlobalContext } from "/GlobalState";
function Balance()
{
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map((transaction) => (transaction.amount));
    const balance = amounts.reduce((acc, amount) => (acc + amount), 0);
    
    return <div>
        <h4>Your Balance</h4>
        <h1 id = "Balance">₹{balance}</h1>
    </div>
}
export default Balance;
