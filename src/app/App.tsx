import React from "react";
import AppRoutes from "./routes";
import { LoggedUserProvider } from "./shared/contexts";

function App() {
  return (
    <LoggedUserProvider>
      <AppRoutes />
    </LoggedUserProvider>
  );
}

export default App;
