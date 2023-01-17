import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <h1>New York</h1>
            <ul>
                <li>Monday 7:00</li>
                <li>Mostly cloudy</li> 
            </ul>
            <div className = "row mt-3">
                <div className="col-6">

                        <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                        alt="Mostly Cloudy" className="float-left" />

                            <span className="temp">6</span>
                            <span className="units">°C</span>


                </div>
                <div className="col-6">
                    <ul>
                        <li>
                        Precipitation: 15%
                        </li>
                        <li>
                        Humidity: 94%
                        </li>
                        <li>
                        Wind: 7 mph
                        </li>
                    </ul>

                </div>
            </div>
        </div>    
    );
}