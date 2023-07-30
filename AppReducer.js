export default (state, action) => {
    switch(action.type)
    {
        case "delete_Transaction":
            return {
                ...state, 
                transactions : state.transactions.filter((transaction) => (transaction.id !== action.payload))
            }
        case "add_Transaction":
            return{
                ...state, 
                transactions : [...state.transactions, action.payload]
            }
        default:
            return state;
    }
}