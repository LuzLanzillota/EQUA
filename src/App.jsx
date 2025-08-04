import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";
import './App.css'
import NavBar from './component/NavBar';
import Inicio from './component/Inicio';
import Quienessomos from './component/Quienessomos';
import Portfolio from './component/Portfolio';
import DisenioWeb from './component/DisenioWeb';
import Branding from './component/Branding';
import Motion from './component/Motion';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
          <Route path="/" element={<Inicio/>} /> 
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/quienessomos" element={<Quienessomos/>} />
          <Route path="/branding" element={<Branding/>} />
          <Route path="/diseñoweb" element={<DisenioWeb/>} />
          <Route path="/motion" element={<Motion/>} />
          {/* <Route path="/contacto" element={} />  */}
        </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
