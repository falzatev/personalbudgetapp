import { useState } from "react";

const initialState = {
    incomes: [],
    expenses: [],
    email: '',
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addIncome = (payload) => {
        setState({
            ...state,
            incomes: [...state.incomes, payload]
        });
    }

    const addExpense = (payload) => {
        setState({
            ...state,
            expenses: [...state.expenses, payload]
        });
    }

    const asignEmail = (email) => {
        setState({
            ...state,
            email: email
        });
    }

    return {
        state,
        addIncome,
        addExpense,
        asignEmail,
    }
}

export default useInitialState;
