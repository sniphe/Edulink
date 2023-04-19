import React from "react";
import './style/avvisi.css'
import { useHistory } from "react-router-dom";
import CardAvvisoAvvisi from "./components/AvvisiCardAvvisi";

let Avvisi = () =>{
    let history = useHistory();

    function handleLogin() {
      history.push("/home");
      window.location.reload();
    }
    return(
        <div>
            <div className="titolo-avvisi"><div><button className='pagina-home-da-avvisi' onClick={handleLogin}>{"<"}</button></div>Avvisi</div>
            <div className="avvisi">
                <CardAvvisoAvvisi testo={"sdfaj sdfkl sjadfsa jdfklasjdjf slakd"} titolo={"Storia"} giorno={"31/02/2023"}/>
                <CardAvvisoAvvisi testo={"sd fajs dfkls jadfsajdfklasjdjfslakd"} titolo={"Storia"} giorno={"31/02/2023"}/>
                <CardAvvisoAvvisi testo={"sdf ajsdfk lsja dfsaj dfklasj djfslakd"} titolo={"Storia"} giorno={"31/02/2023"}/>
                <CardAvvisoAvvisi testo={"sdfaj sdfkls jadfsa jdfklasjdjfslakd"} titolo={"Storia"} giorno={"31/02/2023"}/>
                <CardAvvisoAvvisi testo={"sdf ajsd fklsjad fsajdfklas jdjfslakd"} titolo={"Storia"} giorno={"31/02/2023"}/>
                <CardAvvisoAvvisi testo={"sdf ajs dfkl sja dfsa jdfkl asjdjf sla kd"} titolo={"Storia"} giorno={"31/02/2023"}/>
                <CardAvvisoAvvisi testo={"sd faj sdfk lsjad fsa jdfk lasjd jfsl akd"} titolo={"Storia"} giorno={"31/02/2023"}/>
            </div>

        </div>
    )
}

export default Avvisi