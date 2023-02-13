import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router,  Routes as Switch, Route, Navigate, useNavigate} from "react-router-dom";
import Header2 from "../components/Header2"
import './styles/pageStyles.css';
import Service from '../Service';

function Perfil() {
    const navigate = useNavigate();
    const [logged, setLogged] = useState ({
        correo :"",
        contrasena:"",
        id_tipo_usuario:"",
        id_usuario:"",
        logeado:false,
        nombres:"",
        apellido_paterno:"",
        apellido_materno:"",
        img:""
    });
    const [moreInfo, setMore] = useState ({
        estado:"",
        calle:"",
        no_exterior:"",
        colonia:"",
        cp:"",
    });
    const [tipo_usuario,setTipo]=useState("");
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
            if(user.id_tipo_usuario=="1"){
                setTipo("Administrador");
            }
            if(user.id_tipo_usuario=="2"){
                setTipo("Cliente");
            }
            Service.postData("usuario/getInfo", {id:user.id_usuario}).then((data)=>{
                const res = {
                    estado:data.estado,
                    calle:data.calle,
                    no_exterior:data.no_exterior,
                    colonia:data.colonia,
                    cp:data.cp,
                }
                setMore(res);
                localStorage.setItem("more",JSON.stringify(res));
            });
        }
    },[]);
    const handleLogOut = event => {
        sessionStorage.clear();
        navigate("/");
    };
    return (
        <div className='dashboard'>
            <Header2/>
            <div className="container">
                <div className="row">
                    <div className="cardPerfil">
                        <div className='name'>
                            <h1>{logged.nombres+" "+logged.apellido_paterno+" "+logged.apellido_materno}</h1>
                        </div>
                        <div className='description'>
                            <img  src={logged.img}/>
                            <div className='info'>
                                <p>Tipo de usuario: {tipo_usuario}</p>
                                <p>Correo: {logged.correo}</p>
                                <p>Estado: {moreInfo.estado}</p>
                                <p>Calle: {moreInfo.calle}</p>
                                <p>No. Exterior: {moreInfo.no_exterior}</p>
                                <p>Colonia: {moreInfo.colonia}</p>
                                <p>CP: {moreInfo.cp}</p>
                            </div>
                        </div>
                        <div className='perfil-btn'>
                            <button onClick={()=>{navigate("/editar")}} className="btn third">Editar</button>
                            <button onClick={handleLogOut} className="btn third">CerrarSesion</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Perfil;