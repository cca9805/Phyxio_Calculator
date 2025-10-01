import { useRef, useEffect, useCallback } from 'react';

const toNumber = (v) => {
  if (v === null || v === undefined || v === '') return NaN;
  const n = Number(String(v).replace(',', '.'));
  return Number.isFinite(n) ? n : NaN;
};

export function useMRUCanvas(canvasRef, { x0 = 0, x, d, unknownLabel = '' }, { currentX, progress } = {}) {
  const dpr = window.devicePixelRatio || 1;
  const drawRef = useRef();

  // Calculate dimensions and set up canvas
  const setupCanvas = useCallback((canvas) => {
    if (!canvas) return { width: 0, height: 0, ctx: null };
    
    const width = 680;
    const height = Math.round(260 * 2 / 3); // ~173
    
    // Set canvas dimensions
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    
    return { width, height, ctx };
  }, [dpr]);

  // Draw scale
  const drawScale = useCallback((ctx, width, height, trackY, x0, x1) => {
    const margin = 32;
    const pad = Math.max(0.2, Math.abs(x1 - x0) * 0.1);
    const worldMin = Math.min(x0, x1) - pad;
    const worldMax = Math.max(x0, x1) + pad;
    const worldSpan = Math.max(1, worldMax - worldMin);
    const pxPerMeter = (width - 2 * margin) / worldSpan;
    
    // Function to convert world coordinates to pixels
    const toPx = (worldX) => margin + (worldX - worldMin) * pxPerMeter;
    
    // Configuración de estilo
    ctx.font = '12px system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    
    // Calcular el intervalo de las marcas principales
    const availableWidth = width - 2 * margin;
    const minPxBetweenTicks = 80; // Mínimo espacio entre marcas principales
    
    // Determinar el intervalo basado en el rango de valores
    let tickInterval = 1;
    if (worldSpan > 100) tickInterval = 20;
    else if (worldSpan > 50) tickInterval = 10;
    else if (worldSpan > 20) tickInterval = 5;
    else if (worldSpan > 10) tickInterval = 2;
    
    // Ajustar para que no haya demasiadas marcas
    const maxTicks = Math.max(2, Math.floor(availableWidth / minPxBetweenTicks));
    tickInterval = Math.max(tickInterval, Math.ceil(worldSpan / maxTicks));
    
    // Redondear a un valor 'bonito'
    const magnitude = Math.pow(10, Math.floor(Math.log10(tickInterval)));
    const normalized = tickInterval / magnitude;
    if (normalized <= 1) tickInterval = magnitude;
    else if (normalized <= 2) tickInterval = 2 * magnitude;
    else if (normalized <= 5) tickInterval = 5 * magnitude;
    else tickInterval = 10 * magnitude;
    
    // Dibujar línea del eje principal
    ctx.strokeStyle = 'rgba(59,130,246,0.85)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(margin, trackY);
    ctx.lineTo(width - margin, trackY);
    ctx.stroke();
    
    // Dibujar marcas principales y etiquetas
    const firstTick = Math.ceil(worldMin / tickInterval) * tickInterval;
    const lastTick = Math.floor(worldMax / tickInterval) * tickInterval;
    
    for (let x = firstTick; x <= lastTick + 0.001; x += tickInterval) {
      const xPx = toPx(x);
      
      // Dibujar marca principal
      ctx.beginPath();
      ctx.moveTo(xPx, trackY - 6);
      ctx.lineTo(xPx, trackY + 6);
      ctx.strokeStyle = 'rgba(226, 232, 240, 0.9)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      // Formatear etiqueta
      let label;
      if (tickInterval >= 1 || x % 1 === 0) {
        label = Math.round(x).toString();
      } else {
        const decimals = Math.ceil(-Math.log10(tickInterval)) + 1;
        label = x.toFixed(Math.max(0, Math.min(decimals, 2)));
      }
      
      // Posicionar etiqueta
      const textWidth = ctx.measureText(label).width;
      const labelX = Math.max(margin + textWidth/2, Math.min(width - margin - textWidth/2, xPx));
      
      // Fondo para la etiqueta de la escala
      const scaleLabelYOffset = 10;
      const labelHeight = 16;
      ctx.fillStyle = 'rgba(11, 28, 58, 0.7)';
      const padding = 3;
      ctx.fillRect(
        labelX - textWidth/2 - padding, 
        trackY + scaleLabelYOffset, 
        textWidth + padding*2, 
        labelHeight
      );
      
      // Texto de la etiqueta de la escala
      ctx.fillStyle = '#e2e8f0';
      ctx.fillText(label, labelX, trackY + scaleLabelYOffset + 2);
    }
    
    return { 
      margin, 
      worldMin, 
      worldMax, 
      pxPerMeter, 
      toPx 
    };
  }, []);

  // Draw markers (start and end positions)
  const drawMarkers = useCallback((ctx, toPx, trackY, x0, x1, unknownLabel = '') => {
    const x0Px = toPx(x0);
    const x1Px = toPx(x1);
    const distance = Math.abs(x1 - x0);
    const midX = (x0 + x1) / 2;
    const midXPx = toPx(midX);
    const canvas = ctx.canvas;
    
    // Configuración de estilos
    ctx.font = '12px system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // Draw start marker (green)
    ctx.beginPath();
    ctx.arc(x0Px, trackY, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#10b981';
    ctx.fill();
    
    // Draw end marker (red)
    ctx.beginPath();
    ctx.arc(x1Px, trackY, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#ef4444';
    ctx.fill();
    
    // Configuración de etiquetas
    const labelYOffset = -35; // Aumentamos el espacio vertical
    const labelHeight = 20;
    const padding = 6;
    const minLabelSpacing = 70; // Espacio mínimo entre etiquetas
    const labelVerticalSpacing = 25; // Espacio vertical entre etiquetas apiladas
    
    // Determinar qué etiquetas son desconocidas
    const isX0Unknown = unknownLabel && ['x0', 'x₀', 'xi', 'x_i', 'posición inicial', 'posicion inicial'].includes(unknownLabel.toLowerCase());
    const isXUnknown = unknownLabel && ['x', 'xf', 'x_f', 'posición final', 'posicion final'].includes(unknownLabel.toLowerCase());
    const isDUnknown = unknownLabel && ['d', 'distancia', 'distance', 'dx', 'Δx'].includes(unknownLabel.toLowerCase());
    
    // Función para dibujar etiqueta con fondo
    const drawLabel = (text, x, y, isUnknown = false, isDistance = false) => {
      const textWidth = ctx.measureText(text).width;
      const bgWidth = textWidth + padding * 2;
      const bgHeight = labelHeight;
      let bgX = x - textWidth / 2 - padding;
      const bgY = y - labelHeight / 2;
      
      // Ajustar posición para que no se salga del canvas
      const minX = padding;
      const maxX = canvas.width / window.devicePixelRatio - padding - bgWidth;
      bgX = Math.max(minX, Math.min(bgX, maxX));
      
      // Dibujar fondo si es la etiqueta desconocida o es la etiqueta de distancia
      if (isUnknown || isDistance) {
        ctx.fillStyle = isDistance 
          ? 'rgba(59, 130, 246, 0.15)' 
          : 'rgba(128, 0, 64, 0.9)';
          
        // Dibujar fondo redondeado
        const radius = 4;
        ctx.beginPath();
        ctx.moveTo(bgX + radius, bgY);
        ctx.lineTo(bgX + bgWidth - radius, bgY);
        ctx.quadraticCurveTo(bgX + bgWidth, bgY, bgX + bgWidth, bgY + radius);
        ctx.lineTo(bgX + bgWidth, bgY + labelHeight - radius);
        ctx.quadraticCurveTo(bgX + bgWidth, bgY + labelHeight, bgX + bgWidth - radius, bgY + labelHeight);
        ctx.lineTo(bgX + radius, bgY + labelHeight);
        ctx.quadraticCurveTo(bgX, bgY + labelHeight, bgX, bgY + labelHeight - radius);
        ctx.lineTo(bgX, bgY + radius);
        ctx.quadraticCurveTo(bgX, bgY, bgX + radius, bgY);
        ctx.closePath();
        ctx.fill();
        
        // Borde sutil
        if (isDistance) {
          ctx.strokeStyle = 'rgba(59, 130, 246, 0.5)';
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      
      // Dibujar texto
      ctx.fillStyle = isUnknown 
        ? '#ffffff' 
        : isDistance 
          ? '#3b82f6' 
          : (text === 'x₀' ? '#10b981' : '#ef4444');
          
      ctx.fillText(text, bgX + padding + textWidth/2, bgY + labelHeight/2);
      
      return { x: bgX, y: bgY, width: bgWidth, height: bgHeight };
    };
    
    // Calcular posiciones de las etiquetas
    const minLabelSpacingPx = Math.max(minLabelSpacing, (x1Px - x0Px) * 0.2);
    
    // Calcular el ancho de las etiquetas
    const x0Text = 'x₀';
    const x1Text = 'x';
    const x0TextWidth = ctx.measureText(x0Text).width;
    const x1TextWidth = ctx.measureText(x1Text).width;
    const totalLabelWidth = (x0TextWidth + x1TextWidth) / 2 + minLabelSpacingPx;
    
    // Ajustar posiciones si las etiquetas están muy cerca
    let x0LabelX = x0Px;
    let x1LabelX = x1Px;
    
    // Si las etiquetas están muy cerca, ajustar sus posiciones
    if (Math.abs(x1Px - x0Px) < totalLabelWidth) {
      // Si están demasiado cerca, apilar verticalmente
      x0LabelX = x0Px;
      x1LabelX = x1Px;
      
      // Dibujar etiqueta x₀ (posición inicial) más arriba
      const x0Label = drawLabel(x0Text, x0LabelX, trackY + labelYOffset - 15, isX0Unknown);
      
      // Dibujar etiqueta x (posición final) más abajo
      const x1Label = drawLabel(x1Text, x1LabelX, trackY + labelYOffset + 15, isXUnknown);
      
      // Dibujar línea de conexión si es necesario
      if (Math.abs(x1Px - x0Px) < 30) {
        ctx.beginPath();
        ctx.moveTo(x0LabelX, trackY + labelYOffset - 5);
        ctx.lineTo(x1LabelX, trackY + labelYOffset + 5);
        ctx.strokeStyle = 'rgba(226, 232, 240, 0.5)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    } else {
      // Si hay suficiente espacio, dibujar normalmente
      const x0Label = drawLabel(x0Text, x0LabelX, trackY + labelYOffset, isX0Unknown);
      const x1Label = drawLabel(x1Text, x1LabelX, trackY + labelYOffset, isXUnknown);
    }
    
    // Dibujar indicador de distancia si hay una distancia significativa
    if (distance > 0.1) {
      // Calcular posición vertical para la etiqueta de distancia
      // Usar una posición más alta si las etiquetas están apiladas
      const isStacked = Math.abs(x1Px - x0Px) < totalLabelWidth;
      const distanceLabelY = trackY - (isStacked ? 70 : 55); // Ajustar según necesidad
      
      // Dibujar línea de distancia
      ctx.beginPath();
      ctx.moveTo(x0Px, distanceLabelY - 10);
      ctx.lineTo(x1Px, distanceLabelY - 10);
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.7)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Texto de la distancia
      const distanceText = `d = ${distance.toFixed(1)} m`;
      
      // Usar la función drawLabel para la etiqueta de distancia
      drawLabel(distanceText, midXPx, distanceLabelY, isDUnknown, true);
      
      // Dibujar flechas en los extremos
      const arrowSize = 5;
      
      // Flecha izquierda
      ctx.beginPath();
      ctx.moveTo(x0Px, distanceLabelY - 10);
      ctx.lineTo(x0Px + arrowSize, distanceLabelY - 10 - arrowSize);
      ctx.moveTo(x0Px, distanceLabelY - 10);
      ctx.lineTo(x0Px + arrowSize, distanceLabelY - 10 + arrowSize);
      
      // Flecha derecha
      ctx.moveTo(x1Px, distanceLabelY - 10);
      ctx.lineTo(x1Px - arrowSize, distanceLabelY - 10 - arrowSize);
      ctx.moveTo(x1Px, distanceLabelY - 10);
      ctx.lineTo(x1Px - arrowSize, distanceLabelY - 10 + arrowSize);
      
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.7)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      // Línea vertical punteada desde la etiqueta de distancia hasta la línea de distancia
      ctx.beginPath();
      ctx.setLineDash([2, 2]);
      ctx.moveTo(midXPx, distanceLabelY - 10);
      ctx.lineTo(midXPx, distanceLabelY - 5);
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.5)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.setLineDash([]);
    }
  }, []);

  // Draw moving object
  const drawObject = useCallback((ctx, x, y) => {
    const size = 14;
    
    // Shadow
    ctx.beginPath();
    ctx.ellipse(x, y + size/2, size/1.5, size/4, 0, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fill();
    
    // Car body
    ctx.beginPath();
    ctx.roundRect(x - size, y - size/2, size * 2, size, 4);
    ctx.fillStyle = '#f43f5e';
    ctx.fill();
    
    // Windows
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fillRect(x - size + 4, y - size/2 + 2, size - 6, size/2 - 4);
    ctx.fillRect(x + 2, y - size/2 + 2, size - 6, size/2 - 4);
    
    // Wheels
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.arc(x - size/2, y + size/2, size/3, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(x + size/2, y + size/2, size/3, 0, Math.PI * 2);
    ctx.fill();
    
    // Add a small highlight to make the car more visible
    ctx.strokeStyle = 'rgba(255,255,255,0.5)';
    ctx.lineWidth = 1;
    ctx.strokeRect(x - size + 1, y - size/2 + 1, size * 2 - 2, size - 2);
  }, []);

  // Main draw function
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // Setup canvas and get context
    const { width, height, ctx } = setupCanvas(canvas);
    if (!ctx) return;
    
    // Clear the canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw background
    ctx.fillStyle = '#0b1c3a';
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = 'rgba(148,163,184,0.18)';
    ctx.lineWidth = 2;
    ctx.strokeRect(6, 6, width - 12, height - 12);
    
    const trackY = height * 0.5;
    
    // Parse input values
    const x0n = Number(x0) || 0;
    const xN = Number(x);
    const dn = Number(d);
    
    // Calculate final position (use distance if provided, otherwise use x)
    let xSafe = x0n; // Default to initial position
    
    if (!isNaN(dn) && dn !== 0) {
      // If distance is provided, calculate final position relative to x0
      xSafe = x0n + (dn >= 0 ? dn : -dn); // Ensure positive distance
    } else if (!isNaN(xN)) {
      // If x is provided, use it directly
      xSafe = xN;
    } else {
      // Default to some reasonable range if no valid positions
      xSafe = x0n + 10; // Default 10m range
    }
    
    // Calculate current position (for animation)
    const effectiveCurrentX = (currentX !== undefined && !isNaN(currentX)) 
      ? currentX 
      : x0n + (xSafe - x0n) * (progress || 0);
    
    // Ensure we have valid positions for drawing
    if (isNaN(x0n) || isNaN(xSafe) || isNaN(effectiveCurrentX)) {
      console.error('Invalid position values:', { x0n, xSafe, effectiveCurrentX });
      return;
    }
    
    // Draw scale and get scale info
    const scaleInfo = drawScale(ctx, width, height, trackY, x0n, xSafe);
    if (!scaleInfo) return;
    
    const { toPx } = scaleInfo;
    
    // Draw markers (start and end positions)
    drawMarkers(ctx, toPx, trackY, x0n, xSafe, unknownLabel);
    
    // Draw moving object at current position
    const currentXPx = toPx(effectiveCurrentX);
    drawObject(ctx, currentXPx, trackY);
    
  }, [x0, x, d, currentX, progress, setupCanvas, drawScale, drawMarkers, drawObject]);
  
  // Set up animation frame loop
  useEffect(() => {
    let animationFrameId;
    let lastTime = 0;
    const frameRate = 60; // 60 FPS
    const frameDelay = 1000 / frameRate;
    
    const render = (currentTime) => {
      // Control frame rate
      if (!lastTime || currentTime - lastTime >= frameDelay) {
        lastTime = currentTime;
        if (drawRef.current) {
          drawRef.current();
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };
    
    // Start rendering loop
    animationFrameId = requestAnimationFrame(render);
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [x0, x, d, currentX, progress]);
  
  // Store the latest draw function and force a redraw when it changes
  useEffect(() => {
    drawRef.current = draw;
    if (draw) {
      draw();
    }
  }, [draw, x0, x, d, currentX, progress]);

  // Return draw function for manual triggering if needed
  return { draw };
}
