import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword, signInWithGoogle } from "../../firabase";

import '@styles/Register.scss';

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const register = () => {
    if (!name || !email || !password) alert("Please fill all the required fields");
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/home");
  }, [user, loading]);

  return (
    <div className="CreateAccount">
      <div className="CreateAccount-container">
        <h1 className="title">Create account</h1>
        <div className="form">
          <div>
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Teff"
              onChange={(e) => setName(e.target.value)}
              className="input input-name"
            />
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              placeholder="platzi@example.com"
              onChange={(e) => setEmail(e.target.value)}
              className="input input-email"
            />
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="*********"
              onChange={(e) => setPassword(e.target.value)}
              className="input input-password"
            />
          </div>
          <button
            onClick={register}
            className="primary-button login-button"
          >Create</button>
        </div>
        <button className="secondary-button" onClick={() => navigate("/")}>
          Back to login
        </button>
        
      </div>
    </div>
  );
};

export default Register;
