import React from "react";

const Form = () => {
    const addDato = () => {
        
    }
  return (
    <form id="form" onsubmit="return false;">
      <div className="add">
        <div className="add__container">
          <select name="" id="type" className="add_type">
            <option value="income" selected>
              +
            </option>
            <option value="expense">-</option>
          </select>
          <input
            type="text"
            className="add_description"
            placeholder="add description"
            id="description"
          />
          <input
            type="number"
            className="add_value"
            placeholder="value"
            id="value"
            step="any"
          />
          <button className="add_btn" onclick="addDato()">
            <ion-icon name="checkmark-circle-outline"></ion-icon>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
