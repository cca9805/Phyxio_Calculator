
# Vectores y Descomposición

Un **vector** es una herramienta matemática que se utiliza en física para describir magnitudes que tienen tanto una magnitud (un valor numérico) como una dirección. Las fuerzas, la velocidad y la aceleración son ejemplos de magnitudes vectoriales.

---

## Representación de Vectores

Un vector se representa gráficamente como una flecha. La longitud de la flecha indica su **magnitud** y la punta de la flecha indica su **dirección**.

Analíticamente, un vector en un plano bidimensional se puede expresar en términos de sus componentes cartesianas $(V_x, V_y)$:

$$ \vec{V} = V_x \hat{i} + V_y \hat{j} $$

Donde $\hat{i}$ y $\hat{j}$ son los vectores unitarios en las direcciones x e y, respectivamente.

---

## Descomposición de un Vector

La **descomposición** de un vector consiste en encontrar sus componentes a lo largo de los ejes de un sistema de coordenadas. Si conocemos la magnitud del vector $|\vec{V}|$ y el ángulo $\theta$ que forma con el eje x, sus componentes se calculan como:

-   **Componente x:** $ V_x = |\vec{V}| \cos(\theta) $
-   **Componente y:** $ V_y = |\vec{V}| \sin(\theta) $

Este proceso es fundamental para sumar fuerzas que actúan en diferentes direcciones.

---

## Suma y Resta de Vectores

Para sumar o restar vectores, primero se descomponen en sus componentes. Luego, se suman o restan las componentes correspondientes:

Si $\vec{A} = A_x \hat{i} + A_y \hat{j}$ y $\vec{B} = B_x \hat{i} + B_y \hat{j}$, entonces el vector resultante $\vec{R}$ es:

$$ \vec{R} = \vec{A} + \vec{B} = (A_x + B_x) \hat{i} + (A_y + B_y) \hat{j} $$

La magnitud y dirección del vector resultante se pueden encontrar usando el teorema de Pitágoras y la trigonometría:

-   **Magnitud:** $|\vec{R}| = \sqrt{R_x^2 + R_y^2}$
-   **Dirección:** $\theta = \arctan\left(\frac{R_y}{R_x}\right)$

---

## Aplicación en Estática

En estática, la descomposición de vectores es crucial para analizar las fuerzas. La primera condición de equilibrio establece que la suma vectorial de todas las fuerzas que actúan sobre un cuerpo debe ser cero. Para verificar esto, se descomponen todas las fuerzas y se suman sus componentes por separado:

$$ \sum F_x = 0 $$
$$ \sum F_y = 0 $$

Esto asegura que el cuerpo no se acelere ni en la dirección horizontal ni en la vertical.
