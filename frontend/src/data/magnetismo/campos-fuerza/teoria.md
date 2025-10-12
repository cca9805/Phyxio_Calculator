# III.1. Campos y Fuerza Magnética

## El Campo Magnético (B)

A diferencia del campo eléctrico, que es creado por cargas en reposo, el **campo magnético (B)** es generado por cargas eléctricas en movimiento (corrientes). Este campo vectorial llena el espacio y dicta la fuerza que sentirá otra carga en movimiento al pasar por él.

*   **Unidad SI:** Tesla (T). 1 T = 1 N / (A·m).
*   **Líneas de Campo:** Son siempre bucles cerrados. Salen del polo norte y entran al polo sur de un imán. Esto implica que los monopolos magnéticos (polos norte o sur aislados) no existen.

### Fuentes Principales
1.  **Imanes Permanentes:** Materiales ferromagnéticos donde los momentos magnéticos de los átomos están alineados.
2.  **Corrientes Eléctricas:** Cualquier corriente eléctrica genera un campo magnético a su alrededor.

---

## Fuerza Magnética sobre una Carga en Movimiento (Fuerza de Lorentz)

Una carga `q` que se mueve con una velocidad `v` dentro de un campo magnético `B` experimenta una fuerza, conocida como Fuerza de Lorentz.

*   **Forma Vectorial:** La fuerza es el resultado del producto vectorial entre la velocidad y el campo magnético.
    $$ \vec{F}_m = q(\vec{v} \times \vec{B}) $$
*   **Magnitud:** El módulo de la fuerza depende del ángulo `θ` entre el vector de velocidad y el vector de campo magnético.
    $$ F_m = |q|vB \sin(\theta) $$

### Características Clave de la Fuerza Magnética:
*   **Dirección:** La fuerza `F` es siempre **perpendicular** tanto a la velocidad `v` como al campo `B`. Se determina usando la **Regla de la Mano Derecha**.
    1.  Apunta tus dedos en la dirección de la velocidad `v`.
    2.  Enróllalos hacia la dirección del campo `B`.
    3.  Tu pulgar apuntará en la dirección de la fuerza `F` (si la carga `q` es positiva). Si es negativa, la fuerza va en sentido opuesto.
*   **Trabajo Cero:** Como la fuerza es siempre perpendicular al desplazamiento, **la fuerza magnética no realiza trabajo**. No puede cambiar la energía cinética de una partícula, solo puede cambiar su dirección.
*   **Fuerza Máxima:** Ocurre cuando `v` y `B` son perpendiculares (`θ = 90°`, `sin(90°)=1`).
*   **Fuerza Nula:** Ocurre cuando `v` y `B` son paralelos o antiparalelos (`θ = 0°` o `θ = 180°`). Una carga que se mueve en la misma dirección que el campo magnético no siente ninguna fuerza.

---

## Movimiento de una Carga en un Campo Magnético Uniforme

Cuando una carga entra perpendicularmente a un campo magnético uniforme, la fuerza magnética actúa como una fuerza centrípeta, forzando a la partícula a seguir una **trayectoria circular**.

Igualando la fuerza magnética (con `sin(θ)=1`) y la fuerza centrípeta:
$$ |q|vB = \frac{mv^2}{r} $$

De esta igualdad, podemos despejar propiedades clave del movimiento:

*   **Radio de la órbita (Radio de Larmor):**
    $$ r = \frac{mv}{|q|B} $$
    El radio es proporcional al momento de la partícula (`mv`) e inversamente proporcional a la intensidad del campo `B`.

*   **Frecuencia Angular (Frecuencia de Ciclotrón):**
    $$ \omega = \frac{v}{r} = \frac{|q|B}{m} $$
    Notablemente, la frecuencia angular (y el período `T = 2π/ω`) no depende de la velocidad ni del radio de la órbita. Partículas más rápidas trazan círculos más grandes, pero tardan el mismo tiempo en completarlos.

---

## Fuerza Magnética sobre un Conductor con Corriente

Un alambre que transporta una corriente `I` no es más que un conjunto de cargas en movimiento. Por lo tanto, un alambre inmerso en un campo magnético también experimenta una fuerza.

Para un segmento de alambre recto de longitud `L` que transporta una corriente `I` en un campo `B` uniforme:

*   **Forma Vectorial:**
    $$ \vec{F}_m = I (\vec{L} \times \vec{B}) $$
    Donde `L` es un vector cuya magnitud es la longitud del alambre y su dirección es la de la corriente.

*   **Magnitud:**
    $$ F_m = I L B \sin(\theta) $$
    Donde `θ` es el ángulo entre la dirección de la corriente y el campo magnético.
