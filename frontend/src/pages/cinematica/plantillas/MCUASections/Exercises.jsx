import React from 'react'
import ExerciseCard from '../../../../../components/ExerciseCard'

const exercises = [
  {
    id: 1,
    difficulty: 'easy',
    statement: 'Una rueda parte del reposo y acelera a 3 rad/s² durante 4 s. ¿Qué velocidad angular alcanza?',
    given: ['ω₀ = 0 rad/s', 'α = 3 rad/s²', 't = 4 s'],
    correctAnswer: 12,
    unit: 'rad/s',
    tolerance: 0.1,
    solution: [
      'Datos: ω₀ = 0, α = 3, t = 4',
      'Usa ω = ω₀ + αt',
      'ω = 0 + 3×4 = 12 rad/s',
    ],
    hints: ['Usa ω = ω₀ + αt', 'Partir del reposo implica ω₀ = 0'],
  },
  {
    id: 2,
    difficulty: 'medium',
    statement: 'Un disco con ω₀ = 5 rad/s acelera a α = 2 rad/s² durante 3 s. ¿Qué ángulo recorre?',
    given: ['ω₀ = 5 rad/s', 'α = 2 rad/s²', 't = 3 s'],
    correctAnswer: 24,
    unit: 'rad',
    tolerance: 0.1,
    solution: [
      'Datos: ω₀ = 5, α = 2, t = 3',
      'Usa θ = ω₀t + ½αt²',
      'θ = 5×3 + 0.5×2×3² = 15 + 9 = 24 rad',
    ],
    hints: ['Incluye el término ½αt²', 'Verifica unidades'],
  },
  {
    id: 3,
    difficulty: 'hard',
    statement: 'Una partícula frena de 8 rad/s a 2 rad/s recorriendo 15 radianes. ¿Cuál es su aceleración angular?',
    given: ['ω₀ = 8 rad/s', 'ω = 2 rad/s', 'θ = 15 rad'],
    correctAnswer: -2,
    unit: 'rad/s²',
    tolerance: 0.1,
    solution: [
      'Datos: ω₀ = 8, ω = 2, θ = 15',
      'Usa ω² = ω₀² + 2αθ',
      '2² = 8² + 2α×15 → α = (4 - 64)/30 = -2 rad/s²',
    ],
    hints: ['Si frena, α < 0', 'Revisa el despeje de α'],
  },
]

export default function Exercises() {
  return (
    <div className="space-y-6">
      {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            color="orange"
            onComplete={() => {}}
          />
      ))}
    </div>
  )
}
