import React from "react";
import { useHistory } from "react-router-dom";
import './style/note.css'
import CardPage from "./components/CardPage";

function Note(){
    let history = useHistory();
    function toHome() {
      history.push("/home");
      window.location.reload();
    }
    return(
        <div>
        <div className="titolo-note"><div><button className='pagina-home-da-note' onClick={toHome}>{"<"}</button></div>Note</div>
        <div className="note">
            <CardPage tipo="nota" testo={"sdfaj sdfkl sjadfsa jdfklasjdjf slakd"} prof={"Storia"} giorno={"31/02/2023"}/>
            <CardPage tipo="nota" testo={"sd fajs dfkls jadfsajdfklasjdjfslakd"} prof={"Storia"} giorno={"31/02/2023"}/>
            <CardPage tipo="nota" testo={"sdf ajsdfk lsja dfsaj dfklasj djfslakd"} prof={"Storia"} giorno={"31/02/2023"}/>
            <CardPage tipo="nota" testo={"sdfaj sdfkls jadfsa jdfklasjdjfslakd"} prof={"Storia"} giorno={"31/02/2023"}/>
            <CardPage tipo="nota" testo={"sdf ajsd fklsjad fsajdfklas jdjfslakd"} prof={"Storia"} giorno={"31/02/2023"}/>
            <CardPage tipo="nota" testo={"sdf ajs dfkl sja dfsa jdfkl asjdjf sla kd"} prof={"Storia"} giorno={"31/02/2023"}/>
            <CardPage tipo="nota" testo={"sd faj sdfk lsjad fsa jdfk lasjd jfsl akd"} prof={"Storia"} giorno={"31/02/2023"}/>
        </div>

    </div>
    )
}

export default Note