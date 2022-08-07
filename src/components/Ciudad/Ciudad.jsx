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
                        <div id={estilos.datos}><span>Temperatura: </span><span>{cityProp.temp} °C</span></div>
                        <div id={estilos.datos}><span>Sensación Térmica: </span><span>{cityProp.feel} °C</span></div>
                        <div id={estilos.datos}><span>Clima: </span><span>{cityProp.weather}</span></div>
                        <div id={estilos.datos}><span>Viento: </span><span>{cityProp.wind} km/h</span></div>
                        <div id={estilos.datos}><span>Cantidad de nubes: </span><span>{cityProp.clouds} %</span></div>
                        <div id={estilos.datos}><span>Humedad: </span><span>{cityProp.humidity} %</span></div>
                    </div>
                    <img src={`https://openweathermap.org/img/wn/${cityProp.img}@2x.png`} id={estilos.imagen} alt="img" />
                </div>
            <Link to="/" id={estilos.a}>
                <h1 id={estilos.volver}>Volver</h1>
            </Link>
        </div>
    )
}

// {city}