import React from "react";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
