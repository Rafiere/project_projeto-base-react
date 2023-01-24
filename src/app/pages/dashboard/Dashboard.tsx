import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };

  /* O valor será atualizado, o estado, não, pois estamos realizando uma modificação direta. */
  const counterRef = useRef(0);

  return (
    <div>
      <h1>Página de Dashboard</h1>
      <button onClick={handleClick}>Ir para Login</button>

      <p>Contador: {counterRef.current}</p>
      <button onClick={() => counterRef.current++}>Somar</button>
      <button onClick={() => console.log(counterRef)}>Gerar Log</button>
    </div>
  );
};
