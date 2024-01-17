import { Navigate } from "react-router-dom";
import useUserContext from "../../elements/common/context/UserContext/UseUserContext";

const Employee = () => {
  const { currentEmp } = useUserContext();
  if (currentEmp.empID !== null) {
    console.log("hello", currentEmp);
    return <div>employee</div>;
  } else {
    return <Navigate to="/" />;
  }
};

export default Employee;
