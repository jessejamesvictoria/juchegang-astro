export interface NavItem {
  href: string
  label: string
  labelEn: string
  section: string
}

/**
 * Five destinations. The header previously carried twenty one targets, which
 * is not navigation, it is a table of contents pretending to be one.
 * Korean labels lead per the brand kit; English rides along as a subtitle.
 */
export const navItems: NavItem[] = [
  { href: '#current', label: '현재', labelEn: 'Current', section: 'current' },
  { href: '#manifesto', label: '선언', labelEn: 'Manifesto', section: 'manifesto' },
  { href: '#heritage', label: '유산', labelEn: 'Heritage', section: 'heritage' },
  { href: '#network', label: '연결망', labelEn: 'Network', section: 'network' },
  { href: '/support', label: '후원', labelEn: 'Support', section: 'support' },
]

export const scrollSpySections = navItems
  .filter((item) => item.href.startsWith('#'))
  .map((item) => item.section)
