import "./style/voto.css";
import React from "react";

export default function Voto(props){
    const colore = ()=>{
        if(props.voto < 6 && props.voto >= 5){
            return "pallino1"
        }else if(props.voto >= 6){
            return "pallino"
        }else{
            return "pallino2"
        }
    }
    return(
        <div className="containerVoto">
            <div className={colore()}>{props.voto}</div>
            <div className="contenitoreCardVoti">
                <div className="materiaVoto">{props.materiaVoto}</div>
                <div className="professore">Prof: {props.profDiRiferimento}</div>
                <div className="data">Data: {props.giornoValutazione}</div>
            </div>
        </div>
    )
}