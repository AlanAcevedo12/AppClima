import React from "react";
import estilos from "./About.module.css";
import {Link} from "react-router-dom";

export default function About(){
    return (
        <div id={estilos.contenedor}>
            <h1 id={estilos.h1Ciudad}>Acerca de</h1>
                <div id={estilos.informacion}>
                    <p>Sitio web desarrollado por Alan Acevedo como parte de la cursada de 
                        la carrera "Desarrollador Web FullStack" de soyHenry. Se utilizó la tecnología 
                        react junto con la API de Open Weather Map.
                    </p>
                </div>
            <Link to="/" id={estilos.a}>
                <h1 id={estilos.volver}>Volver</h1>
            </Link>
        </div>
    );
}