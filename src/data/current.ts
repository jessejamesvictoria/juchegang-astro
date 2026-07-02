export interface CurrentStat {
  label: string
  value: string
  detail?: string
}

export interface CurrentPanel {
  id: string
  roman: string
  hanja: string
  title: string
  titleKo: string
  lead: string
  leadKo: string
  body: string
  bodyKo: string
  stats: CurrentStat[]
  quote?: { text: string; attribution: string }
}

export const unityThesis = {
  headline: 'One people, regardless of the line',
  headlineKo: '어느 쪽에 서 있든, 하나의 민족',
  subhead:
    'Eighty million Koreans share five thousand years of history. The 38th parallel is a foreign officer\'s pencil stroke — not a verdict on kinship. North or South, the lineage is one.',
  subheadKo:
    '8천만 한인은 5천 년의 역사를 공유합니다. 38도선은 외국 장교의 연필선일 뿐 — 혈통의 판결문이 아닙니다. 북이든 남이든, 핏줄은 하나입니다.',
  context:
    'In 1945 two officers divided the peninsula in roughly thirty minutes using a magazine map, consulting zero Koreans. The strategic question is not whether the order is changing — but where leverage accrues when it does.',
  contextKo:
    '1945년 두 장교가 잡지 지도로 약 30분 만에 반도를 나눴고, 한국인은 한 명도 상의하지 않았습니다. 질문은 질서가 바뀌는지가 아니라 — 바뀔 때 어디에 영향력이 쏠리는가입니다.',
}

export const yiSunSin = {
  name: 'Admiral Yi Sun-sin',
  nameKo: '충무공 이순신',
  years: '1545–1598',
  record: '23 battles · zero defeats',
  recordKo: '23전 23승',
  myeongnyang: '13 ships vs. 330',
  myeongnyangKo: '명량해전 · 13척 대 330척',
  funding: 'No foreign subsidy. No leased umbrella.',
  fundingKo: '외국 보조 없음. 임대 우산 없음.',
  unity:
    'Canonical in Pyongyang and bronze at Gwanghwamun — one figure both halves of the nation already claim. Sovereign capability is not a hope. It is a historical result, on the record.',
  unityKo:
    '평양에서도, 광화문 청동상에서도 — 양쪽이 이미 공유하는 인물입니다. 주권적 역량은 희망이 아니라 기록 위의 결과입니다.',
  turtleShip:
    'The Turtle Ship (Geobukseon) was not magic armor — it was speed, multi-cannon firepower, and tactics that exploited Japanese weaknesses. Yi\'s genius lay in ship-fighting doctrine, not hagiography.',
  turtleShipKo:
    '거북선은 마법의 갑옷이 아니라 속도, 다연장 화포, 그리고 일본 해군의 약점을 겨냥한 전술이었습니다. 이순신의 천재성은 설계보다 전투 교리에 있었습니다.',
  humanity:
    'In the Imjin Wars (1592–1598), Yi never lost sight of the victims of one of history\'s bitterest conflicts. His stoicism did not erase the pain of disgrace, lost friendships, or family — it was courage and brilliance together.',
  humanityKo:
    '임진왜란 속에서도 이순신은 피해자의 고통을 잊지 않았습니다. 냉철함이 모욕과 상실의 고통을 지우지 못했습니다 — 용기와 천재성이 함께한 인물입니다.',
  image: '/images/1597_petition_from_Yi_Wonik_protesting_the_removal_of_Admiral_Yi_Sun-sin_from_command.jpg',
  imageAlt: '1597 petition protesting the removal of Admiral Yi Sun-sin from command',
  manuscript: '/images/이순신_난중일기_및_서간첩_임진장초.PNG',
  manuscriptAlt: 'Yi Sun-sin war diary manuscript excerpt, Nanjung Ilgi',
  turtleImage: '/images/TurtleShip1795.jpg',
  turtleAlt: 'Korean turtle ship, 1795 historical illustration',
}

export const currentPanels: CurrentPanel[] = [
  {
    id: 'chokepoint',
    roman: 'III',
    hanja: '병목',
    title: 'The Chokepoint',
    titleKo: '甁목',
    lead: 'There is no AI boom, no data centre, no missile guidance package without Korean memory.',
    leadKo: 'AI 붐도, 데이터센터도, 유도체계도 한국 메모리 없이는 없습니다.',
    body:
      'Oil made the twentieth century\'s strategic map. High-bandwidth memory makes this one. Every frontier AI model, every hyperscale data centre, every advanced weapons platform is gated by memory chips that two Korean companies overwhelmingly produce. A peninsula that controls the silicon and the minerals, holds deepwater ports on two oceans, and fields the most disciplined industrial workforce on earth is not a client state. It is a principal. The only thing preventing it from acting like one is the line.',
    bodyKo:
      '석유가 20세기 전략 지도를 만들었다면, 고대역폭 메모리가 이번 세기의 지도를 만듭니다. 두 한국 기업이 지배하는 메모리 칩 없이는 첨단 AI·무기 플랫폼이 성립하지 않습니다. 실리콘과 광물, 양대양 항구, 세계 최고 수준의 산업 인력을 가진 반도는 종속국이 아닙니다. 유일한 장애물은 그 선입니다.',
    stats: [
      { label: 'Global DRAM', value: '~70%', detail: 'Samsung + SK Hynix' },
      { label: 'Global NAND', value: '~50%', detail: 'Two Korean firms' },
      { label: 'HBM for AI', value: 'Majority', detail: 'SK Hynix lead supplier' },
      { label: 'Substitutable?', value: 'No', detail: 'Years of lead time' },
    ],
  },
  {
    id: 'rent',
    roman: 'IV',
    hanja: '지대',
    title: 'The Rent',
    titleKo: '地代',
    lead: 'An alliance is reciprocal. A protection arrangement priced to the tenant is something else.',
    leadKo: '동맹은 상호적입니다. 세입자에게 책정된 보호 계약은 다른 것입니다.',
    body:
      'In March 2026 the Pentagon airlifted all six THAAD launcher vehicles off the Seongju base and sent them to replenish stocks burned through elsewhere. The hardware the ROK had been told was an ironclad umbrella left the country, and the host government — by its own president\'s account — could not stop it. The umbrella was never owned. It was leased, and the lessor recalled it when the lessor needed it. Strip the sentiment and the ledger is unambiguous: sovereignty is cheaper than rent.',
    bodyKo:
      '2026년 3월, 미 국방부는 성주 기지의 사드 발사대 6기를 전부 공수해 중동 등 다른 전선으로 보냈습니다. 철통 방패라 불리던 장비가 떠났고, 호스트 정부는 — 대통령 말대로 — 막지 못했습니다. 우산은 소유가 아니라 임대였고, 임대인이 필요할 때 회수했습니다. 감정을 걷어내면 장부는 분명합니다: 주권이 임대료보다 싸다.',
    stats: [
      { label: 'U.S. troops, ROK', value: '~28,500', detail: 'Standing' },
      { label: 'Largest overseas base', value: 'Camp Humphreys', detail: '3,500 acres · $11B' },
      { label: 'ROK cash contribution', value: '~$1.2B', detail: 'Special Measures Agreement' },
      { label: 'THAAD launchers', value: 'Airlifted out', detail: 'Seongju → Mideast · Mar 2026' },
    ],
    quote: {
      text: 'We have expressed our opposition, but it is also a reality that we cannot fully push through our position.',
      attribution: 'President Lee Jae-myung · to his cabinet · on the THAAD airlift · March 2026',
    },
  },
  {
    id: 'inheritance',
    roman: 'V',
    hanja: '유산',
    title: 'The Inheritance',
    titleKo: '遺産',
    lead: 'The precedent for Korean sovereignty is not theoretical. It is named, dated, and undefeated.',
    leadKo: '한국 주권의 전례는 이론이 아닙니다. 이름과 날짜가 있고, 패배가 없습니다.',
    body:
      'When the arithmetic is done, it points back to a man who did the same arithmetic in 1597 and acted on it with thirteen ships. Yi Sun-sin repelled Japanese invasions that left ninety percent of Koreans homeless — innovations in naval warfare that Japan itself later adopted. The capacity for Korean sovereignty is on the record, never once defeated at sea.',
    bodyKo:
      '산술을 끝까지 하면 1597년 13척으로 같은 산술을 실행한 인물로 돌아갑니다. 이순신은 한국인 90%를 유란에 빠뜨린 침략을 막았고, 일본이 나중에 채택한 해전 혁신을 남겼습니다. 한국 주권의 역량은 기록 위에 있으며, 해전에서 한 번도 패하지 않았습니다.',
    stats: [
      { label: 'Career record', value: '23 · 0', detail: 'Battles · defeats' },
      { label: 'Myeongnyang', value: '1597', detail: '13 ships vs. 330' },
      { label: 'Funding model', value: 'Sovereign', detail: 'No foreign subsidy' },
      { label: 'National claim', value: 'Both', detail: 'Pyongyang · Seoul' },
    ],
  },
]

export const currentResources = [
  {
    title: 'Observation Report 7394-K',
    titleKo: '관측 보고서 7394-K',
    desc: 'Full geopolitical analysis · 10 sections',
    href: '/report-7394-k',
    type: 'Report',
  },
  {
    title: 'The Second Tower',
    titleKo: '두 번째 탑',
    desc: 'Carousel deck · 6 slides',
    href: 'https://juchegang.ca/the-current#second-tower',
    type: 'Deck',
  },
  {
    title: 'The full thesis',
    titleKo: '전체 논증',
    desc: 'PDF · 12 pages',
    href: 'https://juchegang.ca/the-current/thesis.pdf',
    type: 'PDF',
  },
  {
    title: 'Because You Are Korean',
    titleKo: '당신이 한국인이기 때문에',
    desc: 'Identity and obligation',
    href: 'https://juchegang.ca/because-you-are-korean',
    type: 'Essay',
  },
  {
    title: 'The Deal of the Century',
    titleKo: '세기의 거래',
    desc: 'Alliance arithmetic',
    href: 'https://juchegang.ca/the-deal-of-the-century',
    type: 'Essay',
  },
  {
    title: 'The Arithmetic',
    titleKo: '산술',
    desc: 'One people, two miracles',
    href: '/arithmetic',
    type: 'Analysis',
  },
]