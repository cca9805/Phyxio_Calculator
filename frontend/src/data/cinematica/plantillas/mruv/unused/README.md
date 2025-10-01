Archivar archivos antiguos del subtema MRUV aquí antes de borrarlos.

Archivos sugeridos para mover:
- teoria.js
- ejemplos.js
- ejercicios.js
- calculadora.js
- simulador.js
- graficos.js
- formulas.js

Comandos (desde la raíz del repo) usando git:
git mv src/data/cinematica/mruv/teoria.js src/data/cinematica/mruv/unused/teoria.js
git mv src/data/cinematica/mruv/ejemplos.js src/data/cinematica/mruv/unused/ejemplos.js
...y así sucesivamente.

Después de mover, actualiza importaciones para apuntar a src/data/cinematica/mruv (index.js).
