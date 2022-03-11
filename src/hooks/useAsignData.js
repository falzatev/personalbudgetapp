import { useEffect, useState } from "react";
import { query, collection, getDocs, deleteDoc, doc, where } from "firebase/firestore";
import { db } from "../../firabase";
import { async } from "@firebase/util";

const useAsignData = async (collectionName, email) => {

    const [expenses, setExpenses] = useState([]);
    const [incomes, setIncomes] = useState([]);

    const collectionRef = collection(db, collectionName);
        const queryData = query(collectionRef, where("username", "==", email), where("date", ">=", getDate("I")));

        const resultData = await getDocs(queryData); 
        setIncomes(resultData.docs.map((doc) => ({...doc.data(), id: doc.id })));

    const getDate = (type) => {
        let today = new Date();

        date = type === "I" 
            ? today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + '1' 
            : today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        return date;
    }

    const getData = async (collectionName, email) => {
        
        
        
    }

    return {
        incomes,
        getData,
    }
}

export default useAsignData;
