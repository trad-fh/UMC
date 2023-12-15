import axios from "axios";
import { useState } from "react";
import Weather from "./Weather";

const API_KEY = "5ad8265977ff761e17f4bb33b29f5401";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (e) => {
    e.preventDefault();
    try {
      const weatherApiData = (
        await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        )
      ).data;
      setWeatherData(weatherApiData);
    } catch (error) {
      setWeatherData(null);
    }
  };

  return (
    <div>
      <form onSubmit={fetchWeatherData}>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="도시를 입력하세요"
        />
      </form>
      {weatherData && <Weather weatherData={weatherData} />}
    </div>
  );
}

export default App;
