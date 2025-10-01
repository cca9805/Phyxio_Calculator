import React, { useState } from 'react';

export default function MPCalculator() {
  const [initialVelocity, setInitialVelocity] = useState('');
  const [angle, setAngle] = useState('');
  const [initialHeight, setInitialHeight] = useState('');
  const [gravity, setGravity] = useState('9.8');
  const [range, setRange] = useState('');
  const [maxHeight, setMaxHeight] = useState('');
  const [timeOfFlight, setTimeOfFlight] = useState('');

  const calculate = () => {
    if (initialVelocity && angle) {
      const v0 = parseFloat(initialVelocity);
      const theta = parseFloat(angle) * Math.PI / 180; // Convert to radians
      const g = parseFloat(gravity);
      const h0 = initialHeight ? parseFloat(initialHeight) : 0;
      
      const v0x = v0 * Math.cos(theta);
      const v0y = v0 * Math.sin(theta);
      
      // Time of flight
      const t_flight = (v0y + Math.sqrt(v0y * v0y + 2 * g * h0)) / g;
      setTimeOfFlight(t_flight.toFixed(2));
      
      // Range
      const x_range = v0x * t_flight;
      setRange(x_range.toFixed(2));
      
      // Maximum height
      const h_max = h0 + (v0y * v0y) / (2 * g);
      setMaxHeight(h_max.toFixed(2));
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Calculadora de Movimiento Parabólico</h3>
      
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <label className="block mb-2">Velocidad inicial (m/s):</label>
          <input 
            type="number" 
            value={initialVelocity} 
            onChange={(e) => setInitialVelocity(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            placeholder="Introduce la velocidad inicial"
          />
        </div>
        
        <div>
          <label className="block mb-2">Ángulo (grados):</label>
          <input 
            type="number" 
            value={angle} 
            onChange={(e) => setAngle(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            placeholder="Introduce el ángulo"
            min="0"
            max="90"
          />
        </div>
        
        <div>
          <label className="block mb-2">Altura inicial (m):</label>
          <input 
            type="number" 
            value={initialHeight} 
            onChange={(e) => setInitialHeight(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            placeholder="Introduce la altura inicial (opcional)"
          />
        </div>
        
        <div>
          <label className="block mb-2">Gravedad (m/s²):</label>
          <input 
            type="number" 
            value={gravity} 
            onChange={(e) => setGravity(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            placeholder="Gravedad (por defecto 9.8)"
          />
        </div>
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
            <p className="text-sm">Alcance horizontal:</p>
            <p className="font-medium">{range ? `${range} m` : '-'}</p>
          </div>
          <div>
            <p className="text-sm">Altura máxima:</p>
            <p className="font-medium">{maxHeight ? `${maxHeight} m` : '-'}</p>
          </div>
          <div>
            <p className="text-sm">Tiempo de vuelo:</p>
            <p className="font-medium">{timeOfFlight ? `${timeOfFlight} s` : '-'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
