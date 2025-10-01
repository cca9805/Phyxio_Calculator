import React, { useState } from 'react';

export default function MASCalculator() {
  const [mass, setMass] = useState('');
  const [springConstant, setSpringConstant] = useState('');
  const [amplitude, setAmplitude] = useState('');
  const [period, setPeriod] = useState('');
  const [frequency, setFrequency] = useState('');
  const [angularFrequency, setAngularFrequency] = useState('');
  const [energy, setEnergy] = useState('');
  const [calculationMode, setCalculationMode] = useState('massAndConstant');

  const calculate = () => {
    switch(calculationMode) {
      case 'massAndConstant':
        if (mass && springConstant) {
          const m = parseFloat(mass);
          const k = parseFloat(springConstant);
          
          const w = Math.sqrt(k / m);
          setAngularFrequency(w.toFixed(2));
          
          const f = w / (2 * Math.PI);
          setFrequency(f.toFixed(2));
          
          const T = 1 / f;
          setPeriod(T.toFixed(2));
          
          if (amplitude) {
            const A = parseFloat(amplitude);
            const E = 0.5 * k * A * A;
            setEnergy(E.toFixed(2));
          }
        }
        break;
      
      case 'periodAndMass':
        if (period && mass) {
          const T = parseFloat(period);
          const m = parseFloat(mass);
          
          const f = 1 / T;
          setFrequency(f.toFixed(2));
          
          const w = 2 * Math.PI * f;
          setAngularFrequency(w.toFixed(2));
          
          const k = m * w * w;
          setSpringConstant(k.toFixed(2));
          
          if (amplitude) {
            const A = parseFloat(amplitude);
            const E = 0.5 * k * A * A;
            setEnergy(E.toFixed(2));
          }
        }
        break;
    }
  };

  const resetFields = () => {
    setMass('');
    setSpringConstant('');
    setAmplitude('');
    setPeriod('');
    setFrequency('');
    setAngularFrequency('');
    setEnergy('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Calculadora de MAS</h3>
      
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
          <option value="massAndConstant">Masa y constante del resorte</option>
          <option value="periodAndMass">Periodo y masa</option>
        </select>
      </div>
      
      {/* Input fields based on calculation mode */}
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <label className="block mb-2">Masa (kg):</label>
          <input 
            type="number" 
            value={mass} 
            onChange={(e) => setMass(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            placeholder="Introduce la masa"
          />
        </div>
        
        {calculationMode === 'massAndConstant' && (
          <div>
            <label className="block mb-2">Constante del resorte (N/m):</label>
            <input 
              type="number" 
              value={springConstant} 
              onChange={(e) => setSpringConstant(e.target.value)}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              placeholder="Introduce la constante del resorte"
            />
          </div>
        )}
        
        {calculationMode === 'periodAndMass' && (
          <div>
            <label className="block mb-2">Periodo (s):</label>
            <input 
              type="number" 
              value={period} 
              onChange={(e) => setPeriod(e.target.value)}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
              placeholder="Introduce el periodo"
            />
          </div>
        )}
        
        <div>
          <label className="block mb-2">Amplitud (m):</label>
          <input 
            type="number" 
            value={amplitude} 
            onChange={(e) => setAmplitude(e.target.value)}
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
            placeholder="Introduce la amplitud (opcional)"
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
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm">Periodo:</p>
            <p className="font-medium">{period ? `${period} s` : '-'}</p>
          </div>
          <div>
            <p className="text-sm">Frecuencia:</p>
            <p className="font-medium">{frequency ? `${frequency} Hz` : '-'}</p>
          </div>
          <div>
            <p className="text-sm">Frecuencia angular:</p>
            <p className="font-medium">{angularFrequency ? `${angularFrequency} rad/s` : '-'}</p>
          </div>
          <div>
            <p className="text-sm">Constante del resorte:</p>
            <p className="font-medium">{springConstant ? `${springConstant} N/m` : '-'}</p>
          </div>
          <div>
            <p className="text-sm">Energía:</p>
            <p className="font-medium">{energy ? `${energy} J` : '-'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
