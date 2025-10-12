
# Propuesta Técnica: Calculadoras Visuales e Interactivas

## 1. Motivación

El feedback de los usuarios indica que las calculadoras actuales, basadas en formularios, son poco intuitivas y didácticas. Se propone un nuevo tipo de calculadora `interactive-visual` que reemplace los campos de texto por un lienzo gráfico con manipulación directa, fomentando la exploración y el aprendizaje activo.

## 2. Nueva Estructura de Calculadora

Se propone añadir una propiedad `type` al objeto de la calculadora. El tipo por defecto será `form-based`. El nuevo tipo será `interactive-visual`.

### Ejemplo: `centro-de-masa-interactivo`

```json
{
  "id": "centro-masa-interactivo-2d",
  "type": "interactive-visual", // Propiedad clave que dispara la nueva UI
  "title": "Centro de Masa Interactivo (2D)",
  "description": "Añade masas puntuales al lienzo haciendo clic. Arrástralas para ver cómo cambia el Centro de Masa (CM) en tiempo real.",
  
  // Define el estado inicial de la simulación.
  // La UI usaría esto para renderizar la escena por primera vez.
  "initialState": {
    "bounds": { "x_min": -10, "x_max": 10, "y_min": -10, "y_max": 10 },
    "masses": [
      { "id": 1, "x": 2, "y": 5, "m": 10 },
      { "id": 2, "x": -4, "y": -3, "m": 20 }
    ]
  },
  
  // Define qué resultados se mostrarán al usuario.
  "output": [
    { "symbol": "X_cm", "label": "Posición X del CM", "unit": "m" },
    { "symbol": "Y_cm", "label": "Posición Y del CM", "unit": "m" },
    { "symbol": "M_total", "label": "Masa Total", "unit": "kg" }
  ],

  // La función `resolve` ya no recibe `args` de un formulario.
  // Recibe el `state` actual de la simulación interactiva.
  "resolve": "(state) => {
      const { masses } = state;
      if (!masses || masses.length === 0) {
        return { result: { X_cm: 0, Y_cm: 0, M_total: 0 }, steps: ['Añade una masa para empezar.'] };
      }

      const M_total = masses.reduce((acc, p) => acc + p.m, 0);
      const X_cm = masses.reduce((acc, p) => acc + p.x * p.m, 0) / M_total;
      const Y_cm = masses.reduce((acc, p) => acc + p.y * p.m, 0) / M_total;
      
      const steps = [
        `Masa Total: M = Σm_i = ${M_total.toFixed(2)} kg`,
        `Momento de masa en X: Σ(x_i * m_i) = ${ (X_cm * M_total).toFixed(2) }`,
        `Momento de masa en Y: Σ(y_i * m_i) = ${ (Y_cm * M_total).toFixed(2) }`,
        `X_cm = Σ(x_i * m_i) / M = ${X_cm.toFixed(2)} m`,
        `Y_cm = Σ(y_i * m_i) / M = ${Y_cm.toFixed(2)} m`
      ];

      return { result: { X_cm, Y_cm, M_total }, steps };
  }"
}
```

## 3. Flujo de Interacción

1.  El frontend lee el objeto de la calculadora.
2.  Al ver `"type": "interactive-visual"`, renderiza un componente de lienzo interactivo en lugar de un formulario.
3.  El estado inicial de este componente se carga desde `initialState`.
4.  Cada vez que el usuario interactúa con el lienzo (ej: arrastra una masa), el estado del componente se actualiza.
5.  Este nuevo estado se pasa a la función `resolve`.
6.  El resultado de `resolve` (tanto el `result` como los `steps`) se muestra en la interfaz, actualizándose en tiempo real.

Este enfoque modular permite mantener la lógica de cálculo separada de la interfaz y facilita la creación de nuevas calculadoras interactivas en el futuro.
