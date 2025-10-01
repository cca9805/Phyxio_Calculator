import React, { useState } from 'react';

export default function Calculator() {
  const [velocity1, setVelocity1] = useState('');
  const [velocity2, setVelocity2] = useState('');
  const [angle, setAngle] = useState('');
  const [relativeVelocity, setRelativeVelocity] = useState('');
  const [calculationMode, setCalculationMode] = useState('1d');

  const calculate = () => {
    if (calculationMode === '1d') {
      if (velocity1 && velocity2) {
        const v1 = parseFloat(velocity1);
        const v2 = parseFloat(velocity2);
        setRelativeVelocity((v1 + v2).toFixed(2));
      }
    } else if (calculationMode === '2d') {
      if (velocity1 && velocity2 && angle) {
        const v1 = parseFloat(velocity1);
        const v2 = parseFloat(velocity2);
        const angleRad = parseFloat(angle) * Math.PI / 180;
        
        // Usando la ley de cosenos para calcular la velocidad relativa
        const relVel = Math.sqrt(v1*v1 + v2*v2 - 2*v1*v2*Math.cos(angleRad));
        setRelativeVelocity(relVel.toFixed(2));
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Calculadora de Movimiento Relativo</h3>
      
      <div className="mb-4">
        <label className="block mb-2">Modo de cálculo:</label>
        <select 
          value={calculationMode}
          onChange={(e) => setCalculationMode(e.target.value)}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
        >
          <option value="1d">Movimiento relativo 1D</option>
          <option value="2d">Movimiento relativo 2D</option>
        </select>
      </div>
      
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <label className="block mb-2">Velocidad 1 (m/s):</label>
          <input 
            type="number" 
            value={velocity1} 
            onChange={(e) => setVelocity1(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            placeholder="Introduce la velocidad 1"
          />
        </div>
        
        <div>
          <label className="block mb-2">Velocidad 2 (m/s):</label>
          <input 
            type="number" 
            value={velocity2} 
            onChange={(e) => setVelocity2(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            placeholder="Introduce la velocidad 2"
          />
        </div>
        
        {calculationMode === '2d' && (
          <div>
            <label className="block mb-2">Ángulo entre velocidades (grados):</label>
            <input 
              type="number" 
              value={angle} 
              onChange={(e) => setAngle(e.target.value)}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              placeholder="Introduce el ángulo"
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
        <div className="grid grid-cols-1 gap-4">
          <div>
            <p className="text-sm">Velocidad relativa:</p>
            <p className="font-medium">{relativeVelocity ? `${relativeVelocity} m/s` : '-'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
