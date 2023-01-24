import React from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <h1>Página de Dashboard</h1>
      <button onClick={handleClick}>Ir para Login</button>
    </div>
  );
};
