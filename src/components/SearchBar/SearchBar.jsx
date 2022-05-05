import React, {useState} from 'react';
import estilos from "./SearchBar.module.css";

export default function SearchBar(props) {
  // acá va tu código
  let {onSearch} = props;
  const [ciudad, setCiudad] = useState([]);

  function ingresoCiudad({target}){
    //console.log(target.value);
    setCiudad({ciudad: [target.value]});
  }

  return (
    <form id={estilos.contenedor} onSubmit={(e) => {
      e.preventDefault();
      onSearch(ciudad);
      setCiudad({ciudad: ""});
    }}>
      <input id={estilos.entrada} type="text" onChange={ingresoCiudad} placeholder='Ciudad...' value={ciudad.ciudad}></input>
      <input type="submit" id={estilos.boton} onClick={onSearch} value="Agregar" />
    </form>
  );
};