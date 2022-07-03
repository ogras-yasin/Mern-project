import React from "react";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";
import Trending from "../../pages/Trending";

// Quand on dit Router en fait appel a BrowserRouter
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

const index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/profil" exact element={<Profil />} />
        <Route path="/trending" exact element={<Trending />} />
        {/* voir comment utiliser navigate */}
        {/* <Navigate to="/" /> */}
      </Routes>
    </Router>
  );
};

export default index;
