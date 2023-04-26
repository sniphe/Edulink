import React from "react";
import './style/cardContatto.css'

function Contatto(props){
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    function filtro2(STRINGA){
        let LungMax = 15
        if(STRINGA.length > LungMax){
            let shortenedString = STRINGA.substring(0, LungMax);
            let puntini = shortenedString+"..."
            return puntini
        }else{
            return STRINGA
        }
      }

    return(
        <button className="contatto">
            <div className="img-profilo">{props.cognomeContatto[0].toUpperCase()}</div>
            <div className="nome">{filtro2(capitalizeFirstLetter(props.cognomeContatto))}</div>
        </button>
    )
}

export default Contatto