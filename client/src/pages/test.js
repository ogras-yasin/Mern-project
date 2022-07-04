import React, { useState } from "react";
// import {render}

const Compteur = () => {
  const [count, setCount] = useState(0);
  const state = useState(0);

  const handleCount = (e) => {
    e.preventDefault();
    setCount(10);
  };
  console.log(state);
  return <button onClick={handleCount}>Nombre : {count}</button>;
};

export default Compteur;
