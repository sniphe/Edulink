import React from "react";
import './style/AssenzeCardAssenze.css';

function CardAssenzaAssenze(props){
    return (
        <div className="cardAssenzaAssenze">
            <div className="text-box-cardavvisiavvisi">
                <div className="giorno-avvisiavvisi">Data: {props.giorno}</div>
                <div className="titolo-avvisiavvisi">{props.tipo}:</div>
                <button className="testo-avvisiavvisi">Giustifica</button>
            </div>
        </div>
    )
}

export default CardAssenzaAssenze;