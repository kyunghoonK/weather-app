import {useEffect,useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

// 1. 앱이 실행되자마자 현재 위치기반의 날씨가 보인다.
// 2. 날씨 정보에는 도시, 섭씨 화씨 날씨 상태
// 3. 5개의 버튼이 있다.(1개는 현재 위치, 4개는 다른 도시)
// 4. 도시버튼을 클릭할때 마다 도시별 날씨가 나온다.
// 5. 현재 위치 버튼을 누르면 다시 현재 위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

function App() {
  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon)
    });
  };

  const getWeatherByCurrentLocation= async(lat, lon)=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a4764709ff76e2cc45b062b170d91e52`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
  };

  // useEffect(함수, 어레이)
  useEffect(()=>{
    getCurrentLocation()
  },[])
  return (
    <div>
      <div className='container'>
        <WeatherBox/>
        <WeatherButton/>
      </div>
    </div>
  );
}

export default App;
