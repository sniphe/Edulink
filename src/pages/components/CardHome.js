import React from "react";
import './style/CompitiCardHome.css';
import './style/VerificheCardHome.css';
import './style/AvvisiCardHome.css';
import './style/AssenzeCardHome.css';
import './style/NotaCardHome.css'

function CardHome(props){
    if(props.tipo == "compito"){
        return (
            <div className="cardCompito">
                <div className="text-box-cardcompiti">
                    <div className="giorno-compito">Data: {props.giorno}</div>
                    <div className="materia-compito">{props.materia}:</div>
                    <div className="testo-compito">{props.testo}</div>
                </div>
            </div>
        )
    }else if(props.tipo == "verifica"){
        return (
            <div className="cardTest">
                <div className="text-box-cardAvviso">
                    <div className="giorno-test">Data: {props.giorno}</div>
                    <div className="materia-test">{props.materia}:</div>
                    <div className="testo-test">{props.testo}</div>
                </div>
            </div>
        )
    }else if(props.tipo == "avviso"){
        return (
            <div className="cardAvviso">
                <div className="text-box-cardAvviso">
                    <div className="giorno-avviso">Data: {props.giorno}</div>
                    <div className="titolo-avviso">{props.titolo}:</div>
                    <div className="testo-avviso">{props.testo}</div>
                </div>
            </div>
        )
    }else if(props.tipo == "assenze"){
        return (
            <div className="cardAssenza">
                <div className="text-box-Assenza">
                    <div className="giorno-Assenza-home">Data: {props.giorno}</div>
                    <div className="tipo-Assenza-home">{props.tipoGiustifica}:</div>
                    <button className="bottone-giustificaAssenza-home">Giustifica</button>
                </div>
            </div>
        )
    }else if(props.tipo == "note"){
        return(
            <div className="cardNote">
                <div className="text-box-cardNote">
                    <div className="giorno-Note">Data: {props.giorno}</div>
                    <div className="prof-Note">{props.prof}:</div>
                    <div className="testo-Note">{props.testo}</div>
                </div>
            </div>
        )
    }
}

export default CardHome