import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
    return ( 
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
    <ul>
        <li><FormatedDate date={props.data.date} /></li>
        <li className="text-capitalize">{props.data.description}</li> 
    </ul>
    <div className = "row mt-3">
        <div className="col-6">
                
                <WeatherIcon 
                code={props.data.icon}
                size={52}
                />
                <WeatherTemp
                celsius={props.data.temp}
                />

        </div>
        <div className="col-6">
            <ul>
                <li>
                Humidity: {props.data.humidity}%
                </li>
                <li>
                Wind: {props.data.wind} mph
                </li>
            </ul>
        </div>
    </div>
    </div>);
}