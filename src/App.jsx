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
import FormularioContacto from './component/Contacto';
import MotionLasPepas from './component/MotionLasPepas';
import MotionCharly from './component/MotionCharly';
import MotionBSAS from './component/MotionBSAS.JSX';
import MotionNike from './component/MotionNike';
import Modelado3d from './component/Modelado3D';
import ModeladoHada from './component/ModeladoHada';



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
          <Route path="/modelado-3d" element={<Modelado3d/>} />
          <Route path="/motion" element={<Motion/>} />
          <Route path="/contacto" element={<FormularioContacto/>} /> 
          <Route path="/motion-LasPepas" element={<MotionLasPepas/>} /> 
          <Route path="/motion-Nike" element={<MotionNike/>} /> 
          <Route path="/motion-BSAS" element={<MotionBSAS/>} /> 
          <Route path="/motion-Charly" element={<MotionCharly/>} /> 
          <Route path="/modelado3D-Hada" element={<ModeladoHada/>} /> 
        </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
