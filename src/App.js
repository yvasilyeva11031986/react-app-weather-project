import React from 'react';
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <h1>Weather App</h1>
      <Weather defaultCity="Kyiv"/>
      <footer>
      This project was coded by Yuliia Vasilyeva and is {" "}
      <a href="https://github.com/yvasilyeva11031986/react-app-weather-project" target="_blank">
      open-sourced on GitHub   
      </a>
      </footer>
      </div>
    </div>
  );
}
