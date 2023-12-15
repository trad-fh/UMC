import React from 'react'

export default function Weather({weatherData}) {
    const {name, weather, main: {temp}} = weatherData;
    const { main } = weather[0];
  return (
    <div><h1>{name}</h1>
    <h1>{main}</h1>
    <h1>{Math.round(((Number(temp) - 273.15) * 10)) / 10}</h1>
    </div>
  )
}
