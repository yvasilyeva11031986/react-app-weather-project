import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({});

    function handleResponse(response) {
        setWeatherData(
            {
             ready: true,   
             temp: Math.round(response.data.main.temp - 273.15),
             description: response.data.weather[0].description, 
             humidity: response.data.main.humidity,
             wind: Math.round(response.data.wind.speed),
             city: response.data.name,   
             icon: response.data.weather[0].icon,  
             date: new Date(response.data.dt * 1000),        
            });    

    }

    function search () {
        const apiKey = 'f7141e3cfb8719734d0bf4f429aefd50';
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        search();

    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if(weatherData.ready) {
        return (
            <div className="Weather">            
                <form onSubmit={handleSubmit}>
                <div className="row">
                <div className="col-9">
                    <input 
                        type="search"
                        placeholder="Enter a city"
                        className="form-control"
                        autoFocus="on"
                        onChange={handleCityChange}
                    />
                    </div>
                    <div className="col-3">   
                    <input type="submit" value="Search" className="btn btn-primary w-100" />    
                </div>
                </div>
                </form>
                <WeatherInfo info={weatherData}/>
                <WeatherForecast city={weatherData.city}/>
            </div>    
        );
    } else {
        search();
        return "Loading...";  
    }
}