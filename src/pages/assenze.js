import React from "react";
import { useHistory } from "react-router-dom";
import './style/assenze.css'
import CardPage from "./components/CardPage";

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
             <CardPage tipo="assenza" testo={"sdfajsdfklsjadfsajdfklasjdjfslakd"} tipoGiustifica={"ciao"} giorno={"31/02/2023"}/>
            </div>
        </div>
    )
}

export default Assenze