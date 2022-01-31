import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '/src/firabase.js';
import { query, collection, getDocs, where } from "firebase/firestore";
import Header from '@components/Header';
import HeadBoard from '@components/HeadBoard';
import Form from '@components/Form';
import { async } from '@firebase/util';

const Home = () => {
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const fetUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("udi", "===", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            console.log('%c DATA', 'font-size: 20px; color: red');
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(loading) return;
        if(!user) return navigate("/");

        fetUserName();
    }, [user, loading]);

    return (
        <div>
            <Header email={user?.email}/>
            <HeadBoard />
            <Form />
        </div>
    )
}

export default Home
