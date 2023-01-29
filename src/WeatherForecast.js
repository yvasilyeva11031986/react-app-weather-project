import React, { useState, useEffect } from "react"; 
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecastData, setForecastData] = useState(null);
    
    
    useEffect(() => {
        setLoaded(false);
      }, [props.city]);

    function handleResponse(response){
        setLoaded(true);
        setForecastData(response.data.daily);
    }
    
    if(loaded === true) {
        console.log(props);
        console.log(forecastData);
        return(
            <div className="WeatherForecast">    
                <div className="row">
                        {forecastData.map(function(forecastData, index){
                            if(index < 5) {
                            return (<div className="col" key={index}>
                                    <WeatherForecastDay data={forecastData}/>
                                    </div>);
                            } else {
                                return null;
                            }
                        })}
                </div>
            </div>
            );
    } else {    
        const apiKey = 'f17boc23c2b2f34d1ab3d2t904991752';
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        return null;
    }
}