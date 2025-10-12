# III.3. Inducción Magnética

Hasta ahora, hemos visto que las corrientes eléctricas crean campos magnéticos. La **inducción electromagnética** revela la otra cara de la moneda: un campo magnético *cambiante* puede crear una corriente eléctrica. Este fenómeno, descubierto por Michael Faraday, es la base de los generadores eléctricos, transformadores y muchas otras tecnologías.

---

## Flujo Magnético (Φ_B)

Antes de entender la inducción, necesitamos el concepto de **flujo magnético**. Es una medida de la cantidad de campo magnético que atraviesa una superficie.

*   **Definición:** Para un campo magnético `B` uniforme que atraviesa un área `A`, el flujo magnético es:
    $$ \Phi_B = B A \cos(\theta) $$
    *   `B`: Magnitud del campo magnético.
    *   `A`: Área de la superficie.
    *   `θ`: Ángulo entre el vector del campo magnético `B` y la **normal** (perpendicular) al plano del área `A`.

*   **Unidad SI:** Weber (Wb). 1 Wb = 1 T·m².

*   **Interpretación:**
    *   El flujo es máximo cuando el campo es perpendicular a la superficie (`θ = 0°`).
    *   El flujo es cero cuando el campo es paralelo a la superficie (`θ = 90°`).

---

## Ley de Faraday de la Inducción

La Ley de Faraday establece que un **cambio en el flujo magnético** a través de una espira de alambre induce una **fuerza electromotriz (FEM o ε)**, que es, en esencia, un voltaje.

*   **Forma Matemática:** La FEM inducida es igual a la tasa de cambio negativa del flujo magnético.
    $$ \varepsilon = -\frac{d\Phi_B}{dt} $$

*   **Si la bobina tiene N vueltas:**
    $$ \varepsilon = -N \frac{d\Phi_B}{dt} $$

### ¿Cómo se puede cambiar el flujo magnético (dΦ_B/dt ≠ 0)?

Recordando que `Φ_B = BAcos(θ)`, hay tres maneras principales de inducir una FEM:
1.  **Cambiar la magnitud del campo magnético (B):** Acercar o alejar un imán de una espira.
2.  **Cambiar el área de la espira (A):** Expandir o contraer una espira dentro de un campo magnético.
3.  **Cambiar el ángulo (θ):** Girar una espira dentro de un campo magnético. Este es el principio de funcionamiento de los **generadores eléctricos**.

---

## Ley de Lenz

El signo negativo en la Ley de Faraday es crucial y tiene un significado físico profundo, descrito por la **Ley de Lenz**.

*   **Enunciado:** La corriente inducida en una espira fluirá en una dirección tal que **crea un campo magnético que se opone al cambio en el flujo magnético que la produjo**.

*   **Principio de Conservación de Energía:** La Ley de Lenz es una consecuencia de la conservación de la energía. Si la corriente inducida reforzara el cambio de flujo, se crearía energía de la nada, violando las leyes de la física. El campo inducido debe oponerse para que se requiera trabajo para inducir la corriente.

### Ejemplo Práctico:
*   **Situación:** El polo norte de un imán se acerca a una espira.
*   **Análisis del Flujo:** El flujo magnético a través de la espira (dirigido hacia abajo) está aumentando.
*   **Oposición (Ley de Lenz):** La espira debe generar un campo magnético inducido (B_ind) que se oponga a este aumento. Por lo tanto, B_ind debe apuntar hacia arriba.
*   **Dirección de la Corriente:** Usando la Regla de la Mano Derecha (versión para corrientes), para crear un campo hacia arriba, la corriente inducida `I_ind` en la espira debe fluir en **sentido antihorario** (vista desde arriba).


