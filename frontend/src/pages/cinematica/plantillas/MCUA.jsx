import React, { useState } from 'react';
import SubtopicShell from '../../../../components/layout/SubtopicShell';
import { createSubtopicProps } from '../../../../utils/subtopicoHelper';
import { calculatorConfigs } from '../../../../components/cinematica/calculatorConfigs';

// Importa los datos
import {
  teoriaMCUA,
  ejerciciosMCUA,
  simuladorMCUA
} from '../../../../data/cinematica/mcua';

// Importar componentes
import examplesFromFile from './MCUASections/Examples';
import TheoryComponent from './MCUASections/Theory';

// Obtener la configuración de MCUA
const mcuaConfig = calculatorConfigs.mcua;

function Calculator() {
  const [values, setValues] = useState({});
  const [result, setResult] = useState(null);
  const [selectedMode, setSelectedMode] = useState(mcuaConfig.modes[0].id);
  
  const currentMode = mcuaConfig.modes.find(mode => mode.id === selectedMode);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleCalculate = () => {
    if (!currentMode) return;
    
    try {
      const result = currentMode.calculate(values);
      setResult(result);
    } catch (error) {
      setResult({
        result: 'Error',
        unit: '',
        additionalInfo: 'Hubo un error al calcular. Verifica los valores ingresados.'
      });
    }
  };
  
  const handleReset = () => {
    setValues({});
    setResult(null);
  };
  
  const handleModeChange = (e) => {
    setSelectedMode(e.target.value);
    setValues({});
    setResult(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-blue-700 dark:text-blue-300">
        {mcuaConfig.title}
      </h2>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Selecciona una fórmula:
        </label>
        <select
          value={selectedMode}
          onChange={handleModeChange}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        >
          {mcuaConfig.modes.map((mode) => (
            <option key={mode.id} value={mode.id}>
              {mode.title}
            </option>
          ))}
        </select>
        {currentMode?.description && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {currentMode.description}
          </p>
        )}
      </div>
      
      <div className="space-y-4 mb-6">
        {currentMode.inputs.map((input) => (
          <div key={input.name}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {input.label} {input.unit && `(${input.unit})`}:
            </label>
            <input
              type={input.type || 'number'}
              name={input.name}
              value={values[input.name] || ''}
              onChange={handleInputChange}
              placeholder={input.placeholder || ''}
              min={input.min}
              step={input.step || 'any'}
              required={input.required}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
        ))}
      </div>
      
      <div className="flex space-x-4">
        <button
          onClick={handleCalculate}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-600"
        >
          Calcular
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
        >
          Reiniciar
        </button>
      </div>
      
      {result && (
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-md">
          <h3 className="text-lg font-medium text-blue-800 dark:text-blue-200 mb-2">
            Resultado:
          </h3>
          <p className="text-2xl font-bold text-blue-900 dark:text-blue-100">
            {result.result} <span className="text-lg">{result.unit}</span>
          </p>
          {result.additionalInfo && (
            <div className="mt-2 text-sm text-blue-700 dark:text-blue-300 whitespace-pre-line">
              {result.additionalInfo}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function MCUA() {
  const subtopicProps = createSubtopicProps({
    title: "Movimiento Circular Uniformemente Acelerado",
    intro: <p>Movimiento en trayectoria circular con aceleración angular constante.</p>,
    headerVariant: "mp",
    sectionVariant: "card",
    backLink: { to: '/clasica/mecanica/cinematica', label: 'Volver a Cinemática' },
    
    teoria: <TheoryComponent />,
    
    ejemplos: examplesFromFile,
    ejercicios: ejerciciosMCUA,
    simulador: simuladorMCUA
  });

  return <SubtopicShell {...subtopicProps} />;
}