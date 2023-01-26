import React, { createContext, useCallback, useEffect, useState } from "react";

interface LoggedUserContextData {
  username: string;
  logout: () => void;
}

interface LoggedUserContextProps {
  children: React.ReactNode;
}

export const LoggedUserContext = createContext({} as LoggedUserContextData);

export const LoggedUserProvider = ({ children }: LoggedUserContextProps) => {
  const handleLogout = useCallback(() => {
    console.log("Logout...");
  }, []);

  const [username, setUsername] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setUsername("Administrador");
    }, 1000);
  });

  return (
    <LoggedUserContext.Provider
      value={{
        username: username,
        logout: handleLogout,
      }}
    >
      {children}
    </LoggedUserContext.Provider>
  );
};
