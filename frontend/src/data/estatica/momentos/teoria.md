# Momento de una Fuerza (Torque)

En estática, no solo importa *cuánta* fuerza se aplica, sino también *dónde* se aplica. El **momento**, también conocido como **torque**, es la medida de la capacidad de una fuerza para hacer **girar** un objeto alrededor de un punto o eje. Es, en esencia, una "fuerza de giro".

Piensa en abrir una puerta:
- Es más fácil abrirla empujando lejos de las bisagras (mayor distancia).
- Es más efectivo empujar perpendicularmente a la puerta (ángulo de 90°).
- Si empujas directamente hacia las bisagras (fuerza paralela), la puerta no girará.

Esto captura la esencia del momento.

---

## 1. Cálculo del Momento: La Fórmula Principal

El momento (`M`) se define como el producto de la magnitud de la fuerza (`F`) por el **brazo de palanca** (`d`).

$$ M = F \cdot d $$

Donde:
- **$M$**: Es el momento o torque (medido en Newton-metro, N·m).
- **$F$**: Es la magnitud de la fuerza aplicada (en Newtons, N).
- **$d$**: Es el **brazo de palanca**, definido como la **distancia perpendicular** desde el punto de giro (pivote) hasta la línea de acción de la fuerza.

En muchos casos, la fuerza no se aplica de forma perpendicular. Si tenemos una fuerza `F` aplicada a una distancia `r` del pivote, con un ángulo `θ` entre la línea de `r` y la fuerza, el brazo de palanca `d` se calcula como `d = r · sen(θ)`. Esto nos da la fórmula más general:

$$ M = F \cdot r \cdot \sin(\theta) $$

- **$r$**: Es la distancia directa desde el pivote hasta el punto donde se aplica la fuerza.
- **$\theta$**: Es el ángulo entre la fuerza y la línea de `r`.

---

## 2. Convención de Signos: ¿En qué dirección gira?

El momento puede causar giros en dos direcciones. Para diferenciarlos, usamos una convención de signos estándar:

- **Momento Positivo (+)**: Si la fuerza tiende a causar una rotación en sentido **antihorario** (contrario a las manecillas del reloj).
- **Momento Negativo (-)**: Si la fuerza tiende a causar una rotación en sentido **horario** (como las manecillas del reloj).

Esta convención es crucial para aplicar la **Segunda Condición de Equilibrio**: para que un objeto no rote, la suma de todos los momentos que actúan sobre él debe ser cero.

$$ \sum M = 0 $$

(Momentos antihorarios) = (Momentos horarios)

---

## 3. Teorema de Varignon: El Método de Componentes (¡El más fácil!)

Calcular `r · sen(θ)` puede ser complicado. El **Teorema de Varignon** nos ofrece un método mucho más simple y poderoso: "El momento de una fuerza es igual a la suma de los momentos de sus componentes".

El procedimiento es el siguiente:

1.  Elige un punto de giro (generalmente el origen, `(0,0)`).
2.  Toma la fuerza `F` que está aplicada en un punto `(x, y)`.
3.  Descompón la fuerza en sus componentes horizontal (`F_x`) y vertical (`F_y`).
4.  Calcula el momento de *cada* componente por separado y súmalos.

-   **Momento de $F_y$**: La distancia perpendicular desde el origen a la línea de acción de $F_y$ es `x`. Una $F_y$ positiva tiende a causar un giro **antihorario** (+). Por tanto: $M_{Fy} = + F_y \cdot x$.
-   **Momento de $F_x$**: La distancia perpendicular desde el origen a la línea de acción de $F_x$ es `y`. Una $F_x$ positiva tiende a causar un giro **horario** (-). Por tanto: $M_{Fx} = - F_x \cdot y$.

Sumando ambos, obtenemos la fórmula del momento total respecto al origen `O`:

$$ M_O = (F_y \cdot x) - (F_x \cdot y) $$

Este método evita el uso de senos y cosenos para el momento y es la forma más utilizada en la práctica.

---

## Leyenda General de Símbolos
- **$M, M_O$**: Momento o Torque (N·m).
- **$F$**: Magnitud de la fuerza (N).
- **$d$**: Brazo de palanca o distancia perpendicular (m).
- **$r$**: Distancia directa del pivote al punto de aplicación de la fuerza (m).
- **$\theta$**: Ángulo entre la fuerza y `r` (°).
- **$F_x, F_y$**: Componentes de la fuerza (N).
- **$x, y$**: Coordenadas del punto de aplicación de la fuerza (m).
- **$\sum$**: Símbolo de sumatoria.
