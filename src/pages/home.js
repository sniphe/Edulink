import React from 'react';
import './style/home.css';
import Carousel from './components/Carousel'
import { useHistory } from "react-router-dom";
import CardHome from './components/CardHome';

const Home = () => {

  let collegamento1 = useHistory();
  function toCompiti() {
    collegamento1.push("/compiti");
    window.location.reload();
  }

  function toAvvisi() {
    collegamento1.push('/avvisi')
    window.location.reload();
  }
  
  function toRitardi() {
    collegamento1.push('/assenze')
    window.location.reload();
  }

  function toNote() {
    collegamento1.push('/note')
    window.location.reload();
  }

  function toLogin(){
    collegamento1.push('/')
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
          <CardHome tipo="compito" testo={filtro("sdfajsdfklsjadfsajdfklasjdjfslakd")} materia={"Storia"} giorno={"31/02/2023"}/>
          <CardHome tipo="verifica" testo={filtro("sdfajsdfklsjadfsajdfklasjdjfslakd")} materia={"Informatica"} giorno={"31/02/2023"}/>
          <CardHome tipo="compito" testo={filtro("sdfajsdfklsjadfsajdfklasjdjfslakd")} materia={"Suca"} giorno={"31/02/2023"}/>
          <CardHome tipo="verifica" testo={"Mockingbird"} materia={"Eminem"} giorno={"31/02/2023"}/>
        </Carousel>
      </div>
      <div className='Avvisi'>
        <div className="titolo-scadenze">Avvisi:</div>
        <button className='pagina-compiti' onClick={toAvvisi}>{">"}</button>
      </div>
      <div className='Carosel2'>
        <Carousel>
          <CardHome tipo="avviso" testo={filtro("sdfajsdfklsjadfsajdfklasjdjfslakd")} titolo={"Storia"} giorno={"31/02/2023"}/>
          <CardHome tipo="avviso" testo={filtro("sdfajsdfklsjadfsajdfklasjdjfslakd")} titolo={"Informatica"} giorno={"31/02/2023"}/>
          <CardHome tipo="avviso" testo={filtro("sdfajsdfklsjadfsajdfklasjdjfslakd")} titolo={"Suca"} giorno={"31/02/2023"}/>
          <CardHome tipo="avviso" testo={filtro("Mockingbird")} titolo={"Eminem"} giorno={"31/02/2023"}/>
        </Carousel>
      </div>
      <div className='Assenze'>
        <div className="titolo-scadenze">Assenze & Ritardi</div>
        <button className='pagina-compiti' onClick={toRitardi}>{">"}</button>
      </div>
      <div className='Carosel3'>
        <Carousel>
          <CardHome tipo="assenze" tipoGiustifica={"Ritardo"} giorno={"31/02/2023"}/>
          <CardHome tipo="assenze" tipoGiustifica={"Assenza"} giorno={"35/02/2023"}/>
          <CardHome tipo="assenze" tipoGiustifica={"Assenza"} giorno={"341/02/2023"}/>
          <CardHome tipo="assenze" tipoGiustifica={"Great Eminem"} giorno={"1/1/2021"}/>
        </Carousel>
      </div>
      <div className='Note'>
        <div className="titolo-scadenze">Note</div>
        <button className='pagina-compiti' onClick={toNote}>{">"}</button>
      </div>
      <div className='Carosel3'>
        <Carousel>
          <CardHome tipo="note" prof={"Rolando"} giorno={"31/02/2023"} testo={filtro("sdfajsdfklsjadfsajdfklasjdjfslakd")}/>
          <CardHome tipo="note" prof={"Iachi"} giorno={"35/02/2023"} testo={filtro("sdfajsdfklsjadfsajdfklasjdjfslakd")}/>
          <CardHome tipo="note" prof={"Abate"} giorno={"341/02/2023"} testo={filtro("sdfajsdfklsjadfsajdfklasjdjfslakd")}/>
          <CardHome tipo="note" prof={"Costanzo"} giorno={"1/1/2021"} testo={filtro("sdfajsdfklsjadfsajdfklasjdjfslakd")}/>
        </Carousel>
      </div>
      <div className='titolo-opzioni-aggiuntive'>Opzioni aggiuntive:</div>
      <div className="bottoniOpzioni">
        <button>Statistiche</button>
        <button>Chat Classe</button>
        <button>Chat Professori</button>
        <button>Colloqui</button>
        <button>Didattica</button>
        <button onClick={toLogin}>Logout</button>
      </div>
      <div className="and-page-home">
        <hgroup className='and-main-home'>Edulink</hgroup>
        <hgroup className='and-sbutitle-home'>Un nuovo modo di fare scuola</hgroup>
      </div>
    </div>
  );
};

let voti = [7.5,8.5,10,6];

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