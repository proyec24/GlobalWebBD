import React, {createElement, useEffect, useState} from 'react';
import {BrowserRouter as Router,  Routes as Switch, Route, useNavigate} from "react-router-dom";
import Header2 from "../components/Header2"
import './styles/pageStyles.css';
import Service from '../Service';

function Editar() {
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
        img:[],
        imgName:"",
        logeado:false,
        estado:"",
        calle:"",
        no_exterior:"",
        colonia:"",
        cp:"",
    });
    useEffect(() => {
        let userTemp={};
        if(sessionStorage.getItem("user")){
            let user = JSON.parse(sessionStorage.getItem("user"));
            userTemp={
                correo : user.correo,
                contrasena : user.contrasena,
                id_tipo_usuario:user.id_tipo_usuario,
                id_usuario:user.id_usuario,
                nombres:user.nombres,
                apellido_paterno:user.apellido_materno,
                apellido_materno:user.apellido_paterno,
                img:user.img,
                logeado:true
            };
        }
        if(localStorage.getItem("more")){
            let more = JSON.parse(localStorage.getItem("more"));
            setUser({
                ...userTemp,
                estado:more.estado,
                calle:more.calle,
                no_exterior:more.no_exterior,
                colonia:more.colonia,
                cp:more.cp,
                
            });
        }
    },[]);
    const handleUser = event => {
        switch (event.target.name){
            case  "nombres":
                setUser({
                    ...user,
                    nombres:event.target.value
                })
                break;
            case  "apaterno":
                setUser({
                    ...user,
                    apellido_paterno:event.target.value
                })
                break;
            case  "amaterno":
                setUser({
                    ...user,
                    apellido_materno:event.target.value
                })
                break;
            case  "correo":
                setUser({
                    ...user,
                    correo:event.target.value
                })
                break;
            case  "pswd":
                setUser({
                    ...user,
                    contrasena:event.target.value
                })
                break;
            case  "img":
                setUser({
                    ...user,
                    imgName:event.target.files[0].name,
                    img:Array.from(event.target.files)
                })
                break;
            case  "calle":
                
                setUser({
                    ...user,
                    calle:event.target.value
                })
                break;
            case  "noext":
                setUser({
                    ...user,
                    no_exterior:event.target.value
                })
                break;
            case  "colonia":
                setUser({
                    ...user,
                    colonia:event.target.value
                })
                break;
            case  "cp":
                setUser({
                    ...user,
                    cp:event.target.value
                })
                break;
            case  "estado":
                setUser({
                    ...user,
                    estado:event.target.value
                })
                break;
        }
    };
    let id_register=0;
    const handleRegister = event => {
        Service.postData("usuario/usuario_update",user).then((res)=>{
            Service.postData("usuario/obtenerUsuario",user).then((data)=>{
                sessionStorage.clear();
                localStorage.removeItem("more");
                let userTemp={
                    id_tipo_usuario:data[0].id_tipo_usuario,
                    id_usuario:data[0].id_usuario,
                    logeado:true,
                    nombres:data[0].nombres,
                    correo:data[0].correo,
                    contrasena:data[0].contrasena,
                    apellido_paterno:data[0].apellido_materno,
                    apellido_materno:data[0].apellido_paterno,
                    img:data[0].imagen,
                }
                sessionStorage.setItem("user",JSON.stringify( userTemp));
                let moreTemp={
                    estado:data[0].estado,
                    calle:data[0].calle,
                    no_exterior:data[0].no_exterior,
                    colonia:data[0].colonia,
                    cp:data[0].cp,
                }
                localStorage.setItem("more",JSON.stringify(moreTemp));
                navigate('/perfil');
            })
        })
        
    };
    return (
        <div className='scroll'>
            <Header2/>
            <div className="register-box">
                <div>
                    <h2>Editar</h2>
                    <div className="user-box">
                        <input type="text" onChange={handleUser} value={user.nombres} name="nombres" required  />
                        <label>Nombres</label>
                        <div
                            id='alert1'
                            className="alert-danger"
                        >
                            
                        </div>
                    </div>
                    <div className="user-box">
                        <input type="text" onChange={handleUser} value={user.apellido_paterno} name="apaterno" required  />
                        <label>Apellido paterno</label>
                        <div
                            id='alert1'
                            className="alert-danger"
                        >
                            
                        </div>
                    </div>
                    <div className="user-box">
                        <input type="text" onChange={handleUser} value={user.apellido_materno} name="amaterno" required  />
                        <label>Apellido materno</label>
                        <div
                            id='alert1'
                            className="alert-danger"
                        >
                            
                        </div>
                    </div>
                    <div className="user-box">
                        <input type="text" onChange={handleUser} value={user.correo} name="correo" required  />
                        <label>Correo</label>
                        <div
                            id='alert1'
                            className="alert-danger"
                        >
                            
                        </div>
                    </div>
                    <div className="user-box">
                        <input type="password" onChange={handleUser} value={user.contrasena} name="pswd" required  />
                        <label>Contraseña</label>
                        <div
                            id='alert1'
                            className="alert-danger"
                        >
                            
                        </div>
                    </div>
                    <div className="user-box">
                        <input type="text" onChange={handleUser} value={user.estado} name="estado" required  />
                        <label>Estado</label>
                        <div
                            id='alert1'
                            className="alert-danger"
                        >
                            
                        </div>
                    </div>
                    <div className="user-box">
                        <input type="text" onChange={handleUser} value={user.calle} name="calle" required  />
                        <label>Calle</label>
                        <div
                            id='alert1'
                            className="alert-danger"
                        >
                            
                        </div>
                    </div>
                    <div className="user-box">
                        <input type="text" onChange={handleUser} value={user.no_exterior} name="noext" required  />
                        <label>No.Exterior</label>
                        <div
                            id='alert1'
                            className="alert-danger"
                        >
                            
                        </div>
                    </div>
                    <div className="user-box">
                        <input type="text" onChange={handleUser} value={user.colonia} name="colonia" required  />
                        <label>Colonia</label>
                        <div
                            id='alert1'
                            className="alert-danger"
                        >
                            
                        </div>
                    </div>
                    <div className="user-box">
                        <input type="text" onChange={handleUser} value={user.cp} name="cp" required  />
                        <label>CP</label>
                        <div
                            id='alert1'
                            className="alert-danger"
                        >
                            
                        </div>
                    </div>
                    <div className='perfil-btn'>
                        <button className='btn third ' onClick={handleRegister}>
                            Editar Información 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Editar;