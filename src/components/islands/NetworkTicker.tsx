import { networkSites } from '../../data/network'

const items = [...networkSites, ...networkSites]

export function NetworkTicker() {
  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker-track">
        {items.map((site, i) => (
          <span
            key={`${site.name}-${i}`}
            className="font-mono-ui text-[var(--ink)] px-8 py-2.5 inline-flex items-center gap-3 whitespace-nowrap"
          >
            <span className="text-[var(--hazard)]">+</span>
            {site.name}
            {site.tag && (
              <span className="text-[0.55rem] border border-[var(--hazard)] text-[var(--hazard)] px-1.5 py-0.5">
                {site.tag}
              </span>
            )}
            <span className="text-[var(--muted)]">///</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default NetworkTicker