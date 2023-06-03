import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style/voti.css";
import Voto from "./components/voto";

function Materia(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="contenitoremateria">
      <div className="materia" onClick={toggleDropdown}>
        <div className="materia1">{props.materia}</div>
        <div className="professori2">{props.professori}</div>
        <div className="mediamateria">{props.mediamateria}</div>
      </div>
      {isOpen && insiemevoti()}
    </div>
  );
}

let voti = [7.5, 8.5, 10, 6];

function insiemevoti() {
  return voti.map((voto) => (
    <Voto
      materiaVoto="Informatica"
      profDiRiferimento="Zoppi"
      giornoValutazione="30/80/2023"
      voto={voto}
      key={voto}
    />
  ));
}

function VotiACaso() {
  const history = useHistory();

  function toHome() {
    history.push("/home");
    window.location.reload();
  }

  return (
    <div className="voti-main">
      <div className="titolo-avvisi">
        <div>
          <button className="pagina-home-da-avvisi" onClick={toHome}>
            {"<"}
          </button>
        </div>
        Voti
      </div>
      <div className="materia-voti">
        <Materia className="materiaPagina" materia="Informatica" professori="Lorenzo Zoppi" mediamateria={10} />
        <br />
        <Materia className="materiaPagina" materia="Storia" professori="Anna Iachi" mediamateria={9} />
        <br />
        <Materia className="materiaPagina" materia="Chimica" professori="Elisa Fassone" mediamateria={6} />
        <br />
        <Materia className="materiaPagina" materia="Geografia" professori="Rolando Perino" mediamateria={7.7} />
        <br />
        <Materia className="materiaPagina" materia="Edu.fisica" professori="Silvia Garrone" mediamateria={8.5} />
      </div>
    </div>
  );
}

export default VotiACaso;
