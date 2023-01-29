import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {

    function setDay(time){
        let date = new Date(time * 1000);
        let day = date.getDay();
        let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        return days[day];
        }

    return (
        <div>
        <div className="WeatherForecast-day">
        {setDay(props.data.time)}
        </div>
        <WeatherIcon code={props.data.condition.icon} size={32} />
        <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">{Math.round(props.data.temperature.maximum)}°</span>
            <span className="WeatherForecast-temp-min">{Math.round(props.data.temperature.minimum)}°</span>
        </div>
        </div>
    );
}