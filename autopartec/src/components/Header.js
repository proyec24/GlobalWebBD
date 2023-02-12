import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router,  Routes as Switch, Route} from "react-router-dom";
import './styles/componentStyles.css';

export default function Header({getSearch}) {
    
    const lupa = require('./img/lupa-de-busqueda.png');

    return (
        <div className='header-container'>
            <div className='header-tittle'>
                <p>
                    Autopartec
                </p>
            </div>
            <div className='header-search'>
                <input 
                type="text" 
                id='search' 
                className='header-input' 
                placeholder='Que producto buscas...' 
                >

                </input>
                <button 
                className='header-button' 
                onClick={()=>getSearch(document.getElementById("search").value)}>
                    <img src={lupa} />
                </button>
            </div>
            <div className='header-menu'>
                <a className='header-item' href='/nosotros'>
                    <p>
                        Nosotros
                    </p>
                </a>
                <a className='header-item' href='/inicio'>
                    <p>
                        Inicio
                    </p>
                </a>
                <a className='header-item' href='/login'>
                    <p>
                        Iniciar Sesion
                    </p>
                </a>
            </div>
        </div>
    );
}