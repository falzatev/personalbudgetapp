import React, { useEffect, useState } from "react";
import '@styles/HeadBoard.scss';

const HeadBoard = (props) => {
  
  return (
    <div className="head-board">
      <div className="budget">
        <div className="budget__title">Presupuesto Disponible</div>
        <div className="budget__value" id="budget">
           ${props.incomes - props.expenses}
        </div>
        <div className="budget__income">
          <div className="budget__income--text">Ingresos</div>
          <div className="right">
            <div className="budget__income--value" id="incomes">
              + ${props.incomes}
            </div>
            <div className="budget__income--percentage">&nbsp;</div>
          </div>
        </div>
        <div className="budget__expense">
          <div className="budget__expense--text">Egresos</div>
          <div className="right">
            <div className="budget__expense--value" id="expense">
              - ${props.expenses}
            </div>
            <div className="budget__expense--percentage" id="percentage">
              45%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadBoard;
