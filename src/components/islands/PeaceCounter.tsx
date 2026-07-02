import { useState, useEffect } from 'react'

export function PeaceCounter() {
  const [days, setDays] = useState<number | null>(null)

  useEffect(() => {
    const calc = () => {
      const start = new Date('2000-06-15T00:00:00')
      const now = new Date()
      setDays(Math.floor((now.getTime() - start.getTime()) / 86400000))
    }
    calc()
    const id = setInterval(calc, 60000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="border-b-2 border-[var(--ink)]" aria-label="Peace dialogue counter">
      <div className="container-app">
        <div className="grid md:grid-cols-12 border-x-2 border-[var(--ink)]">
          <div className="md:col-span-4 cell border-b-2 md:border-b-0 md:border-r-2 border-[var(--ink)]">
            <p className="font-mono-ui text-[var(--hazard)] mb-3">Since 2000-06-15</p>
            <h2 className="font-macro text-2xl">Peace Dialogue</h2>
            <p className="font-ko text-xs text-[var(--muted)] mt-2">평화 대화의 날들</p>
          </div>
          <div className="md:col-span-8 cell flex flex-col justify-center items-start md:items-end">
            <output className="stat-num text-[var(--ink)]" aria-live="polite">
              {days === null ? '---' : days.toLocaleString()}
            </output>
            <p className="font-mono-ui text-[var(--muted)] mt-3 text-right">Days since Inter-Korean Summit</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PeaceCounter