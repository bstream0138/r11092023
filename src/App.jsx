import axios from "axios";
import { useEffect, useState } from "react";

import {
  REACT_APP_OPENWEATHER_SECRET_KEY,
} from "./utils/config.js";


const App = () => {
  const [weatherData, setWeatherData] = useState();

  console.log("check this.");
  console.log(REACT_APP_OPENWEATHER_SECRET_KEY);

  const getWeather = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=37.5612533&lon=126.7985384&appid=${REACT_APP_OPENWEATHER_SECRET_KEY}`
    );

    setWeatherData(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="bg-red-100">
      {weatherData ? (
        <div>  
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          />
          <h3>로딩 완료</h3>
        </div>
      ) : (
        <div>로딩중...</div>
      )}
    </div>
  );
};

export default App;