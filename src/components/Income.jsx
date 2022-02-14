import React, { useContext, useEffect } from "react";
import {IonIcon} from "react-ion-icon";
import AppContext from '@context/AppContext';

import '@styles/Income.scss';

const Income = ({ incomes }) => { 
  // const {state: {incomes} } = useContext(AppContext);

  return (
    <div className="income">
      <h2 className="income__title">Incomes</h2>
      {incomes.map((income, index) => (        
        <div className="element clean-styles" key={index}>
          <div className="element__description">{income.description}</div>
          <div className="right clear-styles">
              <div className="element__value">+ ${income.value}</div>
              <div className="element__delete">
                  <button className="element__delete--btn">
                      <IonIcon name="close-circle-outline"  />
                  </button>
              </div>
          </div>
        </div>
      ))}        
    </div>
  );
};

export default Income;
