import React from 'react';
import Card from '../Card/Card.jsx';
import estilos from "./Cards.module.css";

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  //console.log(props);
  //console.log(array[0]);
  return (
    <div id={estilos.cardsDiv}>
      {cities.map((ciudad) => (
        <Card 
        key={ciudad.id}
        name={ciudad.name}
        max={ciudad.main.temp_max}
        min={ciudad.main.temp_min}
        img={ciudad.weather[0].icon}
        onClose={() => alert(ciudad.name)}
        />
        ))}
    </div>
  )
}