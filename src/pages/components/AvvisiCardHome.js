import React from "react";
import './style/AvvisiCardHome.css';

function CardAvviso(props){
    return (
        <div className="cardAvviso">
            <div className="text-box-cardAvviso">
                <div className="giorno-avviso">Data: {props.giorno}</div>
                <div className="titolo-avviso">{props.titolo}:</div>
                <div className="testo-avviso">{props.testo}</div>
            </div>
        </div>
    )
}

export default CardAvviso;