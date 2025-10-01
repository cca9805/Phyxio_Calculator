import { useEffect, useRef, useState } from 'react'

export default function useSimulatorLoop({
  initialDt = 0.1,
  initialTMax = 10,
  persistKey = null
} = {}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [t, setT] = useState(0)
  const [dt, setDt] = useState(initialDt)
  const [tMax, setTMax] = useState(initialTMax)
  const intervalRef = useRef(null)

  // persistence (optional)
  useEffect(() => {
    if (!persistKey) return
    try {
      const saved = JSON.parse(localStorage.getItem(persistKey) || '{}')
      if (typeof saved.t === 'number') setT(saved.t)
      if (typeof saved.dt === 'number') setDt(saved.dt)
      if (typeof saved.tMax === 'number') setTMax(saved.tMax)
    } catch {}
  }, [persistKey])

  useEffect(() => {
    if (!persistKey) return
    try {
      localStorage.setItem(persistKey, JSON.stringify({ t, dt, tMax }))
    } catch {}
  }, [persistKey, t, dt, tMax])

  useEffect(() => {
    if (!isPlaying) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      intervalRef.current = null
      return
    }
    const intervalMs = Math.max(16, Math.floor(1000 * dt))
    intervalRef.current = setInterval(() => {
      setT(prev => {
        const next = +(prev + dt).toFixed(5)
        if (next >= tMax) {
          setIsPlaying(false)
          return tMax
        }
        return next
      })
    }, intervalMs)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isPlaying, dt, tMax])

  const play = () => setIsPlaying(true)
  const pause = () => setIsPlaying(false)
  const toggle = () => setIsPlaying(p => !p)
  const reset = () => { setIsPlaying(false); setT(0) }

  return {
    isPlaying,
    t,
    dt,
    tMax,
    setT,
    setDt: (v) => setDt(Math.max(0.01, Number(v) || initialDt)),
    setTMax: (v) => setTMax(Math.max(1, Number(v) || initialTMax)),
    play,
    pause,
    toggle,
    reset,
  }
}
