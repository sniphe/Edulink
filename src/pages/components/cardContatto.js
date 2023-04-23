import React from "react";
import './style/cardContatto.css'

function Contatto(props){
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return(
        <button className="contatto">
            <div className="img-profilo">{props.cognomeContatto[0].toUpperCase()}</div>
            <div className="nome">{capitalizeFirstLetter(props.cognomeContatto)}</div>
        </button>
    )
}

export default Contatto