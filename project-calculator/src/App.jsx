import React, { useState } from 'react';
import './index.css';
import Screen from './components/Screen';
import Buttons from './components/Buttons';

function App() {
  const [displayValue, setDisplayValue] = useState('0');

  return (
    <div className="App">
      <Screen value={displayValue} />
      <Buttons setDisplayValue={setDisplayValue} />
    </div>
  );
}

export default App;
