import { useState } from "react";

const initialState = {
    income: [],
    expenses: [],
    username: ''
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addExpense = (payload) => {
        setState({
            ...state,
            expenses: [...state.expenses, payload]
        })
    }

    const asignUsername = (username) => {
        setState({
            ...state,
            username: username
        })
    }

    return {
        state,
        addExpense
    }
}



export default useInitialState;
