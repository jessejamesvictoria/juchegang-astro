export interface NavItem {
  href: string
  label: string
  section: string
}

export const navItems: NavItem[] = [
  { href: '#current', label: 'Current', section: 'current' },
  { href: '#manifesto', label: 'Manifesto', section: 'manifesto' },
  { href: '#bridge', label: 'Bridge', section: 'bridge' },
  { href: '#heritage', label: 'Heritage', section: 'heritage' },
  { href: '#network', label: 'Network', section: 'network' },
  { href: '#ai', label: 'AI', section: 'ai' },
  { href: '#process', label: 'Process', section: 'process' },
  { href: '#brand', label: 'Brand', section: 'brand' },
  { href: '#contact', label: 'Contact', section: 'contact' },
]

export const scrollSpySections = navItems.map((item) => item.section)