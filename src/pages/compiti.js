import React from "react";
import CardCompito from './components/CompitiCardCompiti';
import CardVerifiche from "./components/VerificheCardCompiti";
import Home from "./home";
import { useHistory } from "react-router-dom";
import './style/compiti.css'

function Compiti(){
    let history = useHistory();
    function handleLogin() {
      history.push("/home");
      window.location.reload();
    }
    return(
        <div className="elementi-pagina compiti">
            <div className="titolo-compiti"><div><button className='pagina-home-da-compiti' onClick={handleLogin}>{"<"}</button></div>Compiti</div>
            <div className="compiti">
                <CardCompito testo={"sdfaj sdfkl sjadfsertherthertherthrsdvdsvsdvetherthertherthertha jdfklasjdjf slakd"} materia={"Storia"} giorno={"31/02/2023"}/>
                <CardCompito testo={"sd fajs dfkls jadfsajdfklasjdjfslakd"} materia={"Storia"} giorno={"31/02/2023"}/>
                <CardCompito testo={"sdf ajsdfk lsja dfsaj dfklasj djfslakd"} materia={"Storia"} giorno={"31/02/2023"}/>
                <CardCompito testo={"sdfaj sdfkls jadfsa jdfklasjdjfslakd"} materia={"Storia"} giorno={"31/02/2023"}/>
                <CardCompito testo={"sdf ajsd fklsjad fsajdfklas jdjfslakd"} materia={"Storia"} giorno={"31/02/2023"}/>
                <CardVerifiche testo={"sdf ajs dfkl sja dfsa jdfkl asjdjf sla kd"} materia={"Storia"} giorno={"31/02/2023"}/>
                <CardCompito testo={"sd faj sdfk lsjad fsa jdfk lasjd jfsl akd"} materia={"Storia"} giorno={"31/02/2023"}/>
            </div>
        </div>
    )
}

export default Compiti