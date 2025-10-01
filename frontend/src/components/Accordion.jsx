import React, { useState, useRef, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

// Accessible Accordion component
export default function Accordion({ items = [], headerStyle = null, panelStyle = null }) {
  // Generar claves únicas estables para cada ítem
  const itemsWithKeys = useMemo(() => {
    return items.map((item, index) => {
      // Si el ítem ya tiene un ID, usarlo junto con un sufijo único
      if (item.id) {
        return {
          ...item,
          _uniqueKey: `${item.id}-${index}`
        };
      }
      
      // Si tiene un título, usarlo como base para la clave
      if (item.title) {
        const titleKey = typeof item.title === 'string' 
          ? item.title.toLowerCase().replace(/\s+/g, '-')
          : `item-${index}`;
        return {
          ...item,
          _uniqueKey: `${titleKey}-${index}`
        };
      }
      
      // Como último recurso, generar un UUID único
      return {
        ...item,
        _uniqueKey: `accordion-${uuidv4()}`
      };
    });
  }, [items]);

  return (
    <div className="accordion" role="presentation">
      {itemsWithKeys.map((item, idx) => (
        <AccordionItem 
          key={item._uniqueKey} 
          item={item} 
          index={idx} 
          headerStyle={headerStyle} 
          panelStyle={panelStyle} 
        />
      ))}
    </div>
  );
}

function AccordionItem({ item, index, headerStyle: propHeaderStyle = null, panelStyle: propPanelStyle = null }) {
  const [open, setOpen] = useState(!!item.defaultOpen);
  const btnRef = useRef(null);
  // Usar estilos de tema en lugar de estilos en línea
  const headerStyle = propHeaderStyle || {};
  const panelStyle = propPanelStyle || {};

  function toggle() {
    setOpen(o => !o);
  }

  function onKey(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  }

  const panelId = `accordion-panel-${index}`;
  const btnId = `accordion-btn-${index}`;

  return (
    <div className={`accordion-item ${open ? 'open' : ''}`}>
      <button
        id={btnId}
        ref={btnRef}
        aria-expanded={open}
        aria-controls={panelId}
        className="accordion-button"
        style={headerStyle}
        onClick={toggle}
        onKeyDown={onKey}
      >
        <span className="accordion-icon" aria-hidden>{item.icon ? item.icon : ''}</span>
        <span className="accordion-title">{item.title}</span>
        <span className="accordion-caret" aria-hidden> {open ? '▾' : '▸'}</span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className="accordion-panel"
        aria-hidden={!open}
      >
        <div className="accordion-panel-inner">
          <div className="accordion-panel-text" style={panelStyle}>{item.content}</div>
        </div>
      </div>
    </div>
  );
}
