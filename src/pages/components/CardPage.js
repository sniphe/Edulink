import React from "react";
import './style/CompitiCardCompiti.css';
import './style/VerificheCardCompiti.css';
import './style/AssenzeCardAssenze.css';
import './style/NotaCardNota.css';
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
            <div className="cardVerifiche">
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
                <div className="text-box-avvisi">
                    <div className="giorno-avviso">Data: {props.giorno}</div>
                    <div className="titolo-avviso">{props.titolo}:</div>
                    <div className="testo-avviso">{props.testo}</div>
                </div>
            </div>
        )
    }else if(props.tipo == "assenza"){
        return (
            <div className="cardAssenzaAssenze">
                <div className="text-box-cardavvisiavvisi">
                    <div className="giorno-avvisiavvisi">Data: {props.giorno}</div>
                    <div className="titolo-avvisiavvisi">{props.tipoGiustifica}:</div>
                    <button className="testo-avvisiavvisi">Giustifica</button>
                </div>
            </div>
        )
    }else if(props.tipo == "nota"){
        return(
            <div className="cardNota">
                <div className="text-box-Nota">
                    <div className="giorno-Nota">Data: {props.giorno}</div>
                    <div className="prof-Nota">{props.prof}:</div>
                    <div className="testo-Nota">{props.testo}</div>
                </div>
            </div>
        )
    }
}

export default CardPage