import React from "react";
import './style/AssenzeCardHome.css';

function AssenzeCardHome(props){
    return (
        <div className="cardAssenza">
            <div className="text-box-Assenza">
                <div className="giorno-Assenza-home">Data: {props.giorno}</div>
                <div className="tipo-Assenza-home">{props.tipo}:</div>
                <button className="bottone-giustificaAssenza-home">Giustifica</button>
            </div>
        </div>
    )
}

export default AssenzeCardHome;