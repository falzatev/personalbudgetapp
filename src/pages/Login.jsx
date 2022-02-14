import React, { useRef, useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../firabase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import instagram from '@images/instagram.png';
import '@styles/Login.scss';

const Login = () => {
    const form = useRef(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
      if(loading) {
        console.log("usuario no encontrado")
        return;
      }
      if(user) {        
        navigate("/home");
      }
    }, [user, loading]);

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={instagram} alt="logo" className="logo" />
        <div className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            name="email"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-password"
          />
          <button
            className="primary-button login-button"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Log in
          </button>
          <a href="/">Forgot my password</a>
          <a href="/register">Don't you hava an account? </a>
        </div>
        {/* <button className="secondary-button signup-button">Sign up</button> */}
        <button className="secondary-button signup-button" onClick={signInWithGoogle}>
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
