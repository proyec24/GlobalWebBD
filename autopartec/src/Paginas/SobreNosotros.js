import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router,  Routes as Switch, Route} from "react-router-dom";
import Header2 from "../components/Header2"
import './styles/pageStyles.css';
import Service from '../Service';

function Nosotros() {
    return (
        <div className='dashboard'>
            <Header2/>
            <div className="container">
                <div className="row">
                    <div className="card">
                        <h3><b>¿Quienes Somos?</b></h3>
                        <h4>
                            Autopartec es una empresa orgullosamente mexicana,
                            nuestro impulso es hacia el desarrollo de estrategias que ayuden a satisfacer las necesidades y expectativas de nuestros clientes y
                            proveedores para que mejoren la calidad de vida de nuestro personal.Gracias al talento, compromiso y motivación de nuestro equipo de trabajo,
                            hemos logrado avanzar con pasos firmes hacia el éxito y la mejora continua.
                            problema.
                        </h4>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="card">
                        <h3><b>Mision</b></h3>
                        <h4>
                            Ser la empresa número uno en el mercado del cuidado vehicular, 
                            con servicio a domicilio.
                            Autopartec aspira a lo más alto con su misión de convertirse en el mayor 
                            referente a nivel mundial en el mercado de repuestos y accesorios de autos, 
                            y por si fuera poco, también busca garantizar servicio a domicilio por lo que 
                            debe expandir sus sucursales por todo el
                        </h4>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="card">
                        <h3><b>Vision</b></h3>
                        <h4>
                            Brindar un servicio de calidad, 
                            optimizar el tiempo de sus clientes y que ellos puedan mantener sus actividades 
                            mientras en Autopartec cuidamos de su auto.
                        </h4>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="card">
                    <h3><b>Ubicacion</b></h3>
                        <h4>
                            Nos encontramos en la direccion: Santa Martha
                            #126,Santa Margarita ,Guadalajara, Jalisco
                        </h4>
                        <div className="padre">
                            <div id="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.4944572425006!2d-103.41199718473678!3d20.73074370326034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af0b4cfc257b%3A0x6d6fb6b00d8bede5!2sSta.%20Martha%20126%2C%20Santa%20Margarita1a%20Secc.%2C%2045140%20Zapopan%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1676236205508!5m2!1ses-419!2smx" className='map'  loading="lazy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Nosotros;