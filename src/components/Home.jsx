import Cards from './Cards/Cards.jsx';
//import SearchBar from './SearchBar/SearchBar.jsx';
import estilos from "./Home.module.css";
//import data, { Cairns } from '../data.js';
import NavBar from './NavBar/NavBar.jsx';
import React, {useState} from 'react';


export default function Home(){
  const [ciudades, setCiudades] = useState([]);
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

  function onSearch({ciudad}){
    //console.log(ciudad);
    if(ciudad){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
        .then(respuesta => respuesta.json())
        .then((recurso) => {
          if(recurso.main !== undefined){
            const ciudad = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
            };
            //console.log(ciudad.id);
            setCiudades(anteriores => {
              if(anteriores.some(c => c.name === ciudad.name)){
                return anteriores;
              }else{
               return [...anteriores, ciudad]
              }
            });
          }else{
            alert("Ciudad no encontrada :C");
          }
        });
    }
  }

  function onClose(id){
    console.log(id);
    setCiudades(anteriores => anteriores.filter(ciudad => ciudad.id !== id));
  }

    return(
    <div className="Home">
      <NavBar onSearch={onSearch}></NavBar>
        <Cards
          cities={ciudades} onClose={onClose}
        />
    </div>
    )
}