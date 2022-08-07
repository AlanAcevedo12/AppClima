import React from 'react';
import Card from '../Card/Card.jsx';
import estilos from "./Cards.module.css";

export default function Cards({cities, onClose}) {
  // acá va tu código
  // tip, podés usar un map
  //console.log(props);
  //console.log(array[0]);
  //let {cities, onClose} = props;

  if(cities){
    return (
      <div id={estilos.cardsDiv}>
        <h1 id={estilos.h1Ciudades}>Ciudades</h1>
        {cities.map((ciudad) => {
          return <Card 
          key={ciudad.id}
          id={ciudad.id}
          name={ciudad.name}
          temp={ciudad.temp}
          feel={ciudad.feel}
          img={ciudad.img}
          onClose={onClose}
          />
        })}
      </div>
    )
  }
  else alert("Sin ciudades")
}