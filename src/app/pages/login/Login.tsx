import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    console.log("A página foi carregada!");
  }, []);

  useEffect(() => {
    console.log("Email: " + email + " Password: " + password);
  }, [email, password]);

  const emailLength = useMemo(() => {
    return email.length * 1000;
  }, [email.length]);

  const handleLogin = useCallback(() => {
    console.log("Email: " + email + " Password: " + password);
  }, [email, password]);

  return (
    <div>
      <h1>Página de Login</h1>
      <Link to={"/dashboard"}>Ir para Dashboard</Link>

      <form>
        <label>
          <span>Email</span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" ? loginButtonRef.current?.click() : undefined
            }
          />
        </label>
        <button type="button" onClick={handleLogin} ref={loginButtonRef}>
          Login
        </button>
      </form>
    </div>
  );
};
