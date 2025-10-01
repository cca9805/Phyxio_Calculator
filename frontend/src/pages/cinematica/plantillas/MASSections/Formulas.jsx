import React from 'react'
import FormulaDisplay from '../../../../../components/FormulaDisplay'
import formulasData from './formulas'

export default function Formulas() {
  const items = Array.isArray(formulasData) ? formulasData : []
  return <FormulaDisplay formulas={items} />
}

