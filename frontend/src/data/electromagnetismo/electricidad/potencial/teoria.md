# I.3. Potencial, Energía y Capacidad (V y C)

## Potencial Eléctrico (Capítulo 2.1)

El campo electrostático es conservativo, lo que permite definir una función potencial escalar $V$.

1.  **Diferencia de Potencial ($\Delta V$):** Es el valor negativo del trabajo realizado por el campo eléctrico por unidad de carga al moverse entre dos puntos.
    $$\Delta V = V_b - V_a = \frac{\Delta U}{q} = -\int_a^b \vec{E} \cdot d\vec{l}$$.
2.  **Potencial Absoluto ($V$):** Potencial en un punto, tomando como referencia el infinito ($V_\infty = 0$).
    $$V = \frac{k q}{R}$$.
3.  **Relación Campo-Potencial:** El campo eléctrico se relaciona con el potencial mediante el gradiente; la componente tangencial del campo es:
    $$E_t = -\frac{dV}{dl}$$.
4.  **Superficies Equipotenciales:** Conjunto de puntos con el mismo potencial. Son siempre **perpendiculares** a las líneas de campo eléctrico. Un conductor en equilibrio es un volumen equipotencial.

## Energía Potencial Electroestática ($U$) (Capítulo 2.3)

La energía potencial $U$ es el trabajo requerido para ensamblar un sistema de cargas.

*   **Para un sistema de cargas puntuales:**
    $$U = \frac{1}{2} \sum_{i=1}^{n} q_i V_i$$.
    Donde $V_i$ es el potencial en la posición $i$ creado por *todas las demás* cargas.
*   **Para un conductor cargado $Q$:**
    $$U = \frac{1}{2} Q V$$.

## Capacidad y Condensadores (Capítulo 2.4, 2.7, 2.8)

1.  **Capacidad ($C$):** Es la razón entre la carga $Q$ que almacena un conductor y el potencial $V$ que adquiere. La capacidad depende solo de la geometría.
    $$C = \frac{Q}{V} \quad (\text{Unidad SI: Faradio (F)})$$.
2.  **Condensador de Placas Paralelas:** Es un dispositivo que almacena energía. Su capacidad en el vacío ($C_0$) es:
    $$C_0 = \frac{\epsilon_0 A}{d}$$.
3.  **Energía Almacenada en un Condensador:**
    $$U = \frac{Q^2}{2C} = \frac{1}{2} C V^2$$.
4.  **Dieléctricos:** Son materiales aislantes ($\kappa$) que, al introducirse en un condensador, aumentan la capacidad y disminuyen el campo eléctrico interno.
    $$C = \kappa C_0 \quad \text{y} \quad E = \frac{E_0}{\kappa}$$.

### Asociación de Condensadores

*   **En Paralelo:** Se suman las capacidades individuales: $C = C_1 + C_2 + \ldots + C_n$.
*   **En Serie:** Se suman las inversas de las capacidades: $\frac{1}{C} = \frac{1}{C_1} + \frac{1}{C_2} + \ldots + \frac{1}{C_n}$.