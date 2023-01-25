import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, Login } from "../pages";
import ComponentizedLogin from "../pages/componentized-login/ComponentizedLogin";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/componentized-login" element={<ComponentizedLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h1>Página não encontrada!</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
