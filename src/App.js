import React from "react";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { Registrar } from "./pages/Registrar";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrar" element={<Registrar />} />
    </Routes>
  );
};

export default App;
