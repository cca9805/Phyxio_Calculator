import { useRef, useEffect, useCallback } from 'react';

const toNumber = (v) => {
  if (v === null || v === undefined || v === '') return NaN;
  const n = Number(String(v).replace(',', '.'));
  return Number.isFinite(n) ? n : NaN;
};

export function useMCUCanvas(canvasRef, { 
  radius: propRadius, 
  velocity: propVelocity, 
  angularVelocity: propAngularVelocity,
  period: propPeriod,
  frequency: propFrequency,
  unknownLabel = '',
  currentAngle = 0,
  progress = 0,
  x = 0,
  y = 0,
  centerX = null,
  centerY = null,
  canvasWidth = null,
  canvasHeight = null
}) {
  const dpr = window.devicePixelRatio || 1;
  const drawRef = useRef();
  
  // Parse values with defaults
  const radius = Math.max(0.1, toNumber(propRadius) || 5);
  const velocity = toNumber(propVelocity);
  const angularVelocity = toNumber(propAngularVelocity);
  const period = toNumber(propPeriod);
  const frequency = toNumber(propFrequency);
  
  // Calculate derived values
  const ω = Number.isFinite(angularVelocity) ? angularVelocity : 
           (Number.isFinite(frequency) ? 2 * Math.PI * frequency :
           (Number.isFinite(period) && period > 0 ? (2 * Math.PI) / period : 2));
  
  const v = Number.isFinite(velocity) ? velocity : 
           (Number.isFinite(radius) && Number.isFinite(ω) ? radius * ω : 10);
  
  const T = Number.isFinite(period) ? period : 
           (Number.isFinite(frequency) && frequency > 0 ? 1 / frequency :
           (Number.isFinite(ω) && ω !== 0 ? (2 * Math.PI) / ω : 3.14));
  
  const f = Number.isFinite(frequency) ? frequency : 
           (Number.isFinite(ω) ? ω / (2 * Math.PI) : 0.32);

  // Setup canvas dimensions with provided size or default
  const setupCanvas = useCallback((canvas) => {
    if (!canvas) return { width: 0, height: 0, ctx: null };
    
    const defaultSize = 400;
    const width = canvasWidth || defaultSize;
    const height = canvasHeight || defaultSize;
    
    // Set canvas dimensions
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    
    const ctx = canvas.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    
    return { width, height, ctx };
  }, [dpr, canvasWidth, canvasHeight]);

  // Draw the circular path
  const drawCircle = useCallback((ctx, centerX, centerY, radius) => {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = 'rgba(99, 102, 241, 0.5)';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }, []);

  // Draw the moving object
  const drawObject = useCallback((ctx, centerX, centerY, radius, angle, width, height) => {
    const x = centerX + radius * Math.cos(angle - Math.PI/2);
    const y = centerY + radius * Math.sin(angle - Math.PI/2);
    
    // Draw object
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, 2 * Math.PI);
    ctx.fillStyle = '#4F46E5';
    ctx.fill();
    
    // Draw velocity vector (tangent to the circle)
    ctx.beginPath();
    ctx.moveTo(x, y);
    const vx = v * Math.cos(angle);
    const vy = v * Math.sin(angle);
    ctx.lineTo(x + vx, y + vy);
    ctx.strokeStyle = '#EF4444';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Draw radius
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = '#10B981';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    
    // Draw angle with better positioning
    const angleDeg = ((angle * 180 / Math.PI) % 360).toFixed(1);
    const angleText = `θ = ${angleDeg}°`;
    const textMetrics = ctx.measureText(angleText);
    const textWidth = textMetrics.width;
    const textHeight = 20; // Approximate height of the text
    
    // Calculate position based on angle to avoid overlap with the object
    let textX, textY;
    const padding = 10;
    
    // Determine quadrant to position the text
    const quadrant = Math.floor((angle + Math.PI/4) / (Math.PI/2)) % 4;
    
    // Position text in the quadrant opposite to the object
    switch(quadrant) {
      case 0: // Top-right quadrant
        textX = centerX + radius/2;
        textY = centerY - radius - 15;
        break;
      case 1: // Bottom-right quadrant
        textX = centerX + radius + 15;
        textY = centerY + radius/2;
        break;
      case 2: // Bottom-left quadrant
        textX = centerX - radius/2;
        textY = centerY + radius + 15 + textHeight;
        break;
      case 3: // Top-left quadrant
      default:
        textX = centerX - radius - 15 - textWidth/2;
        textY = centerY - radius/2;
        break;
    }
    
    // Ensure text stays within canvas bounds
    textX = Math.max(padding, Math.min(width - textWidth - padding, textX));
    textY = Math.max(textHeight + padding, Math.min(height - padding, textY));
    
    // Draw text with background for better visibility
    ctx.font = '16px Arial';
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    const textPadding = 5;
    const bgX = textX - textPadding;
    const bgY = textY - textHeight;
    const bgWidth = textWidth + 2 * textPadding;
    const bgHeight = textHeight + 2 * textPadding;
    
    // Draw background
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillRect(bgX, bgY, bgWidth, bgHeight);
    
    // Draw text
    ctx.fillStyle = '#1F2937';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText(angleText, textX, textY - textHeight + textPadding);
    
    return { x, y };
  }, [v]);

  // HUD drawing has been removed as per user request

  // Main draw function
  const draw = useCallback(() => {
    // Ensure we have valid values
    if (isNaN(currentAngle) || !isFinite(currentAngle)) {
      console.warn('Invalid angle:', currentAngle);
      return { angle: currentAngle, x: 0, y: 0 };
    }
    
    // Debug log
    console.log('Drawing with angle:', currentAngle, 'progress:', progress);
    const canvas = canvasRef.current;
    if (!canvas) {
      console.warn('Canvas ref is not attached');
      return { angle: currentAngle, x: 0, y: 0 };
    }
    
    const { width, height, ctx } = setupCanvas(canvas);
    if (!ctx) {
      console.warn('Could not get canvas context');
      return { angle: currentAngle, x: 0, y: 0 };
    }
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Usar el centro proporcionado o calcularlo
    let centerXValue = Number.isFinite(centerX) ? centerX : width / 2;
    let centerYValue = Number.isFinite(centerY) ? centerY : height / 2;
    // Asegurar que el radio sea un número válido
    const effectiveRadius = Math.max(10, Math.min(
      Number.isFinite(radius) ? radius * 8 : 50,  // Reducido de 30 a 8
      Math.min(width * 0.4, height * 0.4)
    ));
    
    // Dibujar el círculo
    drawCircle(ctx, centerXValue, centerYValue, effectiveRadius);
    
    // Dibujar el objeto en el ángulo actual
    const angle = currentAngle % (2 * Math.PI);
    console.log('Drawing object at angle:', angle, 'center:', { x: centerXValue, y: centerYValue });
    
    // Dibujar el objeto y obtener su posición
    const objectPos = drawObject(
      ctx, 
      centerXValue, 
      centerYValue, 
      effectiveRadius, 
      angle, 
      width, 
      height
    );
    
    // Return current state for debugging
    return {
      angle,
      x: objectPos.x,
      y: objectPos.y,
      radius: effectiveRadius
    };
    
    // HUD drawing has been removed as per user request
    
    // Draw progress with calculated center
    if (progress > 0 && progress < 1) {
      ctx.beginPath();
      ctx.arc(centerXValue, centerYValue, effectiveRadius + 10, -Math.PI/2, -Math.PI/2 + 2 * Math.PI * progress);
      ctx.strokeStyle = '#4F46E5';
      ctx.lineWidth = 3;
      ctx.stroke();
    }
    
  }, [
    canvasRef, 
    setupCanvas, 
    drawCircle, 
    drawObject, 
    radius, 
    v, 
    ω, 
    T, 
    f, 
    currentAngle, 
    progress,
    centerX,
    centerY
  ]);

  // Force redraw when animation values change
  useEffect(() => {
    const state = draw();
    console.log('Canvas draw complete:', state);
  }, [draw, currentAngle, progress, x, y]);

  // Update draw reference when dependencies change
  useEffect(() => {
    drawRef.current = draw;
  }, [draw]);

  // Initial draw and cleanup
  useEffect(() => {
    draw();
    
    return () => {
      // Cleanup if needed
    };
  }, [draw]);

  // Return values that might be useful for the parent component
  return {
    radius: radius,
    velocity: v,
    angularVelocity: ω,
    period: T,
    frequency: f,
    redraw: draw
  };
}
