import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Layout from './components/Layout'

function App() {


  return (
    <Routes>
    {/* Redirect "/" to "/dashboard" */}
    <Route path="/" element={<Navigate to="/dashboard" replace />} />

    {/* Layout wrapper */}
    <Route element={<Layout />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/roles" element={<Dashboard />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/payroll" element={<Dashboard />} />
      <Route path="/reports" element={<Dashboard />} />
      <Route path="/settings" element={<Dashboard />} />
    </Route>
  </Routes>
  )
}

export default App
