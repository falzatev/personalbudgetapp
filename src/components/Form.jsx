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
      // const data username= {
        //   description: dataForm.description,
        //   value: dataForm.value,
        //   username: {email}
        // }
        
        // database.ref("income").set({
          //   description : dataForm.description,
          //   value : dataForm.value,
          // }).catch(alert);              
          
          let today = new Date(),
          date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
          console.log(`current date: ${date}`); 
          
          let newData = {
            date: date,
            description: description,
            username: email,
            value: value
          }
      if(type === 'income'){
        addIncome({description, value});

        // saveIncome(description, value, email, date);

        addNewIncome(newData);        
      } else {
        addNewExpense(newData);
      }
    }
  }

  const addNewIncome = async (data) => {
    await addDoc(incomesCollectionRef, data)
  }

  const addNewExpense = async (data) => {
    await addDoc(expensesCollectionRef, data);
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
