import React from "react";
import './style/AvvisiCardAvvisi.css';

function CardAvvisoAvvisi(props){
    return (
        <div className="cardAvvisoAvvisi">
            <div className="text-box-cardavvisiavvisi">
                <div className="giorno-avvisiavvisi">Data: {props.giorno}</div>
                <div className="titolo-avvisiavvisi">{props.titolo}:</div>
                <div className="testo-avvisiavvisi">{props.testo}</div>
            </div>
        </div>
    )
}

export default CardAvvisoAvvisi;