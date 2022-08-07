import { MapContainer, Marker, Popup, TileLayer, useMap, Circle } from 'react-leaflet';
import estilos from "./Mapa.module.css";
import L from 'leaflet';
import LocationMarker from './Location';

const Mapa = ({ciudades}) => {

    return(
        <div id={estilos.mapaContainer}>
            <MapContainer center={[0,0]} zoom={10} scrollWheelZoom={true} id={estilos.mapa}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* {console.log(ciudades)} */}
            {ciudades && <LocationMarker ciudad={ciudades[ciudades.length-1]}/>}
            {
                ciudades.length && ciudades.map((s, i) => {
                    return(<Marker position={s.coordenadas} key={i} 
                    icon={L.icon({
                      iconUrl: `https://openweathermap.org/img/wn/${s.img}@2x.png`,
                      iconSize:     [70, 70],
                    })}>
                            <Popup>
                                {s.name}
                                <br/>
                                {"Temperatura: " + s.temp + "°"}
                                <br/>
                                {"Sensación térmica: " + s.feel + "°"}
                            </Popup>
                        </Marker>)
                })
            }
          </MapContainer>
        </div>
    )
};

export default Mapa;
