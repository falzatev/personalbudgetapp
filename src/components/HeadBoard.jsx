import React from "react";
import '@styles/HeadBoard.scss';

const HeadBoard = () => {
  return (
    <div className="head-board">
      <div className="budget">
        <div className="budget__title">Presupuesto Disponible</div>
        <div className="budget__value" id="budget">
          + 2,000.00
        </div>
        <div className="budget__income clean-styles">
          <div className="budget__income--text">Ingresos</div>
          <div className="right">
            <div className="budget__income--value" id="incomes">
              + 4000.00
            </div>
            <div className="budget__income--percentage">&nbsp;</div>
          </div>
        </div>
        <div className="budget__expense clean-styles">
          <div className="budget__expense--text">Egresos</div>
          <div className="right clean-styles">
            <div className="budget__expense--value" id="expense">
              - 1,900.00
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
