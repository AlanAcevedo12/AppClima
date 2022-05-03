import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
    <>
      <input type="text"></input>
      <button onClick={props.onSearch}>Agregar</button>
    </>
  );
};