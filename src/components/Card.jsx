import React from 'react';

export default function Card(props) {
  // acá va tu código
  //console.log(props);
  //DESTRUCTURING
  let {name, min, max, img, onClose} = props;
  return (
  <div>
    <button onClick={onClose}>X</button>
    <h3>{name}</h3>
    <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} />
    <h4>Maxima</h4>
    <span>{max}</span>
    <h4>Minima</h4>
    <span>{min}</span>
  </div>
  );
};
