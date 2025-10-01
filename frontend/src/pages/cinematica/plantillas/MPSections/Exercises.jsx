import React from 'react'
import ExerciseCard from '../../../../../components/ExerciseCard'

const exercises = [
  {
    id: 1,
    difficulty: 'easy',
    statement: 'Un proyectil se lanza con v₀ = 30 m/s y θ = 45°. ¿Cuál es su alcance máximo?',
    given: ['v₀ = 30 m/s', 'θ = 45°'],
    correctAnswer: 91.8,
    unit: 'm',
    tolerance: 0.5,
    solution: ['R = (v₀² sin(2θ))/g = 900/9.8 = 91.8 m'],
    hints: ['Usa R = (v₀² sin(2θ))/g', 'sin(90°) = 1']
  },
  {
    id: 2,
    difficulty: 'medium',
    statement: 'v₀ = 25 m/s y θ = 60°. ¿Altura máxima?',
    given: ['v₀ = 25 m/s', 'θ = 60°'],
    correctAnswer: 23.9,
    unit: 'm',
    tolerance: 0.2,
    solution: ['h_max = (v₀² sin²θ)/(2g) = (625×0.75)/19.6 = 23.9 m'],
    hints: ['sin²60° = 0.75']
  }
]

export default function Exercises() {
  return (
    <div className="space-y-4">
      {exercises.map((exercise) => (
  <ExerciseCard key={exercise.id} exercise={exercise} color="orange" onComplete={() => {}} />
      ))}
    </div>
  )
}
