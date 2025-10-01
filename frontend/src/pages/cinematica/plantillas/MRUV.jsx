import React from 'react';
import SubtopicShell from '../../../../components/layout/SubtopicShell';
import { createSubtopicProps } from '../../../../utils/subtopicoHelper';

// Importa los datos
import {
  teoriaMRUV,
  ejerciciosMRUV,
  simuladorMRUV
} from '../../../../data/cinematica/mruv';

// Importar directamente desde Sections
import examplesFromFile from './MRUVSections/Examples';
// Autocarga de calculadoras: se elimina el uso directo de Calculator

// Importar el componente de teoría directamente
import TheoryComponent from './MRUVSections/Theory';

export default function MRUV() {
  const subtopicProps = createSubtopicProps({
    title: "Movimiento Rectilíneo Uniformemente Variado",
    intro: <p>Movimiento en línea recta con aceleración constante.</p>,
    headerVariant: "mp",
    sectionVariant: "card",
    backLink: { to: '/clasica/mecanica/cinematica', label: 'Volver a Cinemática' },
    
    teoria: <TheoryComponent />,
    
    ejemplos: examplesFromFile,
    ejercicios: ejerciciosMRUV,
    simulador: simuladorMRUV
  });

  return <SubtopicShell {...subtopicProps} />;
}