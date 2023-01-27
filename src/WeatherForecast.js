import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props) {
    console.log(props.city);
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null);
    

    function handleResponse(response){
        setForecastData(response.data.daily);
        setLoaded(true);
    }
    
    function setDay(data){
        let date = new Date(data.time * 1000);
        let day = date.getDay();
        let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        return days[day];
        }

    if(loaded) {
        return(
            <div className="WeatherForecast">    
                <div className="row">
                    <div className="col">
                        <div className="WeatherForecast-day">
                            {setDay(forecastData[1])}
                        </div>
                        <WeatherIcon code={forecastData[1].condition.icon} size={32} />
                        <div className="WeatherForecast-temp">
                            <span className="WeatherForecast-temp-max">{Math.round(forecastData[1].temperature.maximum)}°</span>
                            <span className="WeatherForecast-temp-min">{Math.round(forecastData[1].temperature.minimum)}°</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="WeatherForecast-day">
                            {setDay(forecastData[2])}
                        </div>
                        <WeatherIcon code={forecastData[2].condition.icon} size={32} />
                        <div className="WeatherForecast-temp">
                            <span className="WeatherForecast-temp-max">{Math.round(forecastData[2].temperature.maximum)}°</span>
                            <span className="WeatherForecast-temp-min">{Math.round(forecastData[2].temperature.minimum)}°</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="WeatherForecast-day">
                            {setDay(forecastData[3])}
                        </div>
                        <WeatherIcon code={forecastData[3].condition.icon} size={32} />
                         <div className="WeatherForecast-temp">
                            <span className="WeatherForecast-temp-max">{Math.round(forecastData[3].temperature.maximum)}°</span>
                            <span className="WeatherForecast-temp-min">{Math.round(forecastData[3].temperature.minimum)}°</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="WeatherForecast-day">
                            {setDay(forecastData[4])}
                        </div>
                        <WeatherIcon code={forecastData[4].condition.icon} size={32} />
                        <div className="WeatherForecast-temp">
                            <span className="WeatherForecast-temp-max">{Math.round(forecastData[4].temperature.maximum)}°</span>
                            <span className="WeatherForecast-temp-min">{Math.round(forecastData[4].temperature.minimum)}°</span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="WeatherForecast-day">
                            {setDay(forecastData[4])}
                        </div>
                        <WeatherIcon code={forecastData[4].condition.icon} size={32} />
                        <div className="WeatherForecast-temp">
                            <span className="WeatherForecast-temp-max">{Math.round(forecastData[4].temperature.maximum)}°</span>
                            <span className="WeatherForecast-temp-min">{Math.round(forecastData[4].temperature.minimum)}°</span>
                        </div>
                    </div>
                </div>
            </div>
            );
    } else {
            
        let query = props.city;
        let apiKey = 'f17boc23c2b2f34d1ab3d2t904991752';
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}`;        
        axios.get(apiUrl).then(handleResponse);

    }
}