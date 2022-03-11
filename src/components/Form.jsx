import React, { useContext, useRef, useState } from "react";
import {IonIcon} from "react-ion-icon";
import AppContext from '@context/AppContext';
// import { saveIncome } from '../../firabase';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firabase';
import '@styles/Form.scss';
import { async } from "@firebase/util";

const Form = () => {
  const form = useRef(null);
  const { state: {email}, addIncome } = useContext(AppContext);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('income');
  const incomesCollectionRef = collection(db, 'incomes');
  const expensesCollectionRef = collection(db, 'expenses');

  const handleSubmit = (e) => {
    
    e.preventDefault();
    
    if(description && value) {             
          
      let today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
      
      let newData = {
        date: date,
        description: description,
        username: email,
        value: Number(value)
      }
      
      if(type === 'income'){
        addIncome({description, value});
        addNewIncome(newData);        
      } else {
        addNewExpense(newData);
      }      
    }
  }

  const addNewIncome = async (data) => {
    await addDoc(incomesCollectionRef, data)
    .then((docRef) => {
      setDescription('');
      setValue('');
      setType('income');
      alert('Income successfully submited.');
    })
    .catch((error) => {
      console.log('%c Error adding income document', 'background-color: #ff0000;color: #fff;');
      console.log(error);
    });
  }

  const addNewExpense = async (data) => {
    await addDoc(expensesCollectionRef, data)
    .then((docRef) => {
      setDescription('');
      setValue('');
      setType('income');
      alert('Expense successfully submited.');
    })
    .catch((error) => {
      console.log('%c Error adding expense document', 'background-color: #ff0000; color: #fff;');
      console.log(error);
    });
  }
  
  return (      
    <div id="form" >
      <div className="add">
        <div className="add__container">
          <select name="dataFormType" id="type" className="add__type" onChange={(e) => setType(e.target.value)}>
            <option value="income" select="true">
              +
            </option>
            <option value="expense">-</option>
          </select>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="add__description"
            placeholder="add description"
            id="description"
          />
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="add__value"
            placeholder="value"
            id="value"
            step="any"
          />
          <button className="add__btn" onClick={handleSubmit}>
            <IonIcon  name="checkmark-circle-outline" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
