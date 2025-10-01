export const calculators = [
  {
    id: 'descomposicion-fuerzas',
    title: 'Calculadora de descomposición de fuerzas',
    expr: 'F = Math.sqrt(Fx * Fx + Fy * Fy)',
    latex: 'F = \\sqrt{F_x^2 + F_y^2}',
    vars: [
      { name: 'Fx', label: 'Componente en x (Fₓ)', unit: 'N', example: '3' },
      { name: 'Fy', label: 'Componente en y (Fᵧ)', unit: 'N', example: '4' }
    ],
    output: { name: 'F', label: 'Fuerza total', unit: 'N' }
  }
];

export default calculators;
