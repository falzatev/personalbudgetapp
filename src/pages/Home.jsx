import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../firabase';
import { query, collection, getDocs, where } from "firebase/firestore";
import Header from '@components/Header';
import HeadBoard from '@components/HeadBoard';
import Form from '@components/Form';
import Income from '@components/Income';
import Expense from '@components/Expense';
import AppContext from '@context/AppContext';
import { async } from '@firebase/util';
import '@styles/Home.scss';

const Home = () => {

    const incomesCollectionRef = collection(db, 'incomes');
    const expensesCollectionRef = collection(db, 'expenses');
    const [incomeList, setIncomeList] = useState([]);
    const [expenseList, setExpenseList] = useState([]);

    let [totalIncomes, setTotalIncomes] = useState(0);
    let [totalExpenses, setTotalExpenses] = useState(0);
    
    const { asignEmail } = useContext(AppContext);

    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        
        try {
            console.log(`this is the user: ${user}`);
            setEmail(user.email);
            asignEmail(user.email);
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            
            const data = doc.docs[0] ? doc.docs[0].data() : '';
            setName(data.name);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(loading) return;
        if(!user) return navigate("/");
        fetchUserName();
    }, [user, loading]);

    useEffect(() => {
        const getIncomes = async () => {
          const queryIncomes = query(incomesCollectionRef, where("username", "==", email));
          const dataIncome = await getDocs(queryIncomes);
          setIncomeList(dataIncome.docs.map((doc) => ({...doc.data(), id: doc.id })));
          
          let totalInc = 0;
          for(let income of incomeList) {
              totalInc += +income.value;
          }
          setTotalIncomes(totalInc);
          return totalInc;
        };
    
        const getExpenses = async () => {
            const queryExpenses = query(expensesCollectionRef, where("username", "==", email));
            const exp = await getDocs(queryExpenses);
            setExpenseList(exp.docs.map((doc) => ({...doc.data(), id: doc.id })));

            let total = 0;
            for(let expense of expenseList) {
                total += +expense.value;
            }
            setTotalExpenses(total);
            return total;
        };
    
        getIncomes();
        getExpenses();
      }, [incomeList, expenseList]);



    return (
        <div>
            <Header />
            <HeadBoard incomes={totalIncomes} expenses={totalExpenses} />
            <Form />
            <div className='container'>
                <Income incomes={incomeList}/>                
                <Expense expenses={expenseList}/>
            </div>
        </div>
    )
}

export default Home
