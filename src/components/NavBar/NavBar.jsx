import React from "react";
import SearchBar from "../SearchBar/SearchBar"
import estilos from "./NavBar.module.css";

function NavBar(props){
    return (
        <nav id={estilos.navID}>
            <div id={estilos.nombreApp}>
                <h1>App Clima</h1>
            </div>
            <SearchBar onSearch={props.onSearch}></SearchBar>
        </nav>
    );
}

export default NavBar;