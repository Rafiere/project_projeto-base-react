import React, { createContext, useCallback } from "react";

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

  return (
    <LoggedUserContext.Provider
      value={{
        username: "admin",
        logout: handleLogout,
      }}
    >
      {children}
    </LoggedUserContext.Provider>
  );
};
