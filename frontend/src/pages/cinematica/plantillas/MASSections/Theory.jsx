export default function Theory() {
  return (
    <div className="space-y-4">
      <p className="leading-relaxed">
        El Movimiento Armónico Simple es un tipo de movimiento oscilatorio en el que un cuerpo se mueve de un lado a otro bajo la acción de una fuerza restauradora proporcional al desplazamiento. Es el movimiento fundamental de resortes, péndulos y muchos sistemas físicos.
      </p>
      <div>
        <h4 className="font-semibold mb-2" style={{ color: 'var(--text)' }}>Conceptos Clave</h4>
        <ul className="list-disc list-inside theme-text-muted">
          <li>La fuerza restauradora es proporcional al desplazamiento: F = -kx</li>
          <li>La aceleración es proporcional y opuesta al desplazamiento: a = -ω²x</li>
          <li>La energía total se conserva (cinética + potencial)</li>
          <li>El movimiento es periódico con período constante</li>
          <li>La amplitud es la máxima distancia desde la posición de equilibrio</li>
          <li>La fase determina la posición inicial del movimiento</li>
        </ul>
      </div>
    </div>
  )
}
