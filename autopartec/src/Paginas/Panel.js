import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router,  Routes as Switch, Route, useNavigate} from "react-router-dom";
import Header2 from "../components/Header2"
import './styles/pageStyles.css';
import Service from '../Service';
import ProductCard from '../components/ProductCard';
function Panel() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [articles, setArticles] = useState([]);
    const [editar, SetEditar] = useState(0);
    const [eliminar, SetEliminar] = useState(0);
    const [users, setUsers] = useState([]);
    const [pedidos, setPedidos] = useState([]);
    const [view, setView] = useState(3);
    const getSearch = (value) => {
        setSearch(value)
    }
    useEffect(()=>{async function getData(){
        if(eliminar!=0){
            await Service.getData("articulos/eliminarArticulo").then((data)=>{
                setArticles(data);
            });
        }
    }
        getData();
    }, [eliminar])
    useEffect(()=>{async function getData(){
        await Service.getData("articulos/getArticulos").then((data)=>{
            setArticles(data);
        });
    }
        getData();
    }, [editar])
    useEffect(()=>{async function getData(){
            await Service.getData("articulos/getArticulos").then((data)=>{
                setArticles(data);
            });
        }
        getData();
    }, [])
    useEffect(()=>{
        if(view==1){
            handleUserView();
        }else if(view == 3){
            handleSellView();
        }
    }, [view])
    const handleUserView = event => {
        Service.getData("usuario/getUsers").then((data)=>{
            setUsers(data);
        });
    };
    const handleSellView = event => {
        Service.getData("articulos/getSells").then((data)=>{
            setPedidos(data);
        });
    };
    return (
        <div className='dashboard3'>
            <Header2 />
            <div className='buttonPanel'>
                <button className="btn third"onClick={()=>navigate("/agregar")}>Añadir Productos</button>
                <button className="btn third" onClick={()=>setView(1)}>Ver Usuarios</button>
                <button className="btn third" onClick={()=>setView(2)}>Ver Pedidos</button>
                <button className="btn third" onClick={()=>setView(3)}>Ver Articulos</button>
            </div>
            <div className='table-container'>
                {
                    view==1?
                    <table>
                        <thead>
                            <tr>
                                <th>Id usuario</th>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Calle</th>
                                <th>Colonia</th>
                                <th>Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((article, key) => 
                                    <tr>
                                        <td>{article.id_usuario}</td>
                                        <td>{article.nombres}</td>
                                        <td>{article.correo}</td>
                                        <td>{article.calle}</td>
                                        <td>{article.colonia}</td>
                                        <th>{article.estado}</th>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    : view==2?
                    <table>
                        <thead>
                            <tr>
                                <th>Id pedido</th>
                                <th>Usuario</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Fecha</th>
                                <th>Estatus</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pedidos.map((article, key) => 
                                    <tr>
                                        <td>{article.id_pedido}</td>
                                        <td>{article.nombres}</td>
                                        <td>{article.cantidad_articulos}</td>
                                        <td>{article.precio_total}</td>
                                        <td>{article.fecha_pedido}</td>
                                        <td>{article.estatus}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    :
                    <table>
                        <thead>
                            <tr>
                                <th>Id producto</th>
                                <th>Nombre</th>
                                <th>Modelo</th>
                                <th>Marca</th>
                                <th>Precio</th>
                                <th>Stock</th>
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
                                        <td>{article.stock}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                }
            </div>
        </div>
    );
}

export default Panel;