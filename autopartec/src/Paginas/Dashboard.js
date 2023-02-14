import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router,  Routes as Switch, Route} from "react-router-dom";
import Header from "../components/Header"
import './styles/pageStyles.css';
import Service from '../Service';
import ProductCard from '../components/ProductCard';
function Dashboard() {
    const [search, setSearch] = useState("");
    const [articles, setArticles] = useState([]);
    const [render, SetRender] = useState(false);
    const getSearch = (value) => {
        setSearch(value)
    }
    useEffect(()=>{async function searching(){
            if(search!=""){
                await Service.getData("articulos/getArticulo").then((data)=>{
                    setArticles(data);
                    SetRender(true);
                });
            }
        }
        searching();
    },[search]);
    useEffect(()=>{async function getData(){
            await Service.getData("articulos/getArticulos").then((data)=>{
                setArticles(data);
                SetRender(true);
            });
        }
        getData();
    }, [])
    return (
        <div className='dashboard'>
            <Header getSearch={getSearch}/>
            {render?
                <ProductCard articles={articles}/>
            :
                <p></p>
            }
        </div>
    );
}

export default Dashboard;