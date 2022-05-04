import Cards from './Cards/Cards.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';
import estilos from "./Home.module.css";
import data, { Cairns } from '../data.js';


export default function Home(){
    return(
    <div className="Home">
      <div id={estilos.nombreApp}>
        <h1>App Clima</h1>
      </div>
      <div id={estilos.barraBusqueda}>
        <SearchBar
          onSearch={(ciudad) => alert("ciudad")}
        />
      </div>
        <Cards
          cities={data}
        />
    </div>
    )
}