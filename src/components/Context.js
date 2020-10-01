import React, { useContext, useState } from "react";

export const UserContext = React.createContext();
export const UpdateUserContext = React.createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const useUpdateContext = () => {
  return useContext(UpdateUserContext);
};

export function UserProvider({ children }) {
  const [user, setUser] = useState("null");

  function logger() {
    setUser("Alon");
  }

  return (
    <div>
      <UserContext.Provider value={user}>
        <UpdateUserContext.Provider value={logger}>
          {children}
        </UpdateUserContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
