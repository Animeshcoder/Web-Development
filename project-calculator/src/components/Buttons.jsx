import React, { useState } from 'react';

const Buttons = ({ setDisplayValue }) => {
  const [input, setInput] = useState('');

  const handleClick = (button) => {
    if (button === '=') {
      try {
        const result = eval(input);
        setDisplayValue(result);
        setInput(result.toString());
      } catch {
        setDisplayValue('Error');
        setInput('');
      }
    } else if (button === 'C') {
      setInput('');
      setDisplayValue('0');
    } else {
      const newInput = input + button;
      setInput(newInput);
      setDisplayValue(newInput);
    }
  };

  return (
    <div className="buttons">
      <button onClick={() => handleClick('7')}>7</button>
      <button onClick={() => handleClick('8')}>8</button>
      <button onClick={() => handleClick('9')}>9</button>
      <button onClick={() => handleClick('/')}>/</button>
      <button onClick={() => handleClick('4')}>4</button>
      <button onClick={() => handleClick('5')}>5</button>
      <button onClick={() => handleClick('6')}>6</button>
      <button onClick={() => handleClick('*')}>*</button>
      <button onClick={() => handleClick('1')}>1</button>
      <button onClick={() => handleClick('2')}>2</button>
      <button onClick={() => handleClick('3')}>3</button>
      <button onClick={() => handleClick('-')}>-</button>
      <button onClick={() => handleClick('0')}>0</button>
      <button onClick={() => handleClick('.')}>.</button>
      <button onClick={() => handleClick('=')}>=</button>
      <button onClick={() => handleClick('+')}>+</button>
      <button onClick={() => handleClick('C')}>C</button>
    </div>
  );
};

export default Buttons;
