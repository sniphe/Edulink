import React from "react";
import './style/CompitiCardHome.css';

function CardCompito(props){
    return (
        <div className="cardCompito">
            <div className="text-box-cardcompiti">
                <div className="giorno-compito">Data: {props.giorno}</div>
                <div className="materia-compito">{props.materia}:</div>
                <div className="testo-compito">{props.testo}</div>
            </div>
        </div>
    )
}

export default CardCompito;