import React from 'react';
import estilos from './Card.module.css';

export default function Card(props) {
  // acá va tu código
  //console.log(props);
  //DESTRUCTURING
  let {name, min, max, img, onClose, id} = props;
  return (
  <div id={estilos.cardID}>
    <button onClick={() => onClose(id)} id={estilos.botonCerrar}>X</button>
    <h3 id={estilos.nombreCiudad}>{name}</h3>
    <img id={estilos.imgClima} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img"/>
    <div id={estilos.temps}>
      <div id={estilos.max}>
        <h4 class={estilos.titulos}>Max</h4>
        <span class={estilos.textos}>{max+"°"}</span>
      </div>
      <div id={estilos.min}>
        <h4 class={estilos.titulos}>Min</h4>
        <span class={estilos.textos}>{min+"°"}</span>
      </div>
    </div>
  </div>
  );
};
