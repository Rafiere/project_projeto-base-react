import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div>
      <h1>Página de Login</h1>
      <Link to={"/dashboard"}>Ir para Dashboard</Link>
    </div>
  );
};
