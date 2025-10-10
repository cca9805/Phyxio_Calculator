
import { formatNumber } from "../../../utils/formatNumber";

const resolveMassCenter = (state) => {
  const { masses } = state;
  if (!masses || masses.length === 0) {
    return { result: { X_cm: 0, Y_cm: 0, M_total: 0 }, steps: ['Añade una masa para empezar.'], interactive_data: { cm: { x: 0, y: 0 } } };
  }
  const M_total = masses.reduce((acc, p) => acc + p.m, 0);
  if (M_total === 0) {
    return { result: { X_cm: 0, Y_cm: 0, M_total: 0 }, steps: ['La masa total no puede ser cero.'], interactive_data: { cm: { x: 0, y: 0 } } };
  }
  const X_cm = masses.reduce((acc, p) => acc + p.x * p.m, 0) / M_total;
  const Y_cm = masses.reduce((acc, p) => acc + p.y * p.m, 0) / M_total;
  const steps = [
    `M_total = ${masses.map(p => formatNumber(p.m)).join(' + ')} = ${formatNumber(M_total)} kg`,
    `X_cm = Σ(xᵢ·mᵢ) / M_total = ${formatNumber(X_cm)} m`,
    `Y_cm = Σ(yᵢ·mᵢ) / M_total = ${formatNumber(Y_cm)} m`
  ];
  return { result: { X_cm, Y_cm, M_total }, steps, interactive_data: { cm: { x: X_cm, y: Y_cm } } };
};

export const calculators = [
  {
    id: "centro-masa-interactivo-2d",
    type: "interactive-visual",
    title: "Centro de Masa Interactivo (2D)",
    description: "Añade partículas (masas) al lienzo. El Centro de Masa (cruz roja) depende de la posición y la masa de cada partícula.",
    initialState: {
      entityType: 'masses',
      bounds: { x_min: -10, x_max: 10, y_min: -10, y_max: 10 },
      masses: [
        { id: 1, x: 2, y: 5, m: 10 },
        { id: 2, x: -4, y: -3, m: 20 },
        { id: 3, x: 6, y: -1, m: 15 },
      ]
    },
    output: [
      { symbol: "X_cm", label: "Posición X del CM", unit: "m" },
      { symbol: "Y_cm", label: "Posición Y del CM", unit: "m" }
    ],
    resolve: resolveMassCenter
  }
];
