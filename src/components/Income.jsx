import React, { useContext, useEffect } from "react";
import {IonIcon} from "react-ion-icon";
import AppContext from '@context/AppContext';
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firabase";

import '@styles/Income.scss';

const Income = ({ incomes }) => { 
  // const {state: {incomes} } = useContext(AppContext);
  let currencyFormat = (valor) => {
    return valor.toLocaleString('es-CO', {style:'currency', currency:'COP', minimumFractionDigits:2});
  }

  const deleteIncome = async (id) => {
    const incomeDoc = doc(db, "incomes", id);
    await deleteDoc(incomeDoc);
  }

  return (
    <div className="income">
      <h2 className="income__title">Incomes</h2>
      {incomes.map((income, index) => (        
        <div className="element clean-styles" key={index}>
          <div className="element__description">{income.description}</div>
          <div className="right clear-styles">
              <div className="element__value">+ {currencyFormat(income.value)}</div>
              <div className="element__delete">
                  <button className="element__delete--btn">
                      <IonIcon name="close-circle-outline" onClick={() => {deleteIncome(income.id)}} />
                  </button>
              </div>
          </div>
        </div>
      ))}        
    </div>
  );
};

export default Income;
