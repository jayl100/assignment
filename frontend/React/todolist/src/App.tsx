import React from 'react';
import logo from './logo.svg';
import './App.css';

{/*
  작성자 : 이주현
  작성일 : 24. 10. 30
  내용 : jsx 사용법
*/}

function App() {
  let name = 'React';

  const h1Style = {
    backgroundColor: 'aquamarine',
    color: '#222222',
    fontSize: '36px',
    fontWeight: 'bold',
    padding: '20px',
  }
  const pStyle = {
    color: 'white',
    fontSize: '18px',
  }

  return (
    <>
      <div style={
        {
          maxWidth: '1200px',
          backgroundColor: '#222222',
          margin: '0 auto',
          padding: '20px',
        }
      }>
        <h1 style={h1Style}>Hello, {name === 'React' ?
          ('True') :
          ('False')}
        </h1>
        <p style={pStyle}>Welcome</p>
      </div>
    </>
  );
}

export default App;

