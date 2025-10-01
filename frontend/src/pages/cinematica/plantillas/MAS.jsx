import React from 'react';
import SubtopicShell from '../../../../components/layout/SubtopicShell';
import { createSubtopicProps } from '../../../../utils/subtopicoHelper';

// Importa los datos
import {
  teoriaMAS,
  ejerciciosMAS,
  simuladorMAS
} from '../../../../data/cinematica/mas';

// Importar directamente desde Sections
import examplesFromFile from './MASSections/Examples';
// Autocarga de calculadoras: se elimina el uso directo de Calculator

// Importar el componente de teoría directamente
import TheoryComponent from './MASSections/Theory';

export default function MAS() {
  const subtopicProps = createSubtopicProps({
    title: "Movimiento Armónico Simple",
    intro: <p>Movimiento oscilatorio donde la fuerza es proporcional al desplazamiento.</p>,
    headerVariant: "mp",
    sectionVariant: "card",
    backLink: { to: '/clasica/mecanica/cinematica', label: 'Volver a Cinemática' },
    
    teoria: <TheoryComponent />,
    
    ejemplos: examplesFromFile,
    ejercicios: ejerciciosMAS,
    simulador: simuladorMAS
  });

  return <SubtopicShell {...subtopicProps} />;
}