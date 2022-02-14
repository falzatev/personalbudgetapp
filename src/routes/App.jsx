import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@containers/Layout";
import Login from "@pages/Login";
import Home from "@pages/Home";
import Register from "@pages/Register";
import NotFound from "@pages/NotFound";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState"; 
import "@styles/global.scss";

const App = () => {
    const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
