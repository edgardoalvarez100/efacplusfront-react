import React from "react";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import { Registrar } from "./pages/Registrar";
import Contacto from "./pages/Contacto";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrar" element={<Registrar />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
};

export default App;
