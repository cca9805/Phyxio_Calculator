import React from 'react';
import SubtopicShell from '../../../../components/layout/SubtopicShell';
import { createSubtopicProps } from '../../../../utils/subtopicoHelper';

// Importar directamente desde Sections
import TheoryComponent from './MRUSections/Theory';
import examplesFromFile from './MRUSections/Examples';
// Autocarga de calculadoras: se elimina el uso directo de Calculator

// Importar los demás datos si son necesarios
import {
  ejerciciosMRU,
  simuladorMRU
} from '../../../../data/cinematica/mru';

export default function MRU() {
  const subtopicProps = createSubtopicProps({
    title: "Movimiento Rectilíneo Uniforme",
    intro: <p>Movimiento en línea recta con velocidad constante.</p>,
    headerVariant: "mp",
    sectionVariant: "card",
    backLink: { to: '/clasica/mecanica/cinematica', label: 'Volver a Cinemática' },
    
    teoria: <TheoryComponent />,
    ejemplos: examplesFromFile,
    ejercicios: ejerciciosMRU,
    simulador: simuladorMRU,
    
    // Asegurarse de que todas las secciones estén habilitadas
    defaultOpen: ['formulas'] // Abrir la sección de fórmulas por defecto
  });

  // SOLO retornar el SubtopicShell, sin renderizado adicional
  return <SubtopicShell {...subtopicProps} />;
}