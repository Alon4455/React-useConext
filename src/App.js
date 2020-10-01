import React from "react";
import Home from "./components/Home";
import { UserProvider } from "./components/Context";
function App() {
  return (
    <div>
      <UserProvider>
        <Home />
      </UserProvider>
    </div>
  );
}

export default App;
