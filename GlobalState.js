import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";
const initialState = {
    transactions : [
        {id : 1, text : "Salary", amount : 5000}
    ]
}

export const GlobalContext = createContext(initialState);



export const GlobalProvider = ({children}) => {
    const[state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransactions(id)
    {
        dispatch({
            type : "delete_Transaction",
            payload : id
        })
    }

    function addTransactions(transaction)
    {
        
        dispatch({
            type : "add_Transaction",
            payload : transaction
        })
    }

    return (<GlobalContext.Provider value = {{transactions : state.transactions, deleteTransactions, addTransactions}} >
        {children}
    </GlobalContext.Provider>)
} 