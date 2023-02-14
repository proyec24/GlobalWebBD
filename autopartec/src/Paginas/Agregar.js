import React, {createElement, useEffect, useState} from 'react';
import {BrowserRouter as Router,  Routes as Switch, Route, useNavigate} from "react-router-dom";
import Header2 from "../components/Header2"
import './styles/pageStyles.css';
import Service from '../Service';

function Agregar() {
    const [contrasena, setContrasena] = useState("");
    const navigate = useNavigate();
    const [articulo, setArticulo] = useState({
        modelo:"",
        marca:"",
        nombre:"",
        img:[],
        stock:0,
        precio:0,
        imgName:""
    });
    const handleArticulo = event => {
        switch (event.target.name){
            case  "nombre":
                setArticulo({
                    ...articulo,
                    nombre:event.target.value
                })
                break;
            case  "modelo":
                setArticulo({
                    ...articulo,
                    modelo:event.target.value
                })
                break;
            case  "marca":
                setArticulo({
                    ...articulo,
                    marca:event.target.value
                })
                break;
            case  "stock":
                setArticulo({
                    ...articulo,
                    stock:event.target.value
                })
                break;
            case  "precio":
                setArticulo({
                    ...articulo,
                    precio:event.target.value
                })
                break;
            case  "img":
                setArticulo({
                    ...articulo,
                    imgName:event.target.files[0].name,
                    img:Array.from(event.target.files)
                })
                break;
        }
    };
    let id_register=0;
    const handleAgregar = event => {
        Service.postData("articulos/agregarArticulos",articulo).then((data)=>{
            let registro = new FormData();
            registro.append("articulo",articulo.img[0]);
            Service.postFormData("articulos/agregarImg",registro).then((data)=>{
                navigate("/admin")
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
                        <input type="text" onChange={handleArticulo} value={articulo.modelo} name="modelo" required  />
                        <label>Modelo</label>
                        <div
                            id='alert1'
                            className="alert-danger"
                        >
                            
                        </div>
                    </div>
                    <div className="user-box">
                        <input type="text" onChange={handleArticulo} value={articulo.marca} name="marca" required  />
                        <label>Marca</label>
                        <div
                            id='alert1'
                            className="alert-danger"
                        >
                            
                        </div>
                    </div>
                    <div className="user-box">
                        <input type="text" onChange={handleArticulo} value={articulo.nombre} name="nombre" required  />
                        <label>Nombre</label>
                        <div
                            id='alert1'
                            className="alert-danger"
                        >
                            
                        </div>
                    </div>
                    <div className="user-box">
                        <input type="number" onChange={handleArticulo} defaultValue="0" min="0" name="stock" required  />
                        <label>Stock</label>
                        <div
                            id='alert1'
                            className="alert-danger"
                        >
                            
                        </div>
                    </div>
                    <div className="user-box">
                        <input type="number" onChange={handleArticulo} defaultValue="0" min="0" name="precio" required  />
                        <label>Precio</label>
                        <div
                            id='alert1'
                            className="alert-danger"
                        >
                            
                        </div>
                    </div>
                    <div className='perfil-btn'>
                        <button className='btn third ' onClick={handleAgregar}>
                            Agregar
                        </button>
                        <label htmlFor="img" className='btn third btnin lb'>Imagen</label>
                        <input className='file' type="file" onChange={handleArticulo} id="img" value={""} name="img" required />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Agregar;