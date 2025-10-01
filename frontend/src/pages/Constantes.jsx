import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout';
import { PHYSICAL_CONSTANTS, MECHANICS_CONSTANTS, THERMODYNAMICS_CONSTANTS, ELECTROMAGNETISM_CONSTANTS, OPTICS_CONSTANTS } from '../utils/constants'
import { formatScientific } from '../utils/units'

export default function Constantes() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = {
    all: 'Todas',
    universal: 'Constantes Universales',
    earth: 'Constantes de la Tierra',
    electromagnetic: 'Constantes Electromagnéticas',
    thermodynamic: 'Constantes Termodinámicas',
    acoustic: 'Constantes Acústicas',
    mechanics: 'Constantes de Mecánica',
    optics: 'Constantes Ópticas'
  }

  const constantsData = [
    {
      category: 'universal',
      name: 'Constante Gravitacional',
      symbol: 'G',
      value: PHYSICAL_CONSTANTS.GRAVITATIONAL_CONSTANT,
      unit: 'm³/kg·s²',
      description: 'Constante que aparece en la ley de gravitación universal de Newton'
    },
    {
      category: 'universal',
      name: 'Velocidad de la Luz',
      symbol: 'c',
      value: PHYSICAL_CONSTANTS.SPEED_OF_LIGHT,
      unit: 'm/s',
      description: 'Velocidad máxima a la que puede viajar la información en el universo'
    },
    {
      category: 'universal',
      name: 'Constante de Planck',
      symbol: 'h',
      value: PHYSICAL_CONSTANTS.PLANCK_CONSTANT,
      unit: 'J·s',
      description: 'Constante fundamental de la mecánica cuántica'
    },
    {
      category: 'universal',
      name: 'Constante de Boltzmann',
      symbol: 'k',
      value: PHYSICAL_CONSTANTS.BOLTZMANN_CONSTANT,
      unit: 'J/K',
      description: 'Relaciona la energía cinética promedio de las partículas con la temperatura'
    },
    {
      category: 'earth',
      name: 'Aceleración de la Gravedad',
      symbol: 'g',
      value: PHYSICAL_CONSTANTS.EARTH_GRAVITY,
      unit: 'm/s²',
      description: 'Aceleración que experimentan los objetos cerca de la superficie terrestre'
    },
    {
      category: 'earth',
      name: 'Masa de la Tierra',
      symbol: 'M⊕',
      value: PHYSICAL_CONSTANTS.EARTH_MASS,
      unit: 'kg',
      description: 'Masa total del planeta Tierra'
    },
    {
      category: 'earth',
      name: 'Radio de la Tierra',
      symbol: 'R⊕',
      value: PHYSICAL_CONSTANTS.EARTH_RADIUS,
      unit: 'm',
      description: 'Radio promedio del planeta Tierra'
    },
    {
      category: 'electromagnetic',
      name: 'Permitividad del Vacío',
      symbol: 'ε₀',
      value: PHYSICAL_CONSTANTS.VACUUM_PERMITTIVITY,
      unit: 'F/m',
      description: 'Constante que relaciona el campo eléctrico con la densidad de carga'
    },
    {
      category: 'electromagnetic',
      name: 'Permeabilidad del Vacío',
      symbol: 'μ₀',
      value: PHYSICAL_CONSTANTS.VACUUM_PERMEABILITY,
      unit: 'H/m',
      description: 'Constante que relaciona el campo magnético con la corriente eléctrica'
    },
    {
      category: 'electromagnetic',
      name: 'Carga Elemental',
      symbol: 'e',
      value: PHYSICAL_CONSTANTS.ELEMENTARY_CHARGE,
      unit: 'C',
      description: 'Carga eléctrica de un protón o electrón'
    },
    {
      category: 'thermodynamic',
      name: 'Número de Avogadro',
      symbol: 'Nₐ',
      value: PHYSICAL_CONSTANTS.AVOGADRO_NUMBER,
      unit: 'mol⁻¹',
      description: 'Número de partículas en un mol de sustancia'
    },
    {
      category: 'thermodynamic',
      name: 'Constante de los Gases',
      symbol: 'R',
      value: PHYSICAL_CONSTANTS.GAS_CONSTANT,
      unit: 'J/(mol·K)',
      description: 'Constante que aparece en la ecuación de estado de los gases ideales'
    },
    {
      category: 'thermodynamic',
      name: 'Constante de Stefan-Boltzmann',
      symbol: 'σ',
      value: PHYSICAL_CONSTANTS.STEFAN_BOLTZMANN,
      unit: 'W/(m²·K⁴)',
      description: 'Constante que relaciona la potencia radiada con la temperatura'
    },
    {
      category: 'acoustic',
      name: 'Velocidad del Sonido en Aire',
      symbol: 'vₛₐ',
      value: PHYSICAL_CONSTANTS.SPEED_OF_SOUND_AIR,
      unit: 'm/s',
      description: 'Velocidad de propagación del sonido en aire a 20°C'
    },
    {
      category: 'acoustic',
      name: 'Velocidad del Sonido en Agua',
      symbol: 'vₛᵥ',
      value: PHYSICAL_CONSTANTS.SPEED_OF_SOUND_WATER,
      unit: 'm/s',
      description: 'Velocidad de propagación del sonido en agua'
    },
    {
      category: 'mechanics',
      name: 'Número Pi',
      symbol: 'π',
      value: MECHANICS_CONSTANTS.PI,
      unit: '',
      description: 'Razón entre la circunferencia y el diámetro de un círculo'
    },
    {
      category: 'mechanics',
      name: 'Número de Euler',
      symbol: 'e',
      value: MECHANICS_CONSTANTS.EULER_NUMBER,
      unit: '',
      description: 'Base de los logaritmos naturales'
    },
    {
      category: 'optics',
      name: 'Índice de Refracción del Aire',
      symbol: 'n',
      value: OPTICS_CONSTANTS.REFRACTIVE_INDEX_AIR,
      unit: '',
      description: 'Índice de refracción del aire a condiciones estándar'
    },
    {
      category: 'optics',
      name: 'Índice de Refracción del Agua',
      symbol: 'n',
      value: OPTICS_CONSTANTS.REFRACTIVE_INDEX_WATER,
      unit: '',
      description: 'Índice de refracción del agua'
    },
    {
      category: 'optics',
      name: 'Índice de Refracción del Vidrio',
      symbol: 'n',
      value: OPTICS_CONSTANTS.REFRACTIVE_INDEX_GLASS,
      unit: '',
      description: 'Índice de refracción típico del vidrio'
    }
  ]

  const filteredConstants = constantsData.filter(constant => {
    const matchesSearch = constant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         constant.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         constant.description.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'all' || constant.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  // renderiza una constante como una "formula-card" (coherente con despliegues de fórmulas)
  const renderConstItem = (c) => {
    if (!c) return null;
    return (
      <div key={c.symbol || c.name} className="formula-card" style={{ marginBottom: '0.75rem', padding: '0.75rem', background: 'blue', color: '#fff', borderRadius: 8 }}>
        <div className="formula-title" style={{ fontWeight: 700, marginBottom: '0.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff' }}>
          <span>{c.name}</span>
          <span style={{ fontFamily: 'monospace', fontSize: 18, color: '#a8def0' }}>{c.symbol}</span>
        </div>

        <div className="formula-expression" style={{ marginTop: '0.25rem', backgroundColor: 'navy' }}>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'monospace', color: '#e6f7ff' }}>{formatScientific(c.value, 6)}{c.unit ? ` ${c.unit}` : ''}</pre>
        </div>

        {c.description ? <div className="formula-desc" style={{ marginTop: '0.5rem', color: 'rgba(255,255,255,0.85)' }}>{c.description}</div> : null}

        <div style={{ marginTop: '0.5rem', display: 'flex', gap: 8, alignItems: 'center' }}>
          <span className="badge" style={{ fontSize: 12, padding: '4px 8px', borderRadius: 6, background: 'rgba(255,255,255,0.06)', color: '#dbefff', border: '1px solid rgba(255,255,255,0.04)' }}>
            {categories[c.category] || 'Otras'}
          </span>
        </div>
      </div>
    );
  };

  return (
    <Layout title="Constantes Físicas" intro="Referencia completa de las constantes físicas fundamentales utilizadas en los cálculos.">
      <div className="p-4 space-y-6">
        {/* Header */}
        <div className="card flex flex-col p-4">
          <div className="flex items-center justify-between mb-4 bg-blue-300 p-4 rounded"> 
            <div>
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <i className="bi bi-calculator text-purple-600"></i>
                Constantes Físicas
              </h2>
              <p className="text-gray-300">
                Referencia completa de las constantes físicas fundamentales utilizadas en los cálculos.
              </p>
            </div>
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-navy-400 p-6 rounded shadow mb-2 mx-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Buscar constante:
              </label>
              <input
                type="text"
                placeholder="Buscar por nombre, símbolo o descripción..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categoría:
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {Object.entries(categories).map(([key, value]) => (
                  <option key={key} value={key}>{value}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Resultados */}
        <div className="bg-navy-400 p-6 rounded shadow mb-2 mx-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Constantes Encontradas ({filteredConstants.length})
            </h2>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-purple-600 hover:text-purple-800 text-sm underline"
              >
                Limpiar búsqueda
              </button>
            )}
          </div>

          {filteredConstants.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <i className="bi bi-search text-4xl mb-2"></i>
              <p>No se encontraron constantes que coincidan con tu búsqueda.</p>
            </div>
          ) : (
            <div className="formulas-grid">
              {filteredConstants.map(c => renderConstItem(c))}
            </div>
          )}
        </div>

        {/* Información adicional */}
        <div className="bg-navy-400 p-6 rounded shadow mb-2 mx-12">
          <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center gap-2">
            <i className="bi bi-info-circle-fill"></i>
            Información sobre las Constantes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-700">
            <div>
              <h4 className="font-medium mb-2">Precisión:</h4>
              <p>Los valores mostrados tienen la precisión recomendada por CODATA (Committee on Data for Science and Technology).</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Unidades:</h4>
              <p>Todas las constantes están expresadas en unidades del Sistema Internacional (SI).</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}