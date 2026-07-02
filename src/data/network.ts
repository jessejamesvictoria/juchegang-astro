export interface NetworkSite {
  name: string
  url: string
  description: string
  tag?: string
}

export const networkSites: NetworkSite[] = [
  {
    name: 'juche.org',
    url: 'https://juche.org',
    description: 'Philosophy, sovereignty, and the long-form case for one Korea.',
    tag: 'Core',
  },
  {
    name: 'tiger.juche.org',
    url: 'https://tiger.juche.org',
    description: 'Tiger Unity. Diaspora organizing and cultural sovereignty.',
    tag: 'Core',
  },
  {
    name: 'juchegang.ca',
    url: 'https://juchegang.ca',
    description: 'Navigate the current. Essays, reunification, and strategic analysis.',
    tag: 'Core',
  },
  {
    name: 'jpanda.org',
    url: 'https://jpanda.org',
    description: 'Research, narrative, and the JPanda intellectual network.',
    tag: 'Core',
  },
  {
    name: 'npsi.ca',
    url: 'https://npsi.ca',
    description: 'North Pacific strategic intelligence and policy research.',
    tag: 'Pacific',
  },
  {
    name: 'langfordcity.com',
    url: 'https://langfordcity.com',
    description: 'Municipal intelligence and civic infrastructure for Langford, BC.',
    tag: 'Civic',
  },
  {
    name: 'fitforgov.com',
    url: 'https://fitforgov.com',
    description: 'Government readiness, public-sector AI, and institutional transformation.',
    tag: 'Gov',
  },
  {
    name: 'gprkinetic.pro',
    url: 'https://gprkinetic.pro',
    description: 'AI-orchestrated franchise operations and kinetic infrastructure.',
    tag: 'AI',
  },
  {
    name: '1929.world',
    url: 'https://1929.world',
    description: 'Economic history, systemic risk, and the architecture of collapse.',
    tag: 'Research',
  },
  {
    name: 'ibrahim.help',
    url: 'https://ibrahim.help',
    description: 'Energy partnerships bridging Western enterprise and North Africa.',
    tag: 'Bridge',
  },
]

export const stats = [
  { value: '80M', label: 'Koreans Worldwide', labelKo: '전 세계 한인' },
  { value: '38M', label: 'Canadians', labelKo: '캐나다인' },
  { value: '18K+', label: 'Professional Network', labelKo: '전문 네트워크' },
  { value: '13+', label: 'Network Properties', labelKo: '네트워크 사이트' },
]

export const developments = [
  {
    date: '2026',
    title: 'AI-orchestrated civic and strategic intelligence across the Pacific corridor.',
    titleKo: '태평양 회랑 전역의 AI 기반 시민·전략 인텔리전스.',
  },
  {
    date: '2025',
    title: 'Network expansion: fitforgov.com, gprkinetic.pro, and municipal platforms.',
    titleKo: '네트워크 확장. 정부·프랜차이즈·시정 플랫폼.',
  },
  {
    date: '2024',
    title: 'Long-form reunification thesis published across juchegang.ca and juche.org.',
    titleKo: '통일 논증 장문 시리즈 공개.',
  },
  {
    date: '2000',
    title: 'Inter-Korean Summit. The peace dialogue clock begins.',
    titleKo: '남북 정상회담. 평화 대화의 시계가 시작되다.',
  },
]

export const processSteps = [
  {
    step: '01',
    title: 'Connect',
    titleKo: '연결',
    description: 'Bridge Korean diaspora communities in Canada with strategic intelligence and civic infrastructure.',
    descriptionKo: '캐나다 한인 디아스포라와 전략·시민 인프라를 연결합니다.',
  },
  {
    step: '02',
    title: 'Verify',
    titleKo: '검증',
    description: 'Every claim sourced. Every introduction backed by on-the-ground intelligence and rigorous analysis.',
    descriptionKo: '모든 주장은 출처가 있고, 모든 소개는 현장 정보와 분석으로 뒷받침됩니다.',
  },
  {
    step: '03',
    title: 'Orchestrate',
    titleKo: '조율',
    description: 'AI-powered workflows coordinate research, communications, and cross-network collaboration.',
    descriptionKo: 'AI 워크플로가 연구, 커뮤니케이션, 네트워크 협업을 조율합니다.',
  },
  {
    step: '04',
    title: 'Unify',
    titleKo: '통일',
    description: 'One peninsula. One people. Technology in service of sovereignty, dignity, and peace.',
    descriptionKo: '하나의 반도, 하나의 민족. 주권과 존엄, 평화를 위한 기술.',
  },
]