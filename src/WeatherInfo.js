import React from "react";
import FormatedDate from "./FormatedDate";

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
                <img src={props.info.icon}
                alt="Mostly Cloudy" className="float-left" />
                    <span className="temp">{props.info.temp}</span>
                    <span className="units">°C</span>
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