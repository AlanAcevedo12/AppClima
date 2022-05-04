import React from 'react';
import estilos from "./SearchBar.module.css";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <>
      <input id={estilos.entrada} type="text"></input>
      <button id={estilos.boton} onClick={props.onSearch}>Agregar</button>
    </>
  );
};