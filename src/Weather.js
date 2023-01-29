import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ ready: false });
    let [city, setCity] = useState(props.defaultCity);
    
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData(
            {
             ready: true, 
             temp: Math.round(response.data.temperature.current),
             description: response.data.condition.description, 
             humidity: response.data.temperature.humidity,
             wind: Math.round(response.data.wind.speed),
             city: response.data.city,
             icon: response.data.condition.icon,  
             date: new Date(response.data.time * 1000),    
            });    
    }

    function search () {
        const apiKey = 'f17boc23c2b2f34d1ab3d2t904991752';
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
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
                <WeatherInfo data={weatherData}/>
                <WeatherForecast city={weatherData.city}/>
            </div>    
        );
    } else {
        search();
        return "Loading...";  
    }
}