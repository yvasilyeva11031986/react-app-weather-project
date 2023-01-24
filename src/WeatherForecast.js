import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {

    function handleResponse(response){
        console.log(response.data);
    }
    
    let apiKey = 'f17boc23c2b2f34d1ab3d2t904991752';
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return(
        <div className="WeatherForecast">    
        <div className="row">
            <div className="col">
            <div className="WeatherForecast-day">
                THU
            </div>
            <WeatherIcon code="01d" size={32} />
            <div className="WeatherForecast-temp">
                <span className="WeatherForecast-temp-max">19</span>
                <span className="WeatherForecast-temp-min">10</span>
            </div>
            </div>
            <div className="col">
            <div className="WeatherForecast-day">
                THU
            </div>
            <WeatherIcon code="01d" size={32} />
            <div className="WeatherForecast-temp">
                <span className="WeatherForecast-temp-max">19</span>
                <span className="WeatherForecast-temp-min">10</span>
            </div>
            </div>
            <div className="col">
            <div className="WeatherForecast-day">
                THU
            </div>
            <WeatherIcon code="01d" size={32} />
            <div className="WeatherForecast-temp">
                <span className="WeatherForecast-temp-max">19</span>
                <span className="WeatherForecast-temp-min">10</span>
            </div>
            </div>
            <div className="col">
            <div className="WeatherForecast-day">
                THU
            </div>
            <WeatherIcon code="01d" size={32} />
            <div className="WeatherForecast-temp">
                <span className="WeatherForecast-temp-max">19</span>
                <span className="WeatherForecast-temp-min">10</span>
            </div>
            </div>
            <div className="col">
            <div className="WeatherForecast-day">
                THU
            </div>
            <WeatherIcon code="01d" size={32} />
            <div className="WeatherForecast-temp">
                <span className="WeatherForecast-temp-max">19</span>
                <span className="WeatherForecast-temp-min">10</span>
            </div>
            </div>
        </div>
        
        </div>
    );
}