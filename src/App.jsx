import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Layout from "./components/Layout";
import Roles from './pages/Roles'
import EmployeeProfile from "./pages/EmployeeProfile";
import RolesDetails from "./pages/RolesDetails";

function App() {
  return (
    <Routes>
      {/* Redirect "/" to "/dashboard" */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Layout wrapper */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/employees" element={<Employees />} />
        <Route path="/employee/:id/profile" element={<EmployeeProfile />} />
        <Route path="/payroll" element={<Dashboard />} />
        <Route path="/reports" element={<Dashboard />} />
        <Route path="/settings" element={<Dashboard />} />
      </Route>

      <Route path="/roles" element={<Roles />} />
      <Route path="/roles/:id" element={<RolesDetails/>}/>
    </Routes>
  );
}

export default App;
