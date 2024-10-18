import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import Dashboard from './pages/dashboard';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/api/register" element={<Register />} />
        <Route path="/api/login" element={<Login />} />
        <Route path="/api/dashboard" element={<Dashboard />} />
      </Routes>
      
      </BrowserRouter>

    </div>
  )
}

export default App;