import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase";
import { Alert } from "@mui/material";
function SignIn({ setSignIn, logout }) {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [errorPage, setErrorPage] = useState(false);
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      setRegisterEmail("");
      setRegisterPassword("");
      setSignIn(true);
    } catch (e) {
      if ((e.message = "auth/invalid-email")) {

        setErrorPage(true)

      }
    }
    setTimeout(() => {
      setErrorPage(false)  
    }, 1000);
  };

  async function login() {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      setLoginEmail("");
      setLoginPassword("");
      setSignIn(true);
    } catch (e) {
      if ((e.message = "auth/invalid-email")) {

        setErrorPage(true)
       
      }
      setTimeout(() => {
        setErrorPage(false)  
      }, 1000);
      // auth/invalid-email -- for invalid email
      // auth/user-not-found -- user not found in database
    }
  }

  return (
    <div className="sign-in-container">
      {errorPage && (
        <div className="error-page">
          <Alert severity="error">Invalid Email or Password</Alert>
        </div>
      )}

      <div className="sign-in">
        <h1>Sign In</h1>
        <input
          id="signInEmail"
          placeholder="E-mail"
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          id="signInPassword"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button onClick={login}>Sign In</button>
      </div>
      <div className="sign-up">
        <h1>Sign Up</h1>
        <input
          value={registerEmail}
          type="text"
          id="signUpEmail"
          placeholder="E-mail"
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          value={registerPassword}
          type="text"
          placeholder="Password"
          id="signUpPassword"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Sign Up</button>
      </div>
    </div>
  );
}

export default SignIn;
