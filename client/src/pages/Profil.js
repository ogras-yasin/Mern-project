import React, { useContext } from "react";
import Log from "../components/Log/index";
import { UidContext } from "../components/AppContext";

const Profil = () => {
  const uid = useContext(UidContext);
  return (
    <div className="profil-page">
      {uid ? <h1>UPDATE PAGE</h1> : null}
      <div className="log-container">
        <Log signUp={true} signIn={false} />
        <div className="img-container">
          {/* la route est particuliere pour l'image, c'est comme ci qu'on est dans le dossier public  */}
          <img src="./img/log.svg" alt="log" />
        </div>
      </div>
    </div>
  );
};

export default Profil;
