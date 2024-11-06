import React from 'react';
import './App.css';
import Todolist from './Todolist';
import Clock from './Timer';

function App() {
  return (
    <>
      <div className="container">
          <Todolist></Todolist>
          <Clock></Clock>
      </div>
    </>
  );
}

export default App;

