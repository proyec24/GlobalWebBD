import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router,  Routes as Switch, Route, useNavigate} from "react-router-dom";
import Header2 from "../components/Header2"
import './styles/pageStyles.css';
import Service from '../Service';
import ProductCard from '../components/ProductCard';
function Compras() {
    const navigate = useNavigate();
    const [articles, setArticles] = useState([]);
    const [total, setTotal] = useState(0);
    const [idusuario, setID] = useState(0);
    const [correo, setCorreo] = useState("");
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
    let id_usuario= "";
    useEffect(() => {
        if(sessionStorage.getItem("user")){
            let user = JSON.parse(sessionStorage.getItem("user"));
            id_usuario = user.id_usuario;
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
            setID(user.id_usuario);
            setCorreo(user.correo);
            Service.postData("articulos/getCarrito",{"idusuario":user.id_usuario}).then((data)=>{
                Service.postData("articulos/getTotal",{"idusuario":user.id_usuario}).then((data)=>{
                    setTotal(data);
                });
                setArticles(data);
            });
            
        }
    },[]);
    
    const handleCompra = event => {
        Service.postData("articulos/create-compra",{articles,total,idusuario,correo}).then((data)=>{
            navigate("/gracias");
        });
    };
    return (
        <div className='dashboard3'>
            <Header2 />
            <div className='table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Id producto</th>
                            <th>Nombre</th>
                            <th>Modelo</th>
                            <th>Marca</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            articles.map((article, key) => 
                                <tr>
                                    <td>{article.id_articulo}</td>
                                    <td>{article.nombre}</td>
                                    <td>{article.modelo}</td>
                                    <td>{article.marca}</td>
                                    <td>{article.precio}</td>
                                    <td>{article.cantidad_articulos}</td>
                                    <td>{article.cantidad_articulos}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <p>TOTAL : {total}</p>
            <button className="btn third" onClick={handleCompra}>Comprar</button>
        </div>
    );
}

export default Compras;