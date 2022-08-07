import { useEffect } from 'react';
import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap, Circle } from 'react-leaflet';
import L from 'leaflet';

function LocationMarker({ciudad}) {
    const [position, setPosition] = useState(null);

    const map = useMap();

    useEffect(() => {
        console.log("hola");
        if(ciudad){
            setPosition(ciudad.coordenadas);
            map.flyTo(ciudad.coordenadas, map.getZoom());
            return;
        }
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      });
    }, [map, ciudad]);

  }

export default LocationMarker;