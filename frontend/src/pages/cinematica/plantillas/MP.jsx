import React from 'react';
import SubtopicShell from '../../../../components/layout/SubtopicShell';
import { createSubtopicProps } from '../../../../utils/subtopicoHelper';

// Importa los datos
import {
  teoriaMP,
  ejerciciosMP,
  simuladorMP
} from '../../../../data/cinematica/mp';

// Importar directamente desde Sections
import examplesFromFile from './MPSections/Examples';
// Autocarga de calculadoras: se elimina el uso directo de Calculator

// Importar el componente de teoría directamente
import TheoryComponent from './MPSections/Theory';

export default function MP() {
  const subtopicProps = createSubtopicProps({
    title: "Movimiento Parabólico",
    intro: <p>Movimiento de un proyectil bajo la acción de la gravedad.</p>,
    headerVariant: "mp",
    sectionVariant: "card",
    backLink: { to: '/clasica/mecanica/cinematica', label: 'Volver a Cinemática' },
    
    teoria: <TheoryComponent />,
    
    ejemplos: examplesFromFile,
    ejercicios: ejerciciosMP,
    simulador: simuladorMP
  });

  return <SubtopicShell {...subtopicProps} />;
}