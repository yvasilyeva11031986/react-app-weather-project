import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
    return ( 
    <div className="WeatherInfo">
    <h1>{props.info.city}</h1>
    <ul>
        <li><FormatedDate date={props.info.date} /></li>
        <li className="text-capitalize">{props.info.description}</li> 
    </ul>
    <div className = "row mt-3">
        <div className="col-6">
                
                <WeatherIcon 
                code={props.info.icon}
                size={52}
                />
                <WeatherTemp
                celsius={props.info.temp}
                />

        </div>
        <div className="col-6">
            <ul>
                <li>
                Humidity: {props.info.humidity}%
                </li>
                <li>
                Wind: {props.info.wind} mph
                </li>
            </ul>
        </div>
    </div>
    </div>);
}