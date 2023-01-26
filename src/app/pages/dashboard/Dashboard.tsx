import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedUserContext } from "../../shared/contexts/LoggedUser";

export const Dashboard = () => {
  const navigate = useNavigate();

  const loggedUserContext = useContext(LoggedUserContext);

  const handleClick = () => {
    navigate("/login");
  };

  /* O valor será atualizado, o estado, não, pois estamos realizando uma modificação direta. */
  const counterRef = useRef(0);

  return (
    <div>
      <h1>Página de Dashboard</h1>

      <h2>Usuário Logado: {loggedUserContext.username}</h2>

      <button onClick={handleClick}>Ir para Login</button>

      <p>Contador: {counterRef.current}</p>
      <button onClick={() => counterRef.current++}>Somar</button>
      <button onClick={() => console.log(counterRef)}>Gerar Log</button>
    </div>
  );
};
