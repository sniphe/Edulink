import React from "react";
import { useHistory } from "react-router-dom";
import Contatto from "./components/cardContatto";
import './style/chatProfessori.css';

function ChatProfessori(){
    
    let history = useHistory();
    function toHome() {
        history.push("/home");
        window.location.reload();
    }
    let contati = ["Martin Garrix", "Alan Wlaker", "Timmy Trumpet", "DjsFromMars", "Favij", "GiampieroMasticanatiDonDeLaVega"]

    let Ncontatti = () => {
      let cont = [];
      for (let i = 0; i < contati.length; i++) {
          cont.push(<Contatto cognomeContatto={contati[i]}/>);
      }
      return cont;
    };
    return(
        <div className="chatProfessori-main">
            <div className="contenitore-titlo-chatProfessori">
                <button className="da-chatProfessori-a-Home" onClick={toHome}>{"<"}</button>
                <div className="titolo-chatProfessori">ProfChat</div>
            </div>
            <div className="contatti-profs">
                <Ncontatti/>
            </div>
        </div>
    )
}

export default ChatProfessori;