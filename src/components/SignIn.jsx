import React from "react";

function SignIn() {
  return (
    <div className="sign-in-container">
      <div className="sign-in">
        <h1>Sign Up</h1>
        <input type="text" id="email" placeholder="E-mail"/>
        <input type="text" placeholder="Password" id="password"/>
        <button>Sign In</button>
      </div>
      <div className="sign-up">
        <h1>Sign In</h1>
        <input type="text" id="email" placeholder="E-mail"/>
        <input type="text" placeholder="Password" id="password"/>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default SignIn;
