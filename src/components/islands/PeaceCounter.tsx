/**
 * PeaceCounter Island - Layer 1 (React Hydration)
 *
 * Real-time counter showing days since the historic 2000 Inter-Korean Summit.
 * Directive: client:idle (not critical for initial paint)
 */
import { useState, useEffect } from 'react'

interface StatItem {
  icon: string
  value: string
  label: string
}

export function PeaceCounter() {
  const [days, setDays] = useState(0)

  useEffect(() => {
    const calculateTime = () => {
      const startDate = new Date('2000-06-15T00:00:00')
      const now = new Date()
      const diff = now.getTime() - startDate.getTime()
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      setDays(days)
    }

    calculateTime()
    const interval = setInterval(calculateTime, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [])

  const stats: StatItem[] = [
    { icon: '📅', value: days.toLocaleString(), label: 'Days of Peace Dialogue' },
    { icon: '❤️', value: '∞', label: 'Hearts United' },
    { icon: '👥', value: '7.9B', label: 'People for Peace' },
    { icon: '🌍', value: '195', label: 'Nations Connected' },
  ]

  return (
    <div className="bg-gradient-to-r from-blue-950 via-red-950 to-blue-950 py-8 border-y border-white/10">
      <div className="container-app">
        <div className="text-center mb-6 animate-slideInUp">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-red-400 to-blue-400 bg-clip-text text-transparent mb-2">
            Journey to Unity
          </h3>
          <p className="text-white/60 text-sm">
            Building bridges since the historic 2000 Inter-Korean Summit
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all animate-scaleIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-3xl mb-2">{stat.icon}</span>
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-white/60">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center animate-float">
          <p className="text-sm text-yellow-400">
            Every moment brings us closer to peaceful reunification
          </p>
        </div>
      </div>
    </div>
  )
}

export default PeaceCounter
