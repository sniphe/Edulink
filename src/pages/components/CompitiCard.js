import React from "react";
import './style/CompitiCard.css';

function CardCompito(props){
    return (
        <div className="cardCompito">
            <div className="giorno">Data: {props.giorno}</div>
            <div className="materia">{props.materia}:</div>
            <div className="testo">{props.testo}</div>
        </div>
    )
}

export default CardCompito;