// ca devrait aller checcher directement index.js car c'est le fichier qui existe dsc e dossier
import Routes from "./components/Routes";
import React, { useEffect, useState } from "react";
import { UidContext } from "./components/AppContext";
import axios from "axios";

function App() {
  // uid = user Id
  const [uid, setUid] = useState(null);

  // useEffect va controler le token de l'utilisateur
  useEffect(() => {
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => setUid(res.data))
        .catch((err) => {
          console.log("No token");
        });
    };
    fetchToken();
  }, [uid]);
  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
}

export default App;
