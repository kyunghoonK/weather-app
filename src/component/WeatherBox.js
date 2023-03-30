import React from 'react'

const WeatherBox = ({weather}) => {
    console.log("weather?", weather);
  return (
    <div className='weather-box'>
        <div>{weather?.name}</div>
        <h1>{weather?.main.temp}℃ / {weather?.main.temp*1.8 + 32}℉</h1>
        <h3>체감 온도 : {weather?.main.feels_like} / 현재 습도 : {weather?.main.humidity}</h3>
        <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox