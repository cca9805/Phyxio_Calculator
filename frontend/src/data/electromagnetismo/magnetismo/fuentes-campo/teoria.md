# III.2. Fuentes del Campo Magnético

Si las cargas en movimiento crean campos magnéticos, necesitamos leyes que nos permitan calcular la forma y magnitud de estos campos. Para ello, existen dos herramientas fundamentales: la Ley de Biot-Savart y la Ley de Ampere.

---

## La Unidad de Campo Magnético: El Tesla (T)

El campo magnético (`B`) se mide en el Sistema Internacional en **Teslas (T)**.

Un Tesla es una unidad relativamente grande. A menudo, los campos magnéticos se expresan en militeslas (mT) o microteslas (µT).

### ¿Qué significa un Tesla?

La definición del Tesla proviene de la fuerza de Lorentz (`F = q(v x B)`). Un Tesla se define como la intensidad de un campo magnético que ejerce una fuerza de **un Newton (N)** sobre una carga de **un Culombio (C)** que se mueve a una velocidad de **un metro por segundo (m/s)** perpendicularmente al campo.

Por lo tanto:

**`1 T = 1 N / (C·m/s)`**

Dado que un Amperio (A) es un Culombio por segundo (A = C/s), la unidad también se puede expresar como:

**`1 T = 1 N / (A·m)`** (Newton por Amperio-metro)

Esto significa que un campo de 1 T ejercerá una fuerza de 1 N sobre cada metro de un alambre que transporta 1 A de corriente y es perpendicular al campo.

---

## Ley de Biot-Savart

La Ley de Biot-Savart es el análogo magnético de la Ley de Coulomb. Nos permite calcular el campo magnético `d`**B** generado por un pequeño segmento de corriente `d`**l**.

*   **Concepto:** Permite encontrar el campo magnético total sumando (integrando) las contribuciones de todos los pequeños segmentos de corriente de un circuito.

*   **Forma Vectorial:**
    $$ d\vec{B} = \frac{\mu_0}{4\pi} \frac{I(d\vec{l} \times \hat{r})}{r^2} $$

    *   `μ₀`: Es la **permeabilidad magnética del vacío**, una constante fundamental. `μ₀ = 4π x 10⁻⁷ T·m/A`.
    *   `I`: La corriente en el alambre.
    *   `d`**l**: Un vector que representa un segmento infinitesimal del alambre, apuntando en la dirección de la corriente.
    *   `r`: La distancia desde el segmento `d`**l** hasta el punto donde se mide el campo.
    *   `r̂`: El vector unitario que apunta desde `d`**l** hacia el punto de medición.

### Aplicación: Campo de un Hilo Recto y Finito

Integrando la Ley de Biot-Savart para un alambre recto de longitud finita, se obtiene el campo a una distancia `R` del alambre:

$$ B = \frac{\mu_0 I}{4\pi R}(\sin\theta_1 + \sin\theta_2) $$

Donde `θ₁` y `θ₂` son los ángulos formados por los extremos del alambre y el punto de medición.

### Caso Especial: Campo de un Hilo Recto e Infinito

Si el alambre es muy largo (`θ₁` y `θ₂` tienden a 90°), la fórmula se simplifica enormemente. Este es un resultado muy importante:

$$ B = \frac{\mu_0 I}{2\pi R} $$

La magnitud del campo magnético disminuye con la distancia `R` al alambre.

---

## Ley de Ampere

La Ley de Ampere es el análogo magnético de la Ley de Gauss. Proporciona una manera más sencilla de calcular el campo magnético en situaciones con un alto grado de simetría (cilíndrica, toroidal, etc.).

*   **Concepto:** Relaciona la circulación del campo magnético a lo largo de una trayectoria cerrada (llamada **trayectoria amperiana**) con la corriente total que atraviesa la superficie delimitada por dicha trayectoria.

*   **Forma Integral:**
    $$ \oint \vec{B} \cdot d\vec{l} = \mu_0 I_{enc} $$

    *   `∮ B·dl`: Es la integral de línea del campo magnético alrededor de la trayectoria cerrada.
    *   `I_enc`: Es la corriente neta que pasa a través de la superficie definida por la trayectoria.

### Aplicaciones Clave de la Ley de Ampere:

1.  **Campo de un Hilo Infinito (re-derivado):**
    *   Se elige una trayectoria amperiana circular de radio `R` centrada en el hilo. `B` es constante y paralelo a `dl` en toda la trayectoria.
    *   `B ∮ dl = B (2πR) = μ₀I`
    *   Despejando `B`, obtenemos el mismo resultado: `B = μ₀I / (2πR)`.

2.  **Campo en el Interior de un Solenoide Ideal:**
    *   Un solenoide es una bobina larga y enrollada. En su interior, el campo es fuerte y uniforme; en el exterior, es prácticamente cero.
    *   `n`: Es la densidad de espiras (número de vueltas por unidad de longitud, `N/L`).
    *   El campo en su interior es:
        $$ B = \mu_0 n I $$
    *   El campo no depende de la posición dentro del solenoide, ¡es uniforme!

3.  **Campo en el Interior de un Toroide:**
    *   Un toroide es un solenoide doblado en forma de donut.
    *   `N`: Número total de vueltas.
    *   `r`: Radio desde el centro del toroide hasta el punto de interés.
    *   El campo en su interior es:
        $$ B = \frac{\mu_0 N I}{2\pi r} $$

