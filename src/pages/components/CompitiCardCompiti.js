import React from "react";
import './style/CompitiCardCompiti.css';

function CardCompito(props){
    return (
        <div className="cardCompitoCompiti">
            <div className="text-box-cardcompiticompiti">
                <div className="giorno-compitocompito">Data: {props.giorno}</div>
                <div className="materia-compitocompito">{props.materia}:</div>
                <div className="testo-compitocompito">{props.testo}</div>
            </div>
        </div>
    )
}

export default CardCompito;