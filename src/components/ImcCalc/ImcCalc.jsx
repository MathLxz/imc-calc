import { useState } from 'react';

import Button from '../Button/Button';
import './ImcCalc.css';
// eslint-disable-next-line react/prop-types
export default function ImcCalc({ calcImc }) {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const clearForm = (e) => {
    e.preventDefault();
    setHeight('');
    setWeight('');
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, '');
  };
  const handleHeightChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setHeight(updatedValue);
  };
  const handleWightChange = (e) => {
    const updatedValue = validDigits(e.target.value);
    setWeight(updatedValue);
  };

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo 1,70"
              onChange={(e) => handleHeightChange(e)}
              value={height}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo 70,5"
              onChange={(e) => handleWightChange(e)}
              value={weight}
            />
          </div>
        </div>
        <div className="action-control">
          <Button id="calc-btn" text="Calcular" action={(e) => calcImc(e, height, weight)}/>
          <Button id="clear-btn" text="Limpar" action={clearForm} />
        </div>
      </form>
    </div>
  );
}
