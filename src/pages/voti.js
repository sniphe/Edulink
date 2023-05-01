import React from "react";
import { useHistory } from "react-router-dom";
import './style/voti.css';

function Voti(){
    let history = useHistory();
    function toHome() {
      history.push("/home");
      window.location.reload();
    }
    return(
        <div className="voti-main">
            <div className="titolo-assenze"><div><button className='pagina-home-da-assenze' onClick={toHome}>{"<"}</button></div>Voti</div>
            <div className="materia">

            </div>
        </div>
    )
}

export default Voti