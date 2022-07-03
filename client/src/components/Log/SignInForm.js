import React, { useState } from "react";
import axios from "axios";

const SignInForm = () => {
  // 1- on met se qu'on se stock

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // 2- la logique
  const handleLogin = (e) => {
    // preventDefault permet d'empecher l'actualisation de la page
    e.preventDefault();
    // email.error le . compte comme un espace
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        if (res.data.errors) {
          console.log(res);
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        }
        // si il n'y a pas d'erreurs dans notre response alors on va a l'endroit du /   Donc si connection reussi redirection vers Home
        else {
          window.location = "/";
        }
      })
      .catch((err) => console.log(err));
  };

  // 3- renvoie le jsx (html)

  return (
    <form action="" onSubmit={handleLogin} id="sign-up-form">
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        // Se qu'on ecrit dans input on ve recupere dans [email]useState
        // ensuite on enregistre et stocke la valeur de input grace a onChange
        // ensuite on attribut la value a [email]useState
        // puis on peut traiter les donnees dans handleLogin
      />
      <div className="email error"></div>
      <br />
      <label htmlFor="password">Mot de passe</label>
      <br />
      <input
        type="text"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="password error"></div>
      <input type="submit" value="Se connecter" />
    </form>
  );
};

export default SignInForm;
