import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState({ celsius: '', fahrenheit: '' });

  const handleTemperatureChange = (e) => {
    const { name, value } = e.target;
    if (name === 'celsius') {
      setTemperature({
        celsius: value,
        fahrenheit: value ? ((value * 9/5) + 32) : ''
      });
    } else if (name === 'fahrenheit') {
      setTemperature({
        celsius: value ? ((value - 32) * 5/9) : '',
        fahrenheit: value
      });
    }
  };

  return (
    <div>
      <h2>Temperature Converter</h2>
      <div>
        <label>
          Celsius:
          <input
            type="number"
            name="celsius"
            value={temperature.celsius}
            onChange={handleTemperatureChange}
          />
        </label>
      </div>
      <div>
        <label>
          Fahrenheit:
          <input
            type="number"
            name="fahrenheit"
            value={temperature.fahrenheit}
            onChange={handleTemperatureChange}
          />
        </label>
      </div>
    </div>
  );
};

export default TemperatureConverter;
