import { useState } from "react";
import UserContext from "./UserContext";

export const UserContextProvider = ({ children }) => {
  const [currentEmp, setCurrentEmp] = useState({
    empID: null,
    role: "",
  });

  return (
    <UserContext.Provider value={{ currentEmp, setCurrentEmp }}>
      {children}
    </UserContext.Provider>
  );
};
