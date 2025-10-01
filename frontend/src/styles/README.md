# Estructura de Estilos

Este directorio contiene todos los estilos de la aplicación, organizados de manera modular siguiendo una arquitectura escalable.

## Estructura de Carpetas

```
styles/
├── base/               # Estilos base y globales
│   ├── _variables.css  # Variables CSS y tokens de diseño
│   ├── _reset.css      # Reset y normalización de estilos
│   ├── _typography.css # Estilos de tipografía
│   └── _app-styles.css # Estilos específicos de la aplicación
├── components/         # Estilos de componentes reutilizables
│   ├── _buttons.css
│   ├── _cards.css
│   ├── _forms.css
│   ├── _mru-chart.css
│   └── _navbar.css
├── layout/             # Estilos de diseño estructural
│   ├── _grid.css
│   ├── _header.css
│   ├── _footer.css
│   └── _sidebar.css
├── pages/              # Estilos específicos de páginas
│   ├── _home.css
│   └── _admin.css
├── themes/             # Temas y estilos específicos de temas
│   ├── _light.css
│   ├── _dark.css
│   ├── _theme-vars.css
│   ├── _mru.css
│   ├── _mcu.css
│   ├── _mas.css
│   ├── _mp.css
│   └── _mv.css
└── utils/              # Utilidades y ayudantes
    ├── _animations.css
    ├── _helpers.css
    └── _spacing.css
```

## Uso

### Variables CSS

Todas las variables de diseño están definidas en `_variables.css`. Estas incluyen:

- Colores (primarios, secundarios, estados)
- Tipografía (fuentes, tamaños, pesos)
- Espaciados
- Sombras
- Bordes
- Transiciones

### Temas

La aplicación soporta múltiples temas. El tema actual se establece mediante el atributo `data-theme` en el elemento raíz del documento.

```html
<html data-theme="light">
  <!-- Contenido de la aplicación -->
</html>
```

Los temas disponibles son:

- `light`: Tema claro (por defecto)
- `dark`: Tema oscuro
- `mru`: Tema para Movimiento Rectilíneo Uniforme
- `mcu`: Tema para Movimiento Circular Uniforme
- `mas`: Tema para Movimiento Armónico Simple
- `mp`: Tema para Movimiento Parabólico
- `mv`: Tema para Movimiento Vertical

### Componentes

Cada componente tiene su propio archivo de estilos en la carpeta `components/`. Los estilos de los componentes deben ser modulares y reutilizables.

### Utilidades

La carpeta `utils/` contiene clases de utilidad y mixins que se pueden usar en toda la aplicación.

## Convenciones

- Usar nombres de clases en minúsculas con guiones (`mi-componente`)
- Usar variables CSS para valores reutilizables
- Agrupar estilos relacionados
- Comentar el código para mayor claridad
- Mantener la especificidad de los selectores lo más baja posible

## Personalización

Para personalizar los estilos de la aplicación, modifica los archivos correspondientes en cada carpeta. Para cambios globales, comienza con `_variables.css`.

## Notas de Desarrollo

- Los estilos están escritos en CSS plano con variables CSS para la personalización.
- Se utilizan características modernas de CSS como `color-mix()` y `clamp()` donde sea apropiado.
- Se incluyen prefijos de proveedores cuando es necesario para una mejor compatibilidad.
- Los estilos están diseñados para ser responsivos por defecto.
