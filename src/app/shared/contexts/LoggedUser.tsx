import React, { createContext } from "react";

interface LoggedUserContextData {
  username: string;
}

interface LoggedUserContextProps {
  children: React.ReactNode;
}

export const LoggedUserContext = createContext({} as LoggedUserContextData);

export const LoggedUserProvider = ({ children }: LoggedUserContextProps) => {
  return (
    <LoggedUserContext.Provider
      value={{
        username: "admin",
      }}
    >
      {children}
    </LoggedUserContext.Provider>
  );
};
