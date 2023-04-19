import React from 'react';
import './style/home.css';
import CardCompito from './components/CompitiCardHome';
import CardAvviso from './components/AvvisiCardHome';
import Carousel from './components/Carousel'
import { useHistory } from "react-router-dom";
import Compiti from './compiti';
import CardVerifica from './components/VerificheCardHome';
import AssenzeCardHome from './components/AssenzeCardHome';

const Home = () => {

  let collegamento1 = useHistory();
  function toCompiti() {
    collegamento1.push("/compiti");
    window.location.reload();
  }

  let collegamento2 = useHistory();
  function toAvvisi() {
    collegamento2.push('/avvisi')
    window.location.reload();
  }

  let collegamento3 = useHistory();
  function toAvvisi() {
    collegamento3.push('/assenze')
    window.location.reload();
  }

  return (
    <div className="home">
      <div className="title-page">Home</div>
      <Media />
      <div className="ultimivoti">
        <div className='containervoti'>
          <Pallini />
        </div>
      </div>
      <div className="CompScadenza">
        <div className="titolo-scadenze">Compiti assegnati:</div>
        <button className='pagina-compiti' onClick={toCompiti}>{">"}</button>
      </div>
      <div className='Carosel'>
        <Carousel>
          <CardCompito testo={filtro("sdfajsdfklsjadfsajdfklasjdjfslakd")} materia={"Storia"} giorno={"31/02/2023"}/>
          <CardVerifica testo={filtro("sdfajsdfklsjadfsajdfklasjdjfslakd")} materia={"Informatica"} giorno={"31/02/2023"}/>
          <CardCompito testo={filtro("sdfajsdfklsjadfsajdfklasjdjfslakd")} materia={"Suca"} giorno={"31/02/2023"}/>
          <CardVerifica testo={"Mockingbird"} materia={"Eminem"} giorno={"31/02/2023"}/>
        </Carousel>
      </div>
      <div className='Avvisi'>
        <div className="titolo-scadenze">Avvisi:</div>
        <button className='pagina-compiti' onClick={toAvvisi}>{">"}</button>
      </div>
      <div className='Carosel2'>
        <Carousel>
          <CardAvviso testo={filtro("sdfajsdfklsjadfsajdfklasjdjfslakd")} titolo={"Storia"} giorno={"31/02/2023"}/>
          <CardAvviso testo={filtro("sdfajsdfklsjadfsajdfklasjdjfslakd")} titolo={"Informatica"} giorno={"31/02/2023"}/>
          <CardAvviso testo={filtro("sdfajsdfklsjadfsajdfklasjdjfslakd")} titolo={"Suca"} giorno={"31/02/2023"}/>
          <CardAvviso testo={filtro("Mockingbird")} titolo={"Eminem"} giorno={"31/02/2023"}/>
        </Carousel>
      </div>
      <div className='Assenze'>
        <div className="titolo-scadenze">Assenze & Ritardi</div>
        <button className='pagina-compiti' onClick={toAvvisi}>{">"}</button>
      </div>
      <div className='Carosel3'>
        <Carousel>
          <AssenzeCardHome tipo={"Ritardo"} giorno={"31/02/2023"}/>
          <AssenzeCardHome tipo={"Assenza"} giorno={"35/02/2023"}/>
          <AssenzeCardHome tipo={"Assenza"} giorno={"341/02/2023"}/>
          <AssenzeCardHome tipo={"Great Eminem"} giorno={"1/1/2021"}/>
        </Carousel>
      </div>
    </div>
  );
};

let voti = [7,9,10,6];

let Media = () =>{
  let sum = voti.reduce((a, b) => a + b, 0);
  let avg = (sum / voti.length).toFixed(1);
  if(avg > 6){
    return <div className="media-sufficiente">{avg}</div>;
  }else if(avg < 6 && avg >= 5){
    return <div className="media-insufficiente">{avg}</div>;
  }else if(avg <= 4.9){
    return <div className="media-molto-insufficiente">{avg}</div>;
  }else if(avg === 6){
    return <div className="media">{avg}</div>;
  }
}

let Pallini = () => {
  let vot = [];
  for (let i = 0; i < voti.length; i++) {
    if (voti[i] >= 6) {
      vot.push(<div className="votosufficiente">{voti[i]}</div>);
    } else if (voti[i] < 6) {
      vot.push(<div className="votoinsufficinte">{voti[i]}</div>);
    }
  }
  return vot;
};

function filtro(STRINGA){
  let LungMax = 22
  let shortenedString = STRINGA.substring(0, LungMax);
  let puntini = shortenedString+"..."
  return(
    puntini
  )
}
export default Home;