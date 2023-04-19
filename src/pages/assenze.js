import React from "react";
import { useHistory } from "react-router-dom";
import './style/assenze.css'
import CardAssenzaAssenze from "./components/AssenzeCardAssenze";

function Assenze(){
    let history = useHistory();
    function handleLogin() {
      history.push("/home");
      window.location.reload();
    }
    return(
        <div>
            <div className="titolo-assenze"><div><button className='pagina-home-da-assenze' onClick={handleLogin}>{"<"}</button></div>Assenze</div>
            <div className="assenze">
             <CardAssenzaAssenze testo={"sdfajsdfklsjadfsajdfklasjdjfslakd"} tipo={"ciao"} giorno={"31/02/2023"}/>
            </div>
        </div>
    )
}

export default Assenze