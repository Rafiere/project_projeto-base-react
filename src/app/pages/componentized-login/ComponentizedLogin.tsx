import React, { useCallback, useRef, useState } from "react";
import LoginInput from "./components/LoginInput";

const ComponentizedLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordInputRef = useRef<HTMLInputElement>(null);
  const sendFormButtonRef = useRef<HTMLButtonElement>(null);

  const handleLogin = useCallback(() => {
    console.log("Email: " + email + " - Password: " + password);
  }, [email, password]);

  return (
    <div>
      <h1>Formulário de Login</h1>
      <form>
        <LoginInput
          label="Email"
          value={email}
          onChange={setEmail}
          onPressEnter={() => passwordInputRef.current?.focus()}
        />
        <LoginInput
          label="Password"
          value={password}
          onChange={setPassword}
          ref={passwordInputRef}
          onPressEnter={() => sendFormButtonRef.current?.click()}
        />
        <button type="button" onClick={handleLogin} ref={sendFormButtonRef}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ComponentizedLogin;
