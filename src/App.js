import { lazy } from 'react';
import './App.css';
import FCHome from './Pages/FCHome/FCHome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard/Dashboard';
 
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
