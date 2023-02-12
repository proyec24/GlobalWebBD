import React, {useState} from 'react';
import {BrowserRouter as Router,  Routes as Switch, Route} from "react-router-dom";
import Dashboard from "./Paginas/Dashboard.js"
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/login" element={<p>adios</p>}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
