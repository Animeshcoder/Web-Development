
import React, { useState } from 'react';
import './App.css';
import TemperatureConverter from './components/temp';

function App() {
  const [bgColor, setBgColor] = useState('white');

  const changeColor = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor, height: '100vh' }}>
      <TemperatureConverter />
      <button onClick={changeColor}>Change Background Color</button>
    </div>
  );
}

export default App;

