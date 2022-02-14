import React, { useContext } from "react";
import AppContext from '@context/AppContext';
import '@styles/Expense.scss';

const Expense = ({ expenses }) => {
  const percentageFormat = (expense) => {
    let value = expense.value / totalExpenses();
    return value.toLocaleString('es-CO', {style:'percent', minimumFractionDigits:2});
  }

  const totalExpenses = () => {
    let totalExpense = 0;

    for (let expense of expenses) {
      totalExpense += expense.value;
    }

    return totalExpense;
  } 
  
  // const {state: {expenses}} = useContext(AppContext)

  return (
    <div className="expense">
      <h2 className="expense__title">Expense</h2>
      {expenses.map((expense, index) => (
        <div className="element clean-styles" key={index}>
          <div className="element__description" >{expense.description}</div>
          <div className="right clean-styles">
              <div className="element__value">- ${expense.value}</div>
              <div className="element__percentage">{percentageFormat(expense)}</div>
              <div className="element__delete">
                  <button className="element__delete--btn">
                      <ion-icon name="close-circle-outline" onclick='eliminarEgreso(${egreso.id})'></ion-icon>
                  </button>
              </div>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default Expense;
