import React from 'react';
import SubtopicShell from '../../../../components/layout/SubtopicShell';
import { createSubtopicProps } from '../../../../utils/subtopicoHelper';

// Importa los datos
import {
  teoriaMR,
  ejerciciosMR,
  simuladorMR
} from '../../../../data/cinematica/mr';

// Importar directamente desde Sections
import examplesFromFile from './MRSections/Examples';
// Autocarga de calculadoras: se elimina el uso directo de Calculator

import TheoryComponent from './MRSections/Theory';

export default function MR() {
  const subtopicProps = createSubtopicProps({
    title: "Movimiento Relativo",
    intro: <p>Estudio del movimiento en diferentes marcos de referencia.</p>,
    headerVariant: "mp",
    sectionVariant: "card",
    backLink: { to: '/clasica/mecanica/cinematica', label: 'Volver a Cinemática' },
    
    teoria: <TheoryComponent />,
    ejemplos: examplesFromFile,
    ejercicios: ejerciciosMR,
    simulador: simuladorMR,
  });

  return <SubtopicShell {...subtopicProps} />;
}