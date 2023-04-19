import React from "react";
import './style/VerificheCardCompiti.css'

function CardVerifiche(props){
    return (
        <div className="cardVerifica">
            <div className="text-box-cardverifica">
                <div className="giorno-verifica">Data: {props.giorno}</div>
                <div className="materia-verifica">{props.materia}:</div>
                <div className="testo-verifica">{props.testo}</div>
            </div>
        </div>
    )
}

export default CardVerifiche