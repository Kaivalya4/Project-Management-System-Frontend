import { useContext } from "react";
import UserContext from "./UserContext";

const useUserContext = () => {
  console.log(useContext(UserContext));
  return useContext(UserContext);
};

export default useUserContext;
