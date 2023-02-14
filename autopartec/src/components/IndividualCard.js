import React, { useState, useEffect } from "react";
import './styles/componentStyles.css';
import Service from "../Service";
function IndividualCard ({ key,id ,name, stock, img,precio, modelo, marca }){
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
    })
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
    const [cantidad, setCantidad] = useState(0);
    const handleAddCarrito = event => {
        let carrito={
            id_usuario:logged.id_usuario,
            id_articulo:id,
            cantidad_articulos:cantidad,
            total_articulo:cantidad*precio
        };
        Service.postData("articulo/articulo_carrito",carrito).then((data)=>{
        })
    };
    const handleCantidad = event => {
        setCantidad(cantidad+1);
        
    };
    return (
        <div className="CardContainer">
            <div className="CardImg">
            <img className="FixImg" src={img}/>
            </div>
            <div className="CardInfo">
                <p id="info"> <b>{name}</b></p>
                <p id="info"><b>Disponibles: </b> {stock}</p>
                <p id="info"><b>Marca: </b >{marca} <b>Modelo:</b> {modelo}</p>
                <p id="info"><b>Precio: </b> {precio}</p>
            </div>
            {
            logged.logeado?
                <div className="CardInput">
                    <input type="number"  max={stock} onChange={handleCantidad} value={cantidad} min="0" ></input>
                    <button onClick={handleAddCarrito}> Agregar</button>
                </div>
            :
                <p></p>
            }
        </div>
    );
}

export default IndividualCard;