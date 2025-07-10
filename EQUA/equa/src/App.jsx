import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import './App.css'
import NavBar from './component/NavBar';
import Inicio from './component/inicio';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
          <Route path="/" element={<Inicio/>} /> 
          {/* <Route path="/PORTFOLIO" element={} />
          <Route path="/QUIENESSOMOS" element={} />
          <Route path="/contacto" element={} />  */}
        </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
