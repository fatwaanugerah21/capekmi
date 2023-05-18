import React from "react";
import "./kumpulanCss/App.css";
import Button from "./components/button";
import LogoGoogle from "/LogoGoogle.png";

function App() {
  const classNamenyaSection1 = "section-1";

  function getSection1ClassName() {
    // Disini bisa kita lakukan komputasi

    return "section-kiri";
  }

  return (
    <div className="parent">
      <div className={getSection1ClassName()}>
        <h1>Sign In To Ecoglobe</h1>
        <p>Please enter your details below</p>
        <button className="google-signin">
          <img src={LogoGoogle} width={24} height={24} />
          Sign in with Google
        </button>

        <div className="parentOr">
          <div className={`garis-horizontal`}></div>
          <p>or</p>
          <div className={`garis-horizontal`}></div>
        </div>

        <input className="input" placeholder="E-Mail" />
        <input className="input" placeholder="Password" />

        <div className={`rememberMedanForgotPassword`}>
          <div className={`remember-me`}>
            <input type="checkbox" />
            <p>Remember me</p>
          </div>

          <p className={`fp`}>Forgot Password</p>
        </div>

        <button className={`button-login`}>Login</button>

        <div className={`flex`}>
          <p className="text-gray">Don't have an account?</p>
          <a href="#">Sign up for free</a>
        </div>
      </div>
      <div className="section-kanan">Section kanan</div>
    </div>
  );
}

export default App;
