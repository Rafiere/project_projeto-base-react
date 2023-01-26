import { useContext } from "react";
import { LoggedUserContext } from "../contexts";

export const useLoggedUser = () => {
  const loggedUserContext = useContext(LoggedUserContext);

  return loggedUserContext;
};
