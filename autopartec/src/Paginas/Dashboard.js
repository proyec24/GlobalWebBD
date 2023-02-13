import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router,  Routes as Switch, Route} from "react-router-dom";
import Header from "../components/Header"
import './styles/pageStyles.css';
import Service from '../Service';

function Dashboard() {
    const [search, setSearch] = useState("");
    const [articles, setArticles] = useState([]);
    const getSearch = (value) => {
        setSearch(value)
    }
    useEffect(()=>{
        Service.getData("articulos/getFArticulos").then((data)=>{
            setArticles(data);
        });
    },[search]);
    useEffect(()=>{
        Service.getData("articulos/getArticulos").then((data)=>{
            setArticles(data);
        });
    }, [])
    return (
        <div className='dashboard'>
            <Header getSearch={getSearch}/>
            <p>{search}</p>
            <div>
                {articles.map(todo => 
                    <div key={todo.id_articulo}>{todo.nombre}</div>)}
            </div>
        </div>
    );
}

export default Dashboard;