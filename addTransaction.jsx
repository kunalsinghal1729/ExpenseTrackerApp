import React, {useState, useContext} from "react";
import { GlobalContext } from "/GlobalState";
function AddTransaction()
{
    const {addTransactions} = useContext(GlobalContext);
    var [text, setText] = useState("");
    var [amount, setAmount] = useState(0);
    function textHandler(event)
    {
        setText(event.target.value);
    }
    function amountHandler(event)
    {
        setAmount(event.target.value);
    }
    function stopRefresh(event)
    {
        event.preventDefault();
        const newtransaction = {id : Math.random() * 100, text : text, amount : +amount};
        addTransactions(newtransaction);
    }
    return <div>
        <h3>Add new transaction</h3>
        <form onSubmit={stopRefresh}>
            <label>Text</label>
            <input value = {text} onChange={textHandler} type = "text" placeholder="Enter Text..."></input>
            <label>Amount(negative - expense, positive - income)</label>
            <input value = {amount} onChange={amountHandler} type="number" placeholder="Enter amount..."></input>
            <button className="btn">Add Transaction</button>
        </form>
    </div>
}
export default AddTransaction;
