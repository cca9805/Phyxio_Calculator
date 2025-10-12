# Teoría: Apoyos y Reacciones en Estructuras

En ingeniería y estática, no queremos que las estructuras (como puentes, vigas o edificios) se muevan, caigan o giren sin control. Para asegurar su estabilidad, las conectamos al suelo o a otras partes de la estructura usando **apoyos**.

Un **apoyo** es un elemento que restringe uno o más tipos de movimiento. Como respuesta a las fuerzas externas (como el peso, el viento, etc.) que actúan sobre la estructura, el apoyo ejerce fuerzas y/o momentos para anularlas. A estas fuerzas y momentos generados por los apoyos los llamamos **reacciones**.

El tipo de reacción que un apoyo puede generar depende del tipo de movimiento que restringe.

---

## Tipos de Apoyos y sus Reacciones (en 2D)

Existen tres tipos principales de apoyos en el análisis de estructuras en dos dimensiones:

### 1. Apoyo de Rodillo (o Móvil)

Este apoyo impide el movimiento en una sola dirección, permitiendo la traslación paralela a la superficie de apoyo y la rotación libre.

- **Restricción:** Impide la traslación perpendicular a la superficie sobre la que rueda.
- **Reacción:** Genera **una única fuerza** perpendicular a la superficie de apoyo. Comúnmente la llamamos $R_y$ si el rodillo está sobre una superficie horizontal.
- **Analogía:** Imagina un patinete o un carrito. Puede moverse libremente hacia adelante y atrás, pero no puede atravesar el suelo.

### 2. Apoyo de Pasador (o Articulación)

Este apoyo impide cualquier tipo de traslación (movimiento en el plano), pero permite que la estructura rote libremente alrededor de él.

- **Restricción:** Impide la traslación horizontal y vertical.
- **Reacciones:** Genera **dos fuerzas**, una horizontal ($R_x$) y una vertical ($R_y$), para impedir el movimiento en cualquier dirección del plano.
- **Analogía:** Piensa en la bisagra de una puerta. La puerta puede girar (rotar), pero no puede moverse hacia arriba, abajo, a la izquierda o a la derecha.

### 3. Apoyo Fijo (o Empotramiento)

Este es el tipo de apoyo más restrictivo. Impide cualquier tipo de movimiento: traslación y rotación.

- **Restricción:** Impide la traslación horizontal, la traslación vertical y la rotación.
- **Reacciones:** Genera **dos fuerzas** ($R_x$ y $R_y$) y **un momento** ($M$). El momento es la reacción que impide que la estructura gire.
- **Analogía:** Un poste de señal de tráfico anclado firmemente en una base de hormigón. El poste no puede moverse en ninguna dirección ni inclinarse (rotar).

---

## Cálculo de Reacciones: Las Ecuaciones de Equilibrio

Para que una estructura esté quieta (en equilibrio), la suma total de todas las fuerzas y todos los momentos que actúan sobre ella debe ser cero. Para calcular las reacciones desconocidas, usamos las tres **ecuaciones de equilibrio**:

1.  **Suma de fuerzas en el eje X es cero:**
    $$ \sum F_x = 0 $$
    *Esto significa que la suma de todas las fuerzas horizontales que apuntan a la derecha debe ser igual a la suma de las que apuntan a la izquierda.*

2.  **Suma de fuerzas en el eje Y es cero:**
    $$ \sum F_y = 0 $$
    *Esto significa que la suma de todas las fuerzas verticales que apuntan hacia arriba debe ser igual a la suma de las que apuntan hacia abajo.*

3.  **Suma de momentos (torques) respecto a un punto es cero:**
    $$ \sum M_p = 0 $$
    *Esto significa que la suma de todos los momentos que tienden a hacer girar la estructura en sentido antihorario debe ser igual a la suma de los que tienden a hacerla girar en sentido horario.*

---

## Leyenda de Símbolos

- **$R_x$**: Reacción de fuerza en la dirección horizontal (eje X). Se mide en Newtons (N).
- **$R_y$**: Reacción de fuerza en la dirección vertical (eje Y). Se mide en Newtons (N).
- **$M$**: Reacción de momento (o torque). Se mide en Newton-metro (N·m).
- **$\sum F_x$**: Sumatoria de todas las fuerzas y componentes de fuerza en el eje X.
- **$\sum F_y$**: Sumatoria de todas las fuerzas y componentes de fuerza en el eje Y.
- **$\sum M_p$**: Sumatoria de todos los momentos respecto a un punto `p`.
