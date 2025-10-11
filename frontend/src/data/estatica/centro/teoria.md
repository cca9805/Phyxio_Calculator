# Centro de Masa, Centro de Gravedad y Centroide

En estática, es fundamental comprender cómo se distribuye la materia de un cuerpo para analizar su equilibrio. Los conceptos de centroide, centro de masa y centro de gravedad son las herramientas que nos permiten localizar un punto "promedio" donde podemos simplificar el análisis.

---

## 1. El Centroide: El Centro Geométrico

El **centroide** es el centro geométrico de una forma (línea, área o volumen), independientemente de su masa o material. Es un concepto puramente geométrico.

- **Para un área:** Es el punto donde se podría equilibrar una placa delgada de esa forma si no tuviera peso.
- **Para un volumen:** Es el centro geométrico del espacio que ocupa.

### Cálculo para Cuerpos Compuestos (Método de las Placas)

La estrategia más común es dividir una forma compleja en varias formas simples (rectángulos, círculos, etc.) cuyos centroides son conocidos. Luego, se utiliza el principio de los momentos para encontrar el centroide de la forma compuesta.

Las coordenadas del centroide ($X_c, Y_c, Z_c$) se calculan con las siguientes fórmulas:

- **Líneas:** $X_c = \frac{\sum L_i x_i}{\sum L_i}$, $Y_c = \frac{\sum L_i y_i}{\sum L_i}$
- **Áreas:** $X_c = \frac{\sum A_i x_i}{\sum A_i}$, $Y_c = \frac{\sum A_i y_i}{\sum A_i}$
- **Volúmenes:** $X_c = \frac{\sum V_i x_i}{\sum V_i}$, $Y_c = \frac{\sum V_i y_i}{\sum V_i}$

**Nota sobre Agujeros:** Si una forma tiene un agujero, el área o volumen del agujero se considera una **magnitud negativa** en la suma.

### Definición Formal (Cálculo por Integración)

Para formas complejas que no se pueden descomponer fácilmente, el centroide se define mediante integrales:

$X_c = \frac{1}{A} \int x \, dA$ ,  $Y_c = \frac{1}{A} \int y \, dA$

Estas integrales representan la "suma" de los momentos de todos los elementos diferenciales que componen la figura.

---

## 2. Centro de Masa y Centro de Gravedad: Conceptos Físicos

A diferencia del centroide, estos conceptos dependen de la distribución de masa del cuerpo.

### Centro de Masa (CM)

Es la **posición promedio de toda la masa** de un sistema. Es el punto donde, para cualquier fuerza externa, el objeto se mueve como si toda su masa estuviera concentrada allí.

- Para un sistema de partículas: $R_{cm} = \frac{\sum m_i r_i}{\sum m_i}$

### Centro de Gravedad (CG)

Es el **punto de aplicación de la fuerza de gravedad resultante** sobre un cuerpo. Es el punto donde el peso total del objeto actúa.

- Para un sistema de partículas: $R_{cg} = \frac{\sum (m_i g_i) r_i}{\sum (m_i g_i)} = \frac{\sum W_i r_i}{\sum W_i}$

---

## 3. La Gran Unificación: ¿Cuándo Coinciden los Tres?

En la mayoría de los problemas de ingeniería, estos tres puntos coinciden. Esto ocurre bajo dos condiciones:

1.  **Centroide = Centro de Masa:** Si el cuerpo es **homogéneo** (su densidad es constante en todo el volumen).
2.  **Centro de Masa = Centro de Gravedad:** Si el campo gravitatorio ($g$) es **uniforme** en todo el cuerpo.

Para casi cualquier objeto en la superficie de la Tierra, ambas condiciones se cumplen. Por ello, en la práctica, los términos **centroide, centro de masa y centro de gravedad se usan de forma intercambiable**.

---

## Leyenda de Símbolos

- **$R_{cm}, R_{cg}$**: Vector de posición del Centro de Masa y Centro de Gravedad. (m)
- **$r_i$**: Vector de posición de la partícula/sub-figura i. (m)
- **$m_i$**: Masa de la partícula i. (kg)
- **$W_i$**: Peso de la partícula i ($m_i \cdot g_i$). (N)
- **$X_c, Y_c, Z_c$**: Coordenadas del centroide del cuerpo compuesto. (m)
- **$x_i, y_i, z_i$**: Coordenadas del centroide de la sub-figura i. (m)
- **$L, L_i$**: Longitud total y longitud de la sub-línea i. (m)
- **$A, A_i$**: Área total y área de la sub-figura i. (m²)
- **$V, V_i$**: Volumen total y volumen de la sub-figura i. (m³)
- **$dL, dA, dV$**: Elementos diferenciales de longitud, área y volumen.
