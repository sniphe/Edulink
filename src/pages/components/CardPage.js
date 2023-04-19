import React from "react";
import './style/CompitiCardCompiti.css';
import './style/VerificheCardCompiti.css';
import './style/AssenzeCardAssenze.css';
import './style/AvvisiCardAvvisi.css';

function CardPage(props){
    if(props.tipo == "compiti"){
        return (
            <div className="cardCompitoCompiti">
                <div className="text-box-cardcompiticompiti">
                    <div className="giorno-compitocompito">Data: {props.giorno}</div>
                    <div className="materia-compitocompito">{props.materia}:</div>
                    <div className="testo-compitocompito">{props.testo}</div>
                </div>
            </div>
        )
    }else if(props.tipo == "verifiche"){
        return (
            <div className="cardVerifica">
                <div className="text-box-cardverifica">
                    <div className="giorno-verifica">Data: {props.giorno}</div>
                    <div className="materia-verifica">{props.materia}:</div>
                    <div className="testo-verifica">{props.testo}</div>
                </div>
            </div>
        )
    }else if(props.tipo == "avvisi"){
        return (
            <div className="cardAvvisoAvvisi">
                <div className="text-box-cardavvisiavvisi">
                    <div className="giorno-avvisiavvisi">Data: {props.giorno}</div>
                    <div className="titolo-avvisiavvisi">{props.titolo}:</div>
                    <div className="testo-avvisiavvisi">{props.testo}</div>
                </div>
            </div>
        )
    }else if(props.tipo == "assenza"){
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
}

export default CardPage