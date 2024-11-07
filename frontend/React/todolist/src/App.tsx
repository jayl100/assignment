import React from 'react';
import './App.css';
import Todolist from './Todolist';
import Clock from './Timer';
import MyWeather from "./MyWeather";

function App() {
  return (
    <>
      <div className="container">
          <Todolist></Todolist>
          <Clock></Clock>
          <MyWeather weather='맑음'>일기예보</MyWeather>
      </div>
    </>
  );
}

export default App;

