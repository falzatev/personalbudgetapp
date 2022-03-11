import React, { useContext } from "react";
import AppContext from '@context/AppContext';
import { deleteDoc, doc } from "firebase/firestore";
import '@styles/Expense.scss';
import { async } from "@firebase/util";
import { db } from "../../firabase";

const Expense = ({ expenses }) => {
  const totalExpenses = () => {
    let totalExpense = 0;

    for (let expense of expenses) {
      totalExpense += +expense.value;
    }
    return totalExpense;
  } 
  
  const percentageFormat = (expense) => {
    let value = expense / totalExpenses();
    return value.toLocaleString('es-CO', {style:'percent', minimumFractionDigits:2});
  }

  let currencyFormat = (valor) => {
    return valor.toLocaleString('es-CO', {style:'currency', currency:'COP', minimumFractionDigits:2});
  }

  const deleteExpense = async (id) => {
    const expenseDoc = doc(db, "expenses", id);
    await deleteDoc(expenseDoc);
  }

  return (
    <div className="expense">
      <h2 className="expense__title">Expense</h2>
      {expenses.map((expense, index) => (
        <div className="element clean-styles" key={index}>
          <div className="element__description" >{expense.description}</div>
          <div className="right clean-styles">
              <div className="element__value">- {currencyFormat(expense.value)}</div>
              <div className="element__percentage">{percentageFormat(expense.value)}</div>
              <div className="element__delete">
                  <button className="element__delete--btn">
                      <ion-icon name="close-circle-outline" onClick={() => {deleteExpense(expense.id)}}></ion-icon>
                  </button>
              </div>
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default Expense;
