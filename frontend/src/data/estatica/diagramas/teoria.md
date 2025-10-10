
# Diagramas de Cuerpo Libre (DCL)

Un **diagrama de cuerpo libre (DCL)** es una representación gráfica simplificada de un objeto aislado en la que se muestran todas las fuerzas externas que actúan sobre él. Es una herramienta fundamental en estática para aplicar las leyes de Newton y resolver problemas de equilibrio.

---

## Pasos para Crear un DCL

1.  **Aislar el objeto:** Identifica el cuerpo de interés y sepáralo mentalmente de su entorno.
2.  **Dibujar el objeto:** Representa el objeto de forma esquemática, como un punto o un contorno.
3.  **Identificar y dibujar las fuerzas:** Dibuja todas las fuerzas externas que actúan sobre el objeto. No incluyas las fuerzas internas (dentro del objeto) ni las que el objeto ejerce sobre otros.
4.  **Etiquetar las fuerzas:** Asigna un nombre claro a cada fuerza (por ejemplo, T para tensión, N para normal, W para peso) y, si es posible, su dirección y magnitud.

---

## Fuerzas Comunes en Estática

-   **Peso (W):** La fuerza de la gravedad, que siempre actúa verticalmente hacia abajo. Se calcula como $W = mg$, donde $m$ es la masa y $g$ es la aceleración de la gravedad.
-   **Fuerza Normal (N):** La fuerza de contacto ejercida por una superficie sobre un objeto. Es siempre perpendicular a la superficie.
-   **Tensión (T):** La fuerza que se transmite a través de una cuerda, cable o cadena cuando es tirado por fuerzas que actúan desde extremos opuestos.
-   **Fricción (f):** La fuerza que se opone al movimiento (o al intento de movimiento) entre superficies en contacto. Es paralela a la superficie.

---

## Ejemplo 1: Bloque en un Plano Inclinado

Imagina un bloque en reposo sobre un plano inclinado un ángulo $\theta$. Las fuerzas que actúan sobre el bloque son:

-   **Peso (W):** Verticalmente hacia abajo.
-   **Fuerza Normal (N):** Perpendicular al plano inclinado.
-   **Fuerza de Fricción (f):** Paralela al plano, oponiéndose al deslizamiento hacia abajo.

Al descomponer el peso en componentes paralela ($W_\parallel = W \sin(\theta)$) y perpendicular ($W_\perp = W \cos(\theta)$) al plano, las condiciones de equilibrio son:

$$ \sum F_x = f - W_\parallel = 0 $$
$$ \sum F_y = N - W_\perp = 0 $$

---

## Ejemplo 2: Sistema de Poleas

En un sistema con una polea que sostiene un peso (W) mediante una cuerda, si el sistema está en equilibrio, el DCL del peso muestra dos fuerzas:

-   **Peso (W):** Hacia abajo.
-   **Tensión (T):** Hacia arriba, ejercida por la cuerda.

La condición de equilibrio es simplemente:

$$ \sum F_y = T - W = 0 \implies T = W $$

---

## Importancia del DCL

El DCL es el primer paso y el más crucial para resolver la mayoría de los problemas en estática y dinámica. Permite visualizar claramente las fuerzas y aplicar correctamente las ecuaciones de equilibrio para encontrar incógnitas como tensiones, reacciones en apoyos o fuerzas de fricción.
