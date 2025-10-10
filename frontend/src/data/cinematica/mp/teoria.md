# Teoría: Movimiento Parabólico (MP)

El Movimiento Parabólico (MP), también llamado tiro parabólico o movimiento de proyectiles, es el movimiento de un cuerpo bajo la acción de la gravedad (aceleración constante $$g$$) despreciando la resistencia del aire. La trayectoria es una parábola cuando se descomponen las componentes horizontal y vertical del movimiento.

## Descomposición del movimiento
Se separa el movimiento en dos componentes independientes:
- Horizontal (eje x): movimiento rectilíneo uniforme (MRU).
- Vertical (eje y): movimiento con aceleración constante (MRUA) con aceleración $$ -g $$.

Si la velocidad inicial es $$v_0$$ y el ángulo de lanzamiento respecto a la horizontal es $$\theta$$:
- $$v_{0x} = v_0 \cos\theta$$
- $$v_{0y} = v_0 \sin\theta$$

## Ecuaciones paramétricas
Posición en función del tiempo:
- $$x(t) = v_{0x}\; t = v_0 \cos\theta\; t$$
- $$y(t) = v_{0y}\; t - \frac{1}{2} g t^2 = v_0 \sin\theta\; t - \frac{1}{2} g t^2$$

Velocidades:
- $$v_x(t) = v_{0x} = v_0 \cos\theta$$ (constante)
- $$v_y(t) = v_{0y} - g t = v_0 \sin\theta - g t$$

Velocidad escalar:
- $$v(t) = \sqrt{v_x(t)^2 + v_y(t)^2}$$

## Ecuación de la trayectoria
Eliminando el tiempo:
$$y(x) = x \tan\theta - \frac{g}{2 v_0^2 \cos^2\theta}\; x^2$$
esta expresión muestra la forma parabólica de la trayectoria.

## Fórmulas clave (salida y llegada a la misma altura)
- Tiempo de vuelo: $$T = \frac{2 v_0 \sin\theta}{g}$$
- Alcance (rango): $$R = v_{0x}\; T = \frac{v_0^2 \sin(2\theta)}{g}$$
- Altura máxima: $$H = \frac{v_{0y}^2}{2g} = \frac{v_0^2 \sin^2\theta}{2g}$$

Observación: el ángulo que maximiza el alcance (misma altura de salida y llegada) es $$\theta = 45^\circ$$.

## Caso general (diferente altura de aterrizaje)
Si la altura de lanzamiento y la de aterrizaje difieren, el tiempo de vuelo se obtiene resolviendo la ecuación cuadrática en $$t$$ derivada de $$y(t)=y_{f}$$. En ese caso usa las soluciones reales de la cuadrática para encontrar el tiempo de impacto adecuado.

## Ejemplo numérico
Lanzamiento con $$v_0 = 20\ \text{m/s}$$ y $$\theta = 30^\circ$$ (usar $$g = 9.81\ \text{m/s}^2$$):
- $$v_{0x} = 20\cos30^\circ \approx 17.32\ \text{m/s}$$
- $$v_{0y} = 20\sin30^\circ = 10\ \text{m/s}$$
- Tiempo de vuelo: $$T \approx \frac{2\cdot10}{9.81} \approx 2.04\ \text{s}$$
- Alcance: $$R \approx 17.32 \cdot 2.04 \approx 35.3\ \text{m}$$
- Altura máxima: $$H \approx \frac{10^2}{2\cdot9.81} \approx 5.10\ \text{m}$$

## Notas y recomendaciones
- Estas fórmulas suponen ausencia de resistencia del aire. Con rozamiento la trayectoria y los resultados cambian.  
- Usa unidades SI (m, s, kg) para consistencia.  
- Para resolver problemas: descompón $$v_0$$ en componentes, aplica las ecuaciones paramétricas y usa condiciones iniciales para hallar tiempos y posiciones.
