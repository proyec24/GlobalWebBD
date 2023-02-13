import React, {useState} from 'react';
import {BrowserRouter as Router,  Routes as Switch, Route} from "react-router-dom";
import Dashboard from "./Paginas/Dashboard.js"
import IniciarSesion from "./Paginas/IniciarSesion"
import SobreNosotros from "./Paginas/SobreNosotros.js"
import Perfil from "./Paginas/Perfil"
import Registro from "./Paginas/Registro"
import Editar from "./Paginas/Editar"
import './App.css';

function App() {
  return (
    <div className='principal'>
      <Router>
        <div>
          <Switch>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/login" element={<IniciarSesion/>}/>
            <Route path="/registro" element={<Registro/>}/>
            <Route path="/nosotros" element={<SobreNosotros/>}/> 
            <Route path="/perfil" element={<Perfil/>}/> 
            <Route path="/editar" element={<Editar/>}/> 
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
