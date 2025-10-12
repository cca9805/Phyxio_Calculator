# II.2. Circuitos de Corriente Continua (CC)

## Leyes de Kirchhoff (Capítulo 4.4)

Las leyes de Kirchhoff son dos reglas fundamentales para el análisis de circuitos eléctricos, basadas en la conservación de la carga y de la energía.

1.  **Ley de Corrientes de Kirchhoff (LCK):** La suma algebraica de las corrientes que entran en cualquier **nodo** (punto de unión) de un circuito es cero.
    $$\sum_{k=1}^{n} I_k = 0$$
    Es un enunciado de la **conservación de la carga**.

2.  **Ley de Voltajes (o Tensiones) de Kirchhoff (LVK):** La suma algebraica de los cambios de potencial (voltajes) en cualquier **lazo o malla cerrada** de un circuito es cero.
    $$\sum_{k=1}^{n} V_k = 0$$
    Es un enunciado de la **conservación de la energía**.

## Análisis de Circuitos

### Asociación de Resistencias

*   **En Serie:** La resistencia equivalente ($R_{eq}$) es la suma de las resistencias individuales. La corriente es la misma en todas.
    $$R_{eq} = R_1 + R_2 + \ldots + R_n$$
*   **En Paralelo:** El inverso de la resistencia equivalente es la suma de los inversos. El voltaje es el mismo en todas.
    $$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \ldots + \frac{1}{R_n}$$

### Divisor de Voltaje

Para dos resistencias en serie, el voltaje en $R_2$ se puede calcular como:

$$V_2 = V_{total} \frac{R_2}{R_1 + R_2}$$

## Circuitos RC (Capítulo 4.6)

Un circuito RC es aquel que contiene una resistencia y un condensador.

*   **Carga de un Condensador:** Cuando se conecta a una fuente de voltaje a través de una resistencia, la carga del condensador aumenta exponencialmente:
    $$q(t) = Q_{max}(1 - e^{-t/\tau})$$
*   **Descarga de un Condensador:** Al conectar un condensador cargado a una resistencia, la carga disminuye exponencialmente:
    $$q(t) = Q_0 e^{-t/\tau}$$

El término $\tau = RC$ se llama **constante de tiempo** del circuito, y representa el tiempo que tarda la carga en alcanzar aproximadamente el 63% de su valor final (durante la carga).