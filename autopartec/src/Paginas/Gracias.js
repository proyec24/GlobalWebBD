import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router,  Routes as Switch, Route, useNavigate} from "react-router-dom";
import Header2 from "../components/Header2"
import './styles/pageStyles.css';
import Service from '../Service';
import ProductCard from '../components/ProductCard';
function Gracias() {
    const navigate = useNavigate();
    return (
        <div className='dashboard3'>
            <Header2 />
            <div className='div-gracias'>
                <b>
                    <p className='gracias'>
                        GRACIAS POR SU COMPRA
                    </p>
                </b>
                <button className="btn third " onClick={()=>navigate("/")}>Regresar a Inicio</button>
            </div>
        </div>
    );
}

export default Gracias;