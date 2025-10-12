# Centro de Masa, Centro de Gravedad y Centroide

Imagina que intentas equilibrar un objeto irregular, como un martillo, sobre tu dedo. Intuitivamente, sabes que hay un único punto donde se mantendrá en equilibrio. Ese "punto de equilibrio" es la idea central detrás de los conceptos de centro de masa, centro de gravedad y centroide. En estática, localizar este punto nos permite simplificar enormemente los problemas, ya que podemos tratar el peso de todo el objeto como si actuara en ese único lugar.

---

## 1. Definiendo los Conceptos

Aunque a menudo se usan como sinónimos, cada término tiene un significado preciso:

- **Centroide:** Es el **centro geométrico** de una forma (un área o un volumen), sin importar de qué material esté hecha. Si recortaras una forma en cartón, el centroide sería su punto de equilibrio geométrico.

- **Centro de Masa (CM):** Es la **posición promedio de toda la masa** de un objeto. Es el punto donde el objeto se movería como si toda su masa estuviera concentrada allí.

- **Centro de Gravedad (CG):** Es el **punto de aplicación de la fuerza de gravedad total** (el peso) sobre un objeto. Es el verdadero "punto de equilibrio" del peso.

### ¿Cuándo Coinciden los Tres?

En la mayoría de los problemas de ingeniería en la Tierra, estos tres puntos están en el mismo lugar y los usamos de forma intercambiable. Esto sucede si:
1.  El objeto es **homogéneo** (su densidad es la misma en todas partes) -> **Centroide = Centro de Masa**.
2.  El campo gravitatorio es **uniforme** (la gravedad tira con la misma fuerza en todo el objeto) -> **Centro de Masa = Centro de Gravedad**.

---

## 2. Cálculo del Centroide para Figuras Compuestas

La forma más común de encontrar el centroide de una figura compleja es dividirla en formas simples (rectángulos, triángulos, círculos) cuyos centroides ya conocemos. Luego, combinamos los resultados usando las siguientes fórmulas, que se basan en el principio de momentos.

Para una figura plana (un área), las coordenadas del centroide ($X_c, Y_c$) se calculan así:

$$ X_c = \frac{\sum A_i x_i}{\sum A_i} \quad , \quad Y_c = \frac{\sum A_i y_i}{\sum A_i} $$

Donde:
- **$X_c, Y_c$**: Son las coordenadas del centroide de la figura completa que queremos encontrar.
- **$\sum$ (Sigma)**: Es el símbolo de sumatoria. Indica que debemos sumar los términos para cada una de las formas simples.
- **$A_i$**: Es el área de cada forma simple (por ejemplo, el área de un rectángulo o un círculo).
- **$x_i, y_i$**: Son las coordenadas del centroide de *esa* forma simple, medidas desde un origen común.
- **$\sum A_i$**: Es simplemente el área total de la figura compuesta.

El término **$A_i x_i$** se conoce como el **primer momento de área** respecto al eje Y. Es una medida de cómo se distribuye el área con respecto a ese eje.

**Regla Clave: Agujeros y Sustracciones**
Si tu figura tiene un agujero, tratas el área del agujero como un **valor negativo** en las sumas. Esto "resta" el efecto del agujero del cálculo total.

---

## 3. Centro de Gravedad para Cuerpos Compuestos

El cálculo es muy similar al del centroide, pero en lugar de usar el área ($A_i$), usamos el peso ($W_i$) de cada componente del cuerpo.

$$ X_{cg} = \frac{\sum W_i x_i}{\sum W_i} \quad , \quad Y_{cg} = \frac{\sum W_i y_i}{\sum W_i} $$

Donde:
- **$X_{cg}, Y_{cg}$**: Son las coordenadas del centro de gravedad del cuerpo completo.
- **$W_i$**: Es el peso de cada parte individual del cuerpo ($W_i = m_i g$).
- **$x_i, y_i$**: Son las coordenadas del centro de gravedad de *esa* parte individual.
- **$\sum W_i$**: Es el peso total del cuerpo.

---

## Leyenda General de Símbolos

- **$X_c, Y_c$**: Coordenadas del centroide (unidades de longitud, ej. m).
- **$X_{cg}, Y_{cg}$**: Coordenadas del centro de gravedad (unidades de longitud, ej. m).
- **$A_i$**: Área de una sub-figura (ej. m²).
- **$W_i$**: Peso de un sub-cuerpo (ej. N).
- **$x_i, y_i$**: Coordenadas del centroide/CG de una sub-parte (ej. m).
- **$m_i$**: Masa de una sub-parte (ej. kg).
- **$g$**: Aceleración de la gravedad (aprox. 9.81 m/s²).
