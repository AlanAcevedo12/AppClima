import Cards from './Cards/Cards.jsx';
import NavBar from './NavBar/NavBar.jsx';
import React, {useEffect, useState} from 'react';
import {Route, Switch} from "react-router-dom";
import About from './About/About.jsx';
import Ciudad from './Ciudad/Ciudad.jsx';
import Mapa from './Mapa/Mapa.jsx';

export default function Home(){
  const [ciudades, setCiudades] = useState([]);
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

  function onSearch({ciudad}){
    if(ciudad){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
        .then(respuesta => respuesta.json())
        .then((recurso) => {
          if(recurso.main !== undefined){
            const ciudad = {
              id: recurso.id,
              name: recurso.name,
              img: recurso.weather[0].icon,
              temp: Math.round(recurso.main.temp),
              feel: Math.round(recurso.main.feels_like),
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              wind: recurso.wind.speed,
              humidity: recurso.main.humidity,
              coordenadas: [recurso.coord.lat, recurso.coord.lon],
            };
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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position)
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`)
        .then(respuesta => respuesta.json())
        .then((recurso) => {
          if(recurso.main !== undefined){
            const ciudad = {
              id: recurso.id,
              name: recurso.name,
              img: recurso.weather[0].icon,
              temp: Math.round(recurso.main.temp),
              feel: Math.round(recurso.main.feels_like),
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              wind: recurso.wind.speed,
              humidity: recurso.main.humidity,
              coordenadas: [recurso.coord.lat, recurso.coord.lon],
            };
            setCiudades(anteriores => {
              if(anteriores.some(c => c.name === ciudad.name)){
                return anteriores;
              }else{
               return [...anteriores, ciudad]
              }
            });
          }
        });
    })
  },[])

  

    return(
    <div className="Home">
      <Route
        path="/"
        render={() => <NavBar onSearch={onSearch} />}
      />
      <Switch>
        <Route
          path="/About"
          render={() => <About />}
        />
        <Route exact path="/" >
          <Cards
            cities={ciudades} onClose={onClose}
          />
          <Mapa ciudades={ciudades}/>
        </Route>
        <Route
          exact
          path="/Ciudad/:ciudadId"
          render={({match}) => 
          (<Ciudad
          city={ciudades.filter(c => c.id === parseInt(match.params.ciudadId))}
        />)}
        /> 
      </Switch>
      
        
    </div>
    )
}




            