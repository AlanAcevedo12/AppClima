import React from "react";
import estilos from "./Ciudad.module.css";
import {Link} from "react-router-dom";

export default function Ciudad({city}){
    let cityProp = city[0];
    console.log(city)
    return (
        <div id={estilos.ciudadDiv}>
                <h1 id={estilos.h1Ciudad}>{cityProp.name}</h1>
                <div id={estilos.informacion}>
                    <div id={estilos.txtDiv} >
                        <div id={estilos.datos}>Temperatura: {cityProp.temp} °C</div>
                        <div id={estilos.datos}>Sensación Térmica: {cityProp.feel} °C</div>
                        <div id={estilos.datos}>Clima: {cityProp.weather}</div>
                        <div id={estilos.datos}>Viento: {cityProp.wind} km/h</div>
                        <div id={estilos.datos}>Cantidad de nubes: {cityProp.clouds} %</div>
                        <div id={estilos.datos}>Humedad: {cityProp.humidity} %</div>
                    </div>
                    <img src={`http://openweathermap.org/img/wn/${cityProp.img}@2x.png`} id={estilos.imagen} alt="img" />
                </div>
            <Link to="/" id={estilos.a}>
                <h1 id={estilos.volver}>Volver</h1>
            </Link>
        </div>
    )
}

// {city}