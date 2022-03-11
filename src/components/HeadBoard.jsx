import React, { useEffect, useState } from "react";
import '@styles/HeadBoard.scss';

const HeadBoard = (props) => {

  let currencyFormat = (valor) => {
    return valor.toLocaleString('es-CO', {style:'currency', currency:'COP', minimumFractionDigits:2});
  }

  const percentageFormat = (expense) => {
    let value = expense.value / props.expenses;
    return expense.toLocaleString('es-CO', {style:'percent', minimumFractionDigits:2});
  }
  
  return (
    <div className="head-board">
      <div className="budget">
        <div className="budget__title">Available Budget</div>
        <div className="budget__value" id="budget">
           {currencyFormat(props.incomes - props.expenses)}
        </div>
        <div className="budget__income">
          <div className="budget__income--text">Incomes</div>
          <div className="right">
            <div className="budget__income--value" id="incomes">
              + {currencyFormat(props.incomes)}
            </div>
            <div className="budget__income--percentage">&nbsp;</div>
          </div>
        </div>
        <div className="budget__expense">
          <div className="budget__expense--text">Expenses</div>
          <div className="right">
            <div className="budget__expense--value" id="expense">
              - {currencyFormat(props.expenses)}
            </div>
            <div className="budget__expense--percentage" id="percentage">
            { percentageFormat(props.expenses / props.incomes) }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadBoard;
