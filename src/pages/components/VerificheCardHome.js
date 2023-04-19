import React from "react";
import './style/VerificheCardHome.css';

function CardAvviso(props){
    return (
        <div className="cardTest">
            <div className="text-box-cardAvviso">
                <div className="giorno-test">Data: {props.giorno}</div>
                <div className="materia-test">{props.materia}:</div>
                <div className="testo-test">{props.testo}</div>
            </div>
        </div>
    )
}

export default CardAvviso;