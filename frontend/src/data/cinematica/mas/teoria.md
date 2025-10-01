# Teoría: Movimiento Armónico Simple (MAS)

El Movimiento Armónico Simple (MAS) es un movimiento oscilatorio periódico caracterizado por una fuerza restauradora proporcional al desplazamiento respecto a una posición de equilibrio. Es el modelo idealizado que describe, por ejemplo, un bloque unido a un resorte sin rozamiento.

## Ecuación de movimiento

Para un sistema masa-resorte (masa m, constante elástica k) la ecuación diferencial es:

x''(t) + ω² x(t) = 0

donde la pulsación natural es:

ω = sqrt(k / m)

La solución general (forma armónica) es:

x(t) = A cos(ω t + φ)

o bien

x(t) = A sin(ω t + φ')

- A: amplitud (máxima elongación)  
- φ: fase inicial  
- ω: pulsación (rad/s)

Periodo y frecuencia:
- Periodo: T = 2π / ω  
- Frecuencia: f = 1 / T = ω / (2π)

## Velocidad y aceleración

Derivando la posición:

v(t) = x'(t) = -A ω sin(ω t + φ)  
a(t) = x''(t) = -A ω² cos(ω t + φ) = -ω² x(t)

La aceleración es proporcional y de signo contrario al desplazamiento (fuerza restauradora).

## Energía en MAS

Energía cinética:
K = ½ m v²(t)

Energía potencial elástica:
U = ½ k x²(t)

Energía total (constante en ausencia de disipación):
E = K + U = ½ k A²

En los extremos (x = ±A): K = 0, U = ½ k A².  
En el equilibrio (x = 0): U = 0, K = ½ k A².

## Amplitud, desfase y condiciones iniciales

Las condiciones iniciales x(0) y v(0) permiten obtener A y φ:

A = sqrt( x(0)² + (v(0)/ω)² )  
φ = atan2( -v(0)/(ω), x(0) )

## Ejemplo numérico (bloque-resorte)

Sea m = 1 kg y k = 4 N/m:  
ω = sqrt(4 / 1) = 2 rad/s  
T = 2π / 2 = π s ≈ 3.1416 s  
Si A = 0.1 m, la energía total es:  
E = ½ k A² = 0.5 * 4 * 0.01 = 0.02 J

## Tabla rápida de fórmulas

- x(t) = A cos(ω t + φ)  
- v(t) = -A ω sin(ω t + φ)  
- a(t) = -A ω² cos(ω t + φ) = -ω² x(t)  
- ω = sqrt(k / m)  
- T = 2π / ω  
- f = ω / (2π)  
- E = ½ k A²

## Notas y extensiones

- Si existe amortiguamiento (rozamiento proporcional a la velocidad) el modelo pasa a ser movimiento armónico amortiguado y la amplitud decae con el tiempo.  
- En sistemas forzados (excitación externa) pueden aparecer resonancias cuando la frecuencia de la fuerza externa se aproxima a la frecuencia natural ω.

