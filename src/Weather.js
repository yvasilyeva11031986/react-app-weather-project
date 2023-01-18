import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({});

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData(
            {
             ready: true,   
             temp: Math.round(response.data.main.temp - 273.15),
             description: response.data.weather[0].description, 
             humidity: response.data.main.humidity,
             wind: Math.round(response.data.wind.speed),
             city: response.data.name,   
             icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",  
             date: "Monday 7:00",        
            });    

    }

    if(weatherData.ready) {
        return (
            <div className="Weather">            
                <form>
                <div className="row">
                <div className="col-9">
                    <input 
                        type="search"
                        placeholder="Enter a city"
                        className="form-control"
                        autoFocus="on"
                    />
                    </div>
                    <div className="col-3">   
                    <input type="submit" value="Search" className="btn btn-primary w-100" />    
                </div>
                </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>{weatherData.date}</li>
                    <li className="text-capitalize">{weatherData.description}</li> 
                </ul>
                <div className = "row mt-3">
                    <div className="col-6">
                            <img src={weatherData.icon}
                            alt="Mostly Cloudy" className="float-left" />
                                <span className="temp">{weatherData.temp}</span>
                                <span className="units">°C</span>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>
                            Humidity: {weatherData.humidity}%
                            </li>
                            <li>
                            Wind: {weatherData.wind} mph
                            </li>
                        </ul>
                    </div>
                </div>
            </div>    
        );
    } else {
        const apiKey = 'f7141e3cfb8719734d0bf4f429aefd50';
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
        return "Loading...";    
    }
}