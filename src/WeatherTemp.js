import React, {useState} from "react";

export default function WeatherTemp(props) {
    
    const [units, setUnits] = useState('celsius');

    function convertFarenheit(event) {
        event.preventDefault();
        setUnits('farenheit');
    }

    function convertCelsius(event) {
        event.preventDefault();
        setUnits('celsius');
    }

    if(units === 'celsius') {
    
    return(
    <span>    
        <span className="temp">
            {props.celsius}
        </span>
        <span className="units">
            °C |{" "} 
            <a href="/" onClick={convertFarenheit}>
            °F
            </a> 
        </span>
    </span>    
    );
    } else {
        
        let farenheit = (props.celsius * 9) / 5 + 32;
        
        return (
        <span>    
        <span className="temp">
            {Math.round(farenheit)}
        </span>
        <span className="units">
        <a href="/" onClick={convertCelsius}>
            °C 
            </a> 
            {" "}| °F
            
        </span>
    </span>
    );    
    }
}