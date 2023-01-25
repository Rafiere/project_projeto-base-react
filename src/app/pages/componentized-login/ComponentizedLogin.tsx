import React, { useCallback, useRef, useState } from "react";
import LoginButton from "./components/LoginButton";
import LoginInput from "./components/LoginInput";

const ComponentizedLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passwordInputRef = useRef<HTMLInputElement>(null);
  const sendFormButtonRef = useRef<HTMLButtonElement>(null);

  const handleLogin = useCallback(() => {
    console.log("Email: " + email + " - Password: " + password);
  }, [email, password]);

  const handleSignUp = useCallback(() => {
    console.log("Cadastrando...");
  }, []);

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
        <LoginButton
          type="button"
          onClick={handleLogin}
          ref={sendFormButtonRef}
        >
          Login
        </LoginButton>
        <LoginButton type="button" onClick={handleSignUp}>
          Sign Up
        </LoginButton>
      </form>
    </div>
  );
};

export default ComponentizedLogin;
