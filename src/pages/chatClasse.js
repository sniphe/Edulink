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

  function filtro2(STRINGA){
    let LungMax = 10
    let shortenedString = STRINGA.substring(0, LungMax);
    let puntini = shortenedString+"..."
    return(
      puntini
    )
  }

  let contati = ["Alessio", "pippo", "superman", "gianluca", "Ronaldo"]

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