import React, { useState } from 'react';

export default function MCUACalculator() {
  const [initialAngularVelocity, setInitialAngularVelocity] = useState('');
  const [finalAngularVelocity, setFinalAngularVelocity] = useState('');
  const [angularAcceleration, setAngularAcceleration] = useState('');
  const [time, setTime] = useState('');
  const [angularDisplacement, setAngularDisplacement] = useState('');
  const [calculationMode, setCalculationMode] = useState('velocityAndAcceleration');

  const calculate = () => {
    switch(calculationMode) {
      case 'velocityAndAcceleration':
        if (initialAngularVelocity && angularAcceleration && time) {
          const w0 = parseFloat(initialAngularVelocity);
          const alpha = parseFloat(angularAcceleration);
          const t = parseFloat(time);
          
          setFinalAngularVelocity((w0 + alpha * t).toFixed(2));
          setAngularDisplacement((w0 * t + 0.5 * alpha * t * t).toFixed(2));
        }
        break;
      
      case 'velocitiesAndDisplacement':
        if (initialAngularVelocity && finalAngularVelocity && angularDisplacement) {
          const w0 = parseFloat(initialAngularVelocity);
          const w = parseFloat(finalAngularVelocity);
          const theta = parseFloat(angularDisplacement);
          
          const alpha = (w * w - w0 * w0) / (2 * theta);
          setAngularAcceleration(alpha.toFixed(2));
          
          if (alpha !== 0) {
            const t = (w - w0) / alpha;
            setTime(t.toFixed(2));
          }
        }
        break;
    }
  };

  const resetFields = () => {
    setInitialAngularVelocity('');
    setFinalAngularVelocity('');
    setAngularAcceleration('');
    setTime('');
    setAngularDisplacement('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Calculadora de MCUA</h3>
      
      <div className="mb-4">
        <label className="block mb-2">Modo de cálculo:</label>
        <select 
          value={calculationMode}
          onChange={(e) => {
            setCalculationMode(e.target.value);
            resetFields();
          }}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="velocityAndAcceleration">Velocidad angular inicial, aceleración y tiempo</option>
          <option value="velocitiesAndDisplacement">Velocidades angulares inicial y final, desplazamiento</option>
        </select>
      </div>
      
      {/* Input fields based on calculation mode */}
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <label className="block mb-2">Velocidad angular inicial (rad/s):</label>
          <input 
            type="number" 
            value={initialAngularVelocity} 
            onChange={(e) => setInitialAngularVelocity(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            placeholder="Introduce la velocidad angular inicial"
          />
        </div>
        
        {calculationMode === 'velocitiesAndDisplacement' && (
          <div>
            <label className="block mb-2">Velocidad angular final (rad/s):</label>
            <input 
              type="number" 
              value={finalAngularVelocity} 
              onChange={(e) => setFinalAngularVelocity(e.target.value)}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              placeholder="Introduce la velocidad angular final"
            />
          </div>
        )}
        
        {calculationMode === 'velocityAndAcceleration' && (
          <div>
            <label className="block mb-2">Aceleración angular (rad/s²):</label>
            <input 
              type="number" 
              value={angularAcceleration} 
              onChange={(e) => setAngularAcceleration(e.target.value)}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              placeholder="Introduce la aceleración angular"
            />
          </div>
        )}
        
        {calculationMode === 'velocityAndAcceleration' && (
          <div>
            <label className="block mb-2">Tiempo (s):</label>
            <input 
              type="number" 
              value={time} 
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              placeholder="Introduce el tiempo"
            />
          </div>
        )}
        
        {calculationMode === 'velocitiesAndDisplacement' && (
          <div>
            <label className="block mb-2">Desplazamiento angular (rad):</label>
            <input 
              type="number" 
              value={angularDisplacement} 
              onChange={(e) => setAngularDisplacement(e.target.value)}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              placeholder="Introduce el desplazamiento angular"
            />
          </div>
        )}
      </div>
      
      <button 
        onClick={calculate}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Calcular
      </button>
      
      <div className="mt-6">
        <h4 className="font-semibold mb-2">Resultados:</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm">Velocidad angular inicial:</p>
            <p className="font-medium">{initialAngularVelocity ? `${initialAngularVelocity} rad/s` : '-'}</p>
          </div>
          <div>
            <p className="text-sm">Velocidad angular final:</p>
            <p className="font-medium">{finalAngularVelocity ? `${finalAngularVelocity} rad/s` : '-'}</p>
          </div>
          <div>
            <p className="text-sm">Aceleración angular:</p>
            <p className="font-medium">{angularAcceleration ? `${angularAcceleration} rad/s²` : '-'}</p>
          </div>
          <div>
            <p className="text-sm">Tiempo:</p>
            <p className="font-medium">{time ? `${time} s` : '-'}</p>
          </div>
          <div>
            <p className="text-sm">Desplazamiento angular:</p>
            <p className="font-medium">{angularDisplacement ? `${angularDisplacement} rad` : '-'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
