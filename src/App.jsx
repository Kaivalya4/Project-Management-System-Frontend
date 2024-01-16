import { Route, Routes } from "react-router-dom";
import Supervisor from "./pages/supervisor/Supervisor";
import Manager from "./pages/manager/Manager";
import Login from "./pages/Login/Login";
import Employee from "./pages/employee/Employee";

function App() {
  return (
    <>
      <Routes path="/">
        <Route index element={<Login />} />
        <Route path="employee" element={<Employee />} />
        <Route path="manager" element={<Manager />} />
        <Route path="supervisor" element={<Supervisor />} />
      </Routes>
    </>
  );
}

export default App;
