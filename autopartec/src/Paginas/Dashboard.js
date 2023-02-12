import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router,  Routes as Switch, Route} from "react-router-dom";
import Header from "../components/Header"
import './styles/pageStyles.css';
import Service from '../Service';

function Dashboard() {
    const [search, setSearch] = useState([]);
    const [articles, setArticles] = useState
    const getSearch = (value) => {
        setSearch(value)
    }
    useEffect(()=>{
        Service.getData("getArticulos").then((data)=>{
            setArticles(data);
        });
    },[search]);
    return (
        <div>
            <Header getSearch={getSearch}/>
            <p>{search}</p>
        </div>
    );
}

export default Dashboard;