import React, { useEffect, useState } from "react";
import "../CssKaFolder/mainBoxKa.css";

const Main = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("hyderabad");
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ec6f1b48d65dbc09e2724ea665b1a97e`;
    const fetchApi = async () => {
        const response = await fetch(url);
        const responseJson = await response.json();
        setCity(responseJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <div className="mainBox">
      <input
        type="search"
        className="searchBox"
        onChange={(event) => {
            setSearch(event.target.value);
        }}
        placeholder="City Name"
      />
      {
          !city ? (<p>no data found</p>):(
          <div className="data">
          <i className="fa-solid fa-location-dot fa-xl"></i>
          <div className="cityName">{search}</div>
          <div className="temperature">
            <div>{city.temp}°C</div>
            <div>
              <span className="min"> Min  : {city.temp_min}°C </span> | <span className="max"> Max : {city.temp_max}°C</span>
            </div>
          </div>
        </div>
        )
      }
      
    </div>
  );
};

export default Main;
