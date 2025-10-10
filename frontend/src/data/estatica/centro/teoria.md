# Teoría del Centro de Masa y Centro de Gravedad

En física y estática, los conceptos de centro de masa y centro de gravedad son cruciales para entender cómo las fuerzas afectan a los cuerpos extensos y cómo se distribuye su peso.

---

## ¿Qué es el Centro de Masa?

El **centro de masa (CM)** es un punto único en un objeto o sistema de objetos que se mueve de la misma manera que lo haría una partícula puntual con toda la masa del sistema concentrada en él. 

- Es la **posición promedio de toda la masa** del sistema.
- Cuando una fuerza externa neta actúa sobre un sistema, el centro de masa se acelera como si toda la masa estuviera en ese punto.
- Su ubicación depende únicamente de la **distribución de la masa** del objeto.

### Cálculo para un Sistema de Partículas

Para un conjunto de partículas discretas, las coordenadas del centro de masa ($X_{cm}$, $Y_{cm}$) se calculan utilizando el principio de los momentos de masa:

$$ X_{cm} = \frac{\sum m_i x_i}{\sum m_i} = \frac{m_1 x_1 + m_2 x_2 + ...}{m_1 + m_2 + ...} $$

$$ Y_{cm} = \frac{\sum m_i y_i}{\sum m_i} = \frac{m_1 y_1 + m_2 y_2 + ...}{m_1 + m_2 + ...} $$

Donde:
- **$X_{cm}, Y_{cm}$**: Son las coordenadas del centro de masa del sistema.
- **$m_i$**: Es la masa de la i-ésima partícula.
- **$x_i, y_i$**: Son las coordenadas de la i-ésima partícula.

---

## ¿Qué es el Centro de Gravedad?

El **centro de gravedad (CG)** es el punto en un cuerpo donde se puede considerar que actúa la fuerza total de la gravedad. Es el **punto de aplicación de la fuerza peso resultante**.

- Puesto que el peso es $W = m \cdot g$, la fórmula para el centro de gravedad es similar a la del centro de masa, pero usando el peso de cada partícula:

$$ X_{cg} = \frac{\sum (m_i g_i) x_i}{\sum (m_i g_i)} \quad , \quad Y_{cg} = \frac{\sum (m_i g_i) y_i}{\sum (m_i g_i)} $$

---

## ¿Cuándo Coinciden el Centro de Masa y el Centro de Gravedad?

El centro de masa y el centro de gravedad coinciden **si y solo si el campo gravitatorio es uniforme** a lo largo de todo el objeto. Esto significa que la aceleración de la gravedad ($g$) tiene el mismo valor (magnitud y dirección) para todas las partículas del cuerpo.

- En la gran mayoría de los problemas de ingeniería y estática en la Tierra, esta suposición es válida. La variación de $g$ es despreciable para objetos de tamaño cotidiano (edificios, vehículos, etc.).
- Por esta razón, en la práctica de la ingeniería, los términos **centro de masa y centro de gravedad se usan a menudo de manera intercambiable**.

La distinción solo se vuelve importante para objetos astronómicos de gran tamaño o en campos gravitatorios no uniformes.

---

## Centro de Masa vs. Centroide

- El **Centroide** es un concepto puramente **geométrico**. Es el centro de una forma (línea, área o volumen).
- El **Centro de Masa** es un concepto **físico**. Es el centro de la distribución de masa.

Ambos coinciden si el objeto es **homogéneo**, es decir, si su densidad es uniforme en todo su volumen. En ese caso, la distribución de la masa sigue exactamente la distribución de la geometría.
