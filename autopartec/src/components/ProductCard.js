import React, { useState,useEffect } from "react";
import './styles/componentStyles.css';
import IndividualCard from './IndividualCard.js';

function ProductCard (products) {
    const [articles, setArticles]=useState([]);
    useEffect(()=>{
        const arrayTemp=  Object.entries(products.articles);
        let array=[];
        arrayTemp.forEach(element => {
            array.push(element[1])
        });
        setArticles(array)
    }, [])
    return (
        <div className="ContainerFlex">
            {
                articles != []?
                    articles.map((article, key) => 
                    <IndividualCard
                            key={key}
                            id={article.id_articulo}
                            name={article.nombre} 
                            stock={article.stock} 
                            img={article.imagen}
                            precio={article.precio}
                            marca={article.marca}
                            modelo={article.modelo}
                        />
                    )
                :
                <div></div>
            } 
        </div>
    )
}

export default ProductCard;