import React from 'react';
import estilos from './Card.module.css';
import {Link} from "react-router-dom";

export default function Card(props) {
  // acá va tu código
  //console.log(props);
  //DESTRUCTURING
  let {name, temp, feel, img, onClose, id} = props;
  return (
    <div id={estilos.cardID}>
        <button onClick={() => onClose(id)} id={estilos.botonCerrar}>X</button>
          <h3 id={estilos.nombreCiudad}>{name}</h3>
        <img id={estilos.imgClima} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img"/>
        <div id={estilos.temps}>
          <div id={estilos.max}>
            <h4 class={estilos.titulos}>Temperatura</h4>
            <span class={estilos.textos}>{temp+"°"}</span>
          </div>
          <div id={estilos.min}>
            <h4 class={estilos.titulos}>Sensación Térmica</h4>
            <span class={estilos.textos}>{feel+"°"}</span>
          </div>
        </div>
        <Link to={`/ciudad/${id}`} id={estilos.link}>
          <span id={estilos.verMas}>Ver más detalles</span>
        </Link>
      </div>

  
  );
};
