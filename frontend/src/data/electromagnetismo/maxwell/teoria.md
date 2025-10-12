# IV. Ecuaciones de Maxwell: La Unificación del Electromagnetismo

Las Ecuaciones de Maxwell son un conjunto de cuatro ecuaciones fundamentales que, junto con la Fuerza de Lorentz, constituyen la base de la electrodinámica clásica. Describen cómo los campos eléctricos y magnéticos son generados por cargas y corrientes, y cómo interactúan entre sí. Son la culminación y unificación de todo lo que hemos estudiado hasta ahora.

---

## Las Cuatro Ecuaciones (Forma Integral)

La forma integral es útil para cálculos en situaciones con alta simetría.

### 1. Ley de Gauss para el Campo Eléctrico
$$ \oint_S \vec{E} \cdot d\vec{A} = \frac{Q_{enc}}{\varepsilon_0} $$
*   **Significado:** El flujo eléctrico neto a través de cualquier superficie cerrada es proporcional a la carga eléctrica neta encerrada dentro de esa superficie.
*   **En palabras simples:** Las líneas de campo eléctrico nacen en las cargas positivas y mueren en las negativas.

### 2. Ley de Gauss para el Campo Magnético
$$ \oint_S \vec{B} \cdot d\vec{A} = 0 $$
*   **Significado:** El flujo magnético neto a través de cualquier superficie cerrada es siempre cero.
*   **En palabras simples:** No existen los monopolos magnéticos. Las líneas de campo magnético son siempre cerradas; no tienen principio ni fin.

### 3. Ley de Faraday de la Inducción
$$ \oint_C \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt} $$
*   **Significado:** Un campo magnético variable en el tiempo (`dΦ_B/dt`) induce un campo eléctrico circulante (una FEM).
*   **En palabras simples:** Un flujo magnético cambiante crea un campo eléctrico.

### 4. Ley de Ampere-Maxwell
$$ \oint_C \vec{B} \cdot d\vec{l} = \mu_0 I_{enc} + \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt} $$
*   **Significado:** Un campo magnético es generado por dos fuentes: una corriente eléctrica (`I_enc`) y un campo eléctrico variable en el tiempo (`dΦ_E/dt`).
*   **La Gran Aportación de Maxwell:** El segundo término, `μ₀ε₀(dΦ_E/dt)`, es la **corriente de desplazamiento**. Maxwell lo añadió para que la ley fuera consistente, y predijo que un campo eléctrico cambiante induce un campo magnético, incluso en ausencia de corriente. Esta simetría es la clave de las ondas electromagnéticas.

---

## Corriente de Desplazamiento (I_d)

La corriente de desplazamiento no es un movimiento de cargas, sino un campo eléctrico variable que actúa como fuente de campo magnético, al igual que una corriente real.

$$ I_d = \varepsilon_0 \frac{d\Phi_E}{dt} $$

Es fundamental para explicar cómo las ondas electromagnéticas (como la luz) pueden propagarse en el vacío, donde no hay corrientes `I_enc`.

## Implicaciones de las Ecuaciones de Maxwell

*   **Unificación:** Unificaron la electricidad, el magnetismo y la óptica en una sola teoría coherente.
*   **Predicción de Ondas Electromagnéticas:** Al combinar las ecuaciones, Maxwell derivó una ecuación de onda. La velocidad de propagación de estas ondas en el vacío (`c = 1 / sqrt(μ₀ε₀)`) coincidía exactamente con la velocidad de la luz medida. Esto demostró que la luz es una onda electromagnética.
*   **Fundamento Tecnológico:** Son la base de toda la tecnología de radio, televisión, telecomunicaciones, radares, y más.