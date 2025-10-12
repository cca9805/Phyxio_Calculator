# I.2. Campos Eléctricos Estáticos (E)

## Concepto de Campo Eléctrico (Capítulo 1.3)

El concepto de campo eléctrico ($\vec{E}$) fue introducido para describir cómo una carga altera el espacio que la rodea.

1.  **Definición:** La intensidad de campo eléctrico se define como la **fuerza por unidad de carga** que experimenta una carga de prueba $q$ estacionaria en un punto.
    $$\vec{E} = \lim_{q\to 0} \frac{\vec{F}}{q} \quad (\text{Unidad SI: N/C o V/m})$$.
    La fuerza sobre una carga $q$ en el campo es: $\vec{F} = q\vec{E}$.
2.  **Campo Creado por Carga Puntual:** El campo $\vec{E}$ es radial (saliendo de cargas positivas y entrando en negativas).
    $$\vec{E} = \frac{1}{4\pi\epsilon_0} \frac{q_1 (\vec{r}_2 - \vec{r}_1)}{|\vec{r}_2 - \vec{r}_1|^3}$$.
3.  **Superposición:** Para un sistema de $N$ cargas, el campo neto es la suma vectorial de los campos generados por cada carga.

## Líneas de Campo y Flujo (Capítulo 1.5 y 1.6)

1.  **Líneas de Campo:** Representan visualmente el campo. El vector $\vec{E}$ es tangente a ellas, y la densidad de líneas es proporcional a la magnitud del campo. Las líneas **salen** de cargas positivas y **entran** en negativas; nunca se cruzan.
2.  **Flujo Eléctrico ($\phi$):** Mide la cantidad de líneas de campo que atraviesan una superficie.

$$\phi = \int_S \vec{E} \cdot d\vec{A}$$

3.  **Ley de Gauss:** Relaciona el flujo eléctrico neto a través de una superficie cerrada (Gaussiana) con la carga neta encerrada ($Q_{interior}$).

$$\phi = \oint_S \vec{E} \cdot d\vec{A} = \frac{Q_{interior}}{\epsilon_0}$$.

Esta ley es esencial para calcular el campo eléctrico en distribuciones de alta simetría (plana, cilíndrica o esférica).

## Conductores en Equilibrio Electrostático (Capítulo 1.7)

En un **conductor** en equilibrio electrostático (cargas en reposo):
*   El **campo eléctrico neto es nulo** en el interior.
*   Toda la carga neta se sitúa en la **superficie externa** del conductor.
*   La superficie del conductor es una **superficie equipotencial** (ver sección I.3).