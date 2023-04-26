import React from "react";
import './style/chatClasse.css'
import Contatto from "./components/cardContatto";
import { useHistory } from "react-router-dom";

function ChatClasse() {
  let history = useHistory();

  function toHome() {
    history.push("/home");
    window.location.reload();
  }

  let contati = ["sdfkjsdfkjsadklf"]

  let Ncontatti = () => {
    let cont = [];
    for (let i = 0; i < contati.length; i++) {
        cont.push(<Contatto cognomeContatto={contati[i]}/>);
    }
    return cont;
  };

  return (
    <div className="chatClasse-main">
      <div className="contenitore-titlo-chatClasse">
        <button className="da-chatClasse-a-Home" onClick={toHome}>{"<"}</button>
        <div className="titolo-chatClasse">ClassChat</div>
      </div>
      <div className="contatti">
        <Ncontatti />
      </div>
    </div>
  );
}

export default ChatClasse;