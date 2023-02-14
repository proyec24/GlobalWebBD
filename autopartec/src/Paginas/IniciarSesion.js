import React, {createElement, useEffect, useState} from 'react';
import {BrowserRouter as Router,  Routes as Switch, Route, useNavigate} from "react-router-dom";
import Header from "../components/Header"
import './styles/pageStyles.css';
import Service from '../Service';

function IniciarSesion() {
    const [entrar, setEntrar] = useState(false);
    const [correo, setCorreo] = useState("");
    const [alert1, setAlert1] = useState(false);
    const [alert2, setAlert2] = useState(false);
    const [contrasena, setContrasena] = useState("");
    const navigate = useNavigate();
    const [user, setUser] = useState({
        correo :"",
        contrasena:"",
        id_tipo_usuario:"",
        id_usuario:"",
        nombres:"",
        apellido_paterno:"",
        apellido_materno:"",
        img:"",
        id_carrito:"",
        logeado:false
    });
    const handleEmail = event => {
        setCorreo(event.target.value);
    };
    const handlePass = event => {
        setContrasena(event.target.value);
    };
    useEffect(()=>{
        sessionStorage.clear();
        if(entrar){
            if(contrasena==""||correo==""){
                if(correo==""){
                    if(!alert1){
                        setAlert1(true);
                        const div = document.getElementById("alert1");
                        const p = document.createElement("p");
                        p.setAttribute("id","alerta1");
                        const text = document.createTextNode("Introduce un correo valido");
                        p.appendChild(text);
                        div.appendChild(p);
                    }
                }
                else if(contrasena==""){
                    if(correo!=""&&alert1){
                        const div= document.getElementById("alert1");
                        const rm= document.getElementById("alerta1");
                        div.removeChild(rm);
                        setAlert1(false);
                    }
                    if(!alert2){
                        setAlert2(true);
                        const p = document.createElement("p");
                        const div = document.getElementById("alert2");
                        p.setAttribute("id","alerta2");
                        const text = document.createTextNode("Introduce una contrasena valido");
                        p.appendChild(text);
                        div.appendChild(p);
                    }
                }
            }
            else{
                if(alert1||alert2){
                    let div="";
                    if(alert1) {
                        div= document.getElementById("alert1");
                        const rm= document.getElementById("alerta1");
                        div.removeChild(rm);
                    }
                    if(alert2) {
                        div = document.getElementById("alert2");
                        const rm= document.getElementById("alerta2");
                        div.removeChild(rm);
                    }
                    setAlert1(false)
                }
                setUser({
                    correo : correo,
                    contrasena: contrasena
                })
                console.log(user);
                Service.postData("usuario/iniciarSesion",user).then((data)=>{
                    let userF={...user,
                        id_tipo_usuario:data.id_tipo_usuario,
                        id_usuario:data.id_usuario,
                        logeado:true,
                        nombres:data.nombres,
                        apellido_paterno:data.apellido_materno,
                        apellido_materno:data.apellido_paterno,
                        img:data.imagen,
                    }
                    setUser(userF)
                    sessionStorage.setItem("user",JSON.stringify(userF));
                    navigate("/");
                });
                
            }
            
            setEntrar(false);
        }
    },[entrar]);
    return (
        <div className="login-box">
            <div>
                <h2>Iniciar Sesion</h2>
                <div className="user-box">
                    <input type="text" onChange={handleEmail} value={correo} name="correo" required  />
                    <label>Correo</label>
                    <div
                        id='alert1'
                        className="alert-danger"
                    >

                    </div>
                </div>
                <div className="user-box">
                <input type="password" onChange={handlePass} value={contrasena} name="" required  />
                <label>Contraseña</label>
                <div
                    id='alert2'
                    className="alert-danger"
                >

                </div>
                </div>
                <div className='perfil-btn'>
                    <button className='btn third btnin' onClick={()=>setEntrar(true)}>
                        Entrar 
                    </button>
                    <button className='btn third btnin' onClick={()=>{navigate("/registro")}}>
                        Registrarse
                    </button>
                </div>
            </div>
        </div>
    );
}

export default IniciarSesion;