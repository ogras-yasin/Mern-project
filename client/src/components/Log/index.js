import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const Log = (props) => {
  console.log(props);
  // 1- on met se qu'on se stock
  // 2- la logique
  // 3- renvoie le jsx (html)
  // hook ? usestate apprendre
  // 1- on met se qu'on se stock

  const [SignUpModal, setSignUpModal] = useState(props.signUp);
  const [SignInModal, setSignInModal] = useState(props.signIn);
  // 2- la logique
  const handleModals = (e) => {
    if (e.target.id === "register") {
      return setSignUpModal(true), setSignInModal(false);
    } else if (e.target.id === "login") {
      return setSignUpModal(false), setSignInModal(true);
    }
  };

  // 3- renvoie le jsx (html)
  return (
    <div>
      index cuneyt arkin
      <div className="connection-form">
        <div className="form-container">
          <ul>
            {/* handleModals = tu gere les modals  */}
            <li
              onClick={handleModals}
              id="register"
              className={SignUpModal ? "active-btn" : null}
            >
              S'inscrire{" "}
            </li>
            <li
              onClick={handleModals}
              id="login"
              className={SignInModal ? "active-btn" : null}
            >
              Se connecter
            </li>
          </ul>
          {/* si  sign up  "true" alors tu m'affiche <SignUpForm /> */}
          {SignUpModal && <SignUpForm />}
          {SignInModal && <SignInForm />}
        </div>
      </div>
    </div>
  );
};

export default Log;
