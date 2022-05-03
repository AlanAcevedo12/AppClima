import React from 'react';
import Card from './Card';

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  //console.log(props);
  //console.log(array[0]);
  return (
    <>
      {cities.map((ciudad) => (
        <Card 
          key={ciudad.id}
          name={ciudad.name}
          max={ciudad.main.temp_max}
          min={ciudad.main.temp_min}
          img={ciudad.weather[0].icon}
          onClose={() => alert(ciudad.name)}
        />
      ))}
    </>
  )
}