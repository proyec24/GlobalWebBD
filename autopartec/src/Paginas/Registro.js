import React, {createElement, useEffect, useState} from 'react';
import {BrowserRouter as Router,  Routes as Switch, Route, useNavigate} from "react-router-dom";
import Header2 from "../components/Header2"
import './styles/pageStyles.css';
import Service from '../Service';

function Registro() {
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
        id_carrito:"",
        logeado:false
    });
    const [moreInfo, setMore] = useState ({
        estado:"",
        calle:"",
        no_exterior:"",
        colonia:"",
        cp:"",
        id_usuario:"",
    });
    let userTemp={
        correo :"",
        contrasena:"",
        id_tipo_usuario:"",
        id_usuario:"",
        nombres:"",
        apellido_paterno:"",
        apellido_materno:"",
        img:[],
        imgName:"",
        logeado:false
    };
    let moreTemp={
        estado:"",
        calle:"",
        no_exterior:"",
        colonia:"",
        cp:"",
    };
    const handleUser = event => {
        switch (event.target.name){
            case  "nombres":
                userTemp={
                    ...userTemp,
                    nombres:event.target.value
                }
                setUser({
                    ...user,
                    nombres:event.target.value
                })
                break;
            case  "apaterno":
                userTemp={
                    ...userTemp,
                    apellido_paterno:event.target.value
                }
                setUser({
                    ...user,
                    apellido_paterno:event.target.value
                })
                break;
            case  "amaterno":
                userTemp={
                    ...userTemp,
                    apellido_materno:event.target.value
                }
                setUser({
                    ...user,
                    apellido_materno:event.target.value
                })
                break;
            case  "correo":
                userTemp={
                    ...userTemp,
                    correo:event.target.value
                }
                setUser({
                    ...user,
                    correo:event.target.value
                })
                break;
            case  "pswd":
                userTemp={
                    ...userTemp,
                    contrasena:event.target.value
                }
                setUser({
                    ...user,
                    contrasena:event.target.value
                })
                break;
            case  "img":
                userTemp={
                    ...userTemp,
                    imgName:event.target.files[0].name,
                    img:Array.from(event.target.files)
                }
                setUser({
                    ...user,
                    imgName:event.target.files[0].name,
                    img:Array.from(event.target.files)
                })
                break;
                

        }
    };
    const handleMore = event => {
        switch (event.target.name){
            case  "calle":
                moreTemp={
                    ...moreTemp,
                    calle:event.target.value
                }
                setMore({
                    ...moreTemp,
                    calle:event.target.value
                })
                break;
            case  "noext":
                moreTemp={
                    ...moreTemp,
                    no_exterior:event.target.value
                }
                setMore({
                    ...moreInfo,
                    no_exterior:event.target.value
                })
                break;
            case  "colonia":
                moreTemp={
                    ...moreTemp,
                    colonia:event.target.value
                }
                setMore({
                    ...moreInfo,
                    colonia:event.target.value
                })
                break;
            case  "cp":
                moreTemp={
                    ...moreTemp,
                    cp:event.target.value
                }
                setMore({
                    ...moreInfo,
                    cp:event.target.value
                })
                break;
            case  "estado":
                moreTemp={
                    ...moreTemp,
                    estado:event.target.value
                }
                setMore({
                    ...moreInfo,
                    estado:event.target.value
                })
                break;
        }
    };
    let id_register=0;
    const handleRegister = event => {
        Service.postData("usuario/registro",user).then((data)=>{
            let registro = new FormData();
            registro.append("user",user.img[0]);
            moreTemp={
                ...moreInfo,
                id_usuario:data
            }
            console.log(registro)
            Service.postFormData("usuario/user_image",registro).then((data)=>{
            })
            Service.postData("usuario/register_more",moreTemp).then((data)=>{
            })
            Service.postData("usuario/create_carrito",moreTemp).then((data)=>{
                navigate("/login");
            })
        })
        
        
    };
    return (
        <div className='scroll'>
            <Header2/>
            <div className="register-box">
                <div>
                    <h2>Registro</h2>
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
                        <input type="text" onChange={handleMore} value={moreInfo.estado} name="estado" required  />
                        <label>Estado</label>
                        <div
                            id='alert1'
                            className="alert-danger"
                        >
                            
                        </div>
                    </div>
                    <div className="user-box">
                        <input type="text" onChange={handleMore} value={moreInfo.calle} name="calle" required  />
                        <label>Calle</label>
                        <div
                            id='alert1'
                            className="alert-danger"
                        >
                            
                        </div>
                    </div>
                    <div className="user-box">
                        <input type="text" onChange={handleMore} value={moreInfo.no_exterior} name="noext" required  />
                        <label>No.Exterior</label>
                        <div
                            id='alert1'
                            className="alert-danger"
                        >
                            
                        </div>
                    </div>
                    <div className="user-box">
                        <input type="text" onChange={handleMore} value={moreInfo.colonia} name="colonia" required  />
                        <label>Colonia</label>
                        <div
                            id='alert1'
                            className="alert-danger"
                        >
                            
                        </div>
                    </div>
                    <div className="user-box">
                        <input type="text" onChange={handleMore} value={moreInfo.cp} name="cp" required  />
                        <label>CP</label>
                        <div
                            id='alert1'
                            className="alert-danger"
                        >
                            
                        </div>
                    </div>
                    <div className='perfil-btn'>
                        <button className='btn third btnin' onClick={handleRegister}>
                            Registrarse 
                        </button>
                        <label htmlFor="img" className='btn third btnin lb'>Imagen</label>
                        <input className='file' type="file" onChange={handleUser} id="img" value={""} name="img" required />
                        <div
                            id='alert1'
                            className="alert-danger"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registro;