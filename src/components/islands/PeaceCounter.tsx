import { useState, useEffect } from 'react'

function CounterSkeleton() {
  return (
    <div className="stat-num stat-bleed skeleton w-48 h-20 md:w-64 md:h-28" aria-hidden="true" />
  )
}

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
    <section className="border-b border-[var(--rule)]" aria-label="Peace dialogue counter">
      <div className="hazard-stripe" aria-hidden="true" />
      <div className="container-app">
        <div className="grid md:grid-cols-12 border-x border-[var(--rule)] blueprint-canvas relative">
          <span className="crosshair-mark tl" aria-hidden="true">+</span>
          <span className="crosshair-mark br" aria-hidden="true">+</span>

          <div className="md:col-span-4 cell border-b md:border-b-0 md:border-r border-[var(--rule)] reveal">
            <samp className="font-mono-ui text-[var(--hazard)] block mb-3">2000-06-15 / PYONGYANG</samp>
            <h2 className="font-macro text-2xl md:text-3xl frame-bracket text-balance">Peace dialogue</h2>
            <p className="font-ko text-xs text-[var(--muted)] mt-2">평화 대화의 날들</p>
            <dl className="mt-8 space-y-3">
              <div className="flex justify-between gap-4 border-t border-[var(--rule)] pt-2">
                <dt className="font-mono-ui text-[var(--muted)]">Origin</dt>
                <dd className="font-mono-ui">Summit</dd>
              </div>
              <div className="flex justify-between gap-4 border-t border-[var(--rule)] pt-2">
                <dt className="font-mono-ui text-[var(--muted)]">Status</dt>
                <dd className="font-mono-ui text-[var(--hazard)]">Active</dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-8 cell flex flex-col justify-center items-start md:items-end reveal reveal-delay-1">
            {days === null ? (
              <CounterSkeleton />
            ) : (
              <output
                className="stat-num stat-bleed text-[var(--ink)]"
                aria-live="polite"
              >
                {days.toLocaleString()}
              </output>
            )}
            <p className="font-mono-ui text-[var(--muted)] mt-4">Days elapsed</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PeaceCounter