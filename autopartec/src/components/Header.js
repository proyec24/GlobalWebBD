import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router,  Routes as Switch, Route} from "react-router-dom";
import './styles/componentStyles.css';

export default function Header({getSearch}) {
    const [logged, setLogged] = useState ({
        correo :"",
        contrasena:"",
        id_tipo_usuario:"",
        id_usuario:"",
        logeado:false,
        nombres:"",
        apellido_paterno:"",
        apellido_materno:"",
        img:"",
        id_carrito:""
    })
    const lupa = require('./img/lupa-de-busqueda.png');
    useEffect(() => {
        if(sessionStorage.getItem("user")){
            let user = JSON.parse(sessionStorage.getItem("user"));
            setLogged({
                correo : user.correo,
                contrasena : user.contrasena,
                id_tipo_usuario:user.id_tipo_usuario,
                id_usuario:user.id_usuario,
                nombres:user.nombres,
                apellido_paterno:user.apellido_materno,
                apellido_materno:user.apellido_paterno,
                img:user.img,
                logeado:true
            });
        }
    },[]);
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
                <a className='header-item' href='/'>
                    <p>
                        Inicio
                    </p>
                </a>
                {!logged.logeado ?
                    <a className='header-item' href='/login'>
                        <p>
                            Iniciar Sesion
                        </p>
                    </a>
                :
                    <a className='header-item' href='/perfil'>
                        <p>
                            Perfil
                        </p>
                    </a>
                }
                {
                    logged.logeado?
                    <a className='header-item' href='/carrito'>
                        <p>
                            Carrito
                        </p>
                    </a>
                    :
                    <p>

                    </p>
                }
                {logged.id_tipo_usuario==1 ?
                    <a className='header-item' href='/admin'>
                        <p>
                            Panel
                        </p>
                    </a>
                :
                    <p>
                        
                    </p>
                }
                
            </div>
        </div>
    );
}