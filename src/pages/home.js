import React from 'react';
import './style/home.css';
import CardCompito from './components/CompitiCard';
import Carousel from './components/Carousel'

const Home = () => {
  return (
    <div className="home">
      <div className="title-page">Home</div>
      <Media />
      <div className="ultimivoti">
        <div className='containervoti'>
          <Pallini />
        </div>
      </div>
      <div className='Carosel'>
        <Carousel>
          <CardCompito testo={filtro("sdfajsdfklsjadfsajdfklasjdjfslakd")} materia={"Storia"} giorno={"31/02/2023"}/>
          <CardCompito testo={filtro("sdfajsdfklsjadfsajdfklasjdjfslakd")} materia={"Informatica"} giorno={"31/02/2023"}/>
          <CardCompito testo={filtro("sdfajsdfklsjadfsajdfklasjdjfslakd")} materia={"Suca"} giorno={"31/02/2023"}/>
          <CardCompito testo={"Mockingbird"} materia={"Eminem"} giorno={"31/02/2023"}/>
        </Carousel>
      </div>
    </div>
  );
};

let voti = [7.5,4,10,6];

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
  let LungMax = 19
  let shortenedString = STRINGA.substring(0, LungMax);
  let puntini = shortenedString+"..."
  return(
    puntini
  )
}
export default Home;