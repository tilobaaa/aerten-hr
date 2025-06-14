

import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

function App() {


  return (
   <Routes>
    {/* for all home requests, it redirects them to the dashboard page and the replace ensures that they cannot go back to the / for better ux */}
    <Route path='/' element={<Navigate to="/dashboard" replace/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
   </Routes>
  )
}

export default App
