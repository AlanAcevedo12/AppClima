import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import estilos from "./NavBar.module.css";
import {Link} from "react-router-dom";
import About from "../About/About";

function NavBar(props){
    return (
        <nav id={estilos.navID}>
            <Link to="/" id={estilos.a}>
                <div id={estilos.nombreApp}>
                    <h1 className={estilos.h1}>App Clima</h1>
                </div>
            </Link>
            <SearchBar onSearch={props.onSearch} />
            <Link to="/About" id={estilos.a}>
                <h1 className={estilos.h1}>About</h1>
            </Link>
        </nav>
    );
}

export default NavBar;