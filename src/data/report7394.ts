export interface ReportTable {
  headers: [string, string, string] | [string, string]
  rows: string[][]
}

export interface ReportSection {
  id: string
  roman: string
  title: string
  titleKo: string
  paragraphs: string[]
  table?: ReportTable
  stats?: { label: string; value: string }[]
  highlight?: string
}

export const report7394Meta = {
  id: '7394-K',
  classification: 'Geopolitical Analysis',
  title: 'The Paradox of the Korean Peninsula and the Resilience of a Divided Civilization',
  subtitle:
    'A single civilization. Five thousand years of continuity. Sliced in half by two tired officers with a magazine map. This is that story.',
  subtitleKo: '하나의 문명. 오천 년의 연속성. 잡지 지도로 반토막 난 이야기.',
  author: 'Jesse James',
  publisher: 'JucheGanG.ca',
  year: '2026',
}

export const report7394Intro = [
  'Let me tell you something about the Korean Peninsula that nobody in Washington will say out loud, because it makes the entire post-war American mythology sound like what it is—a fairy tale told by the guys holding the guns. If you were an alien—and I mean genuinely extraterrestrial, no stake in any of this, just pointing instruments at Earth and taking notes—the Korean situation would be the single most baffling data point on the planet. Not the Middle East. Not Ukraine. Korea. And the reason is simple: nothing about the official story makes any sense once you look at the actual numbers.',
  'Here you have a single, continuous civilizational unit. One language. One culture. One genetic pool. A recorded history stretching back over five thousand years, which makes it older than most of the empires that have tried to swallow it. And right now, today, that civilization is violently bisected, politically polarized, and occupied by a foreign military force that charges admission for the privilege of standing on its soil. The occupying power\'s official position is that it\'s there to protect Koreans from other Koreans—which is a bit like hiring an arsonist to guard your house because he once set the neighbor\'s place on fire and claims he knows how fires work.',
  'The division wasn\'t Korean. The war wasn\'t Korean. The DMZ isn\'t Korean. These are all American and Soviet products, stamped "Made in the Cold War" and shipped to a peninsula that didn\'t order them. And yet the Korean people—both halves—have somehow managed to not only survive inside this absurd arrangement but to become, by almost any metric you care to apply, one of the most formidable civilizational forces on the planet.',
  'That paradox is the subject of this report. I\'m going to walk through the deep history, the cartographic butchery, the biopolitical exploitation, the economic warfare, and the staggering technological achievements on both sides of the line. If you come out the other end without a profoundly different understanding of what\'s actually happening on that peninsula, I haven\'t done my job.',
]

export const report7394Sections: ReportSection[] = [
  {
    id: 'deep-time',
    roman: 'I',
    title: 'Deep Time and the Five-Thousand-Year Substratum',
    titleKo: '오천 년 기층',
    paragraphs: [
      'To understand the absurdity of the current fracture, you have to understand what was fractured. And what was fractured wasn\'t some patchwork of warring tribes or a colonial amalgamation drawn up in a European conference room. It was one of the oldest continuous civilizations on Earth.',
      'The timeline begins in the Paleolithic era, evolving through prehistoric settlements into the sophisticated societies of Gojoseon. Then comes the Three Kingdoms period—Goguryeo, Baekje, and Silla—and this is where the story gets interesting, because unlike most civilizational origin stories, the internal rivalries between these three kingdoms didn\'t destroy the population. They sharpened it. Goguryeo built immense military and administrative complexity in the northern reaches of the peninsula and deep into Manchuria. Baekje evolved into a cultural powerhouse whose influence radiated outward to civilize the neighboring archipelagos. Silla unified the peninsula in 668 AD, and that unification established a cohesive cultural, linguistic, and biological matrix that endured through the Goryeo Dynasty, through the Joseon Dynasty, through everything.',
      'And I want to pause on the Joseon Dynasty for a moment, because the people who drew the line across this peninsula in 1945 clearly never bothered to read about it. During the Joseon era, King Sejong implemented social policies that granted a hundred days of maternity leave for indentured female servants, with an additional thirty days for their spouses. This wasn\'t a symbolic gesture. This was the assertion of fundamental human rights and biological care, centuries before any Western nation got around to thinking about it. This same era produced Hangul—the Korean alphabet—a linguistic technology designed specifically to democratize literacy among common people. Not to hoard knowledge among elites, but to spread it. The United States, for context, wouldn\'t exist for another three hundred years.',
      'The Mugunghwa—the Korean national flower—translates to "a flower of immortality." It withers in the evening and blooms anew the next morning. If you want to understand the Korean people, understand that flower. They have never been extinguished. They merely regenerate.',
      'The biological and cultural resilience encoded in this civilization is staggering. They endured relentless invasions from larger continental empires—primarily Han Chinese dynasties—and maritime raiders from Japan. Conquest, colonization, the brutal ideological proxy wars of the twentieth century. They absorbed all of it and came back stronger every time, adapting their societal structures to whatever immense pressure the geopolitical environment decided to throw at them next. That\'s not passive survival. That\'s something closer to what biologists call adaptive radiation, and I\'ll come back to that term later because it perfectly describes what happened after the peninsula was cut in half.',
    ],
  },
  {
    id: 'ancient-tech',
    roman: 'II',
    title: 'Ancient Technological Supremacy',
    titleKo: '고대 기술 우위',
    paragraphs: [
      'Here\'s the thing that irritates me about the way Korea gets discussed in Western media: there\'s this implicit assumption that Korean technological prowess is somehow new. As if Samsung and SK Hynix materialized out of thin air in the 1990s. They didn\'t. The Korean civilization has been pioneering technologies that fundamentally altered human progress for millennia, often achieving milestones centuries before the civilizations that currently claim superiority over them.',
      'This context matters enormously. When external forces intervened in the twentieth century, they were not interacting with a nascent or primitive society. They were interacting with a highly evolved, technologically capable, and profoundly unified civilization with a distinct historical consciousness and a proven capacity for advanced engineering. The guys with the magazine map either didn\'t know this or didn\'t care. I suspect both.',
    ],
    table: {
      headers: ['Innovation', 'Era', 'Significance'],
      rows: [
        [
          'Cheomseongdae',
          'Silla Dynasty, 7th Century',
          'One of the oldest surviving astronomical observatories on Earth. Advanced understanding of celestial mechanics, planetary mathematics, and structural engineering at a time when most of Europe was still sorting out feudalism.',
        ],
        [
          'Jikji',
          'Goryeo Dynasty, 1377',
          'The world\'s oldest extant document printed with movable metal type. Predates Gutenberg by nearly eighty years. Early Korean mastery of metallurgy and mass communication.',
        ],
        [
          'Geobukseon',
          'Joseon Dynasty, 1590s',
          'The first armored warship in recorded history. Designed by Admiral Yi Sun-sin with protective metal sheeting, anti-boarding spikes disguised with straw, and Cheonja and Jija cannons with ranges up to 1,300 meters. They annihilated the invading Japanese fleets during the Imjin War.',
        ],
      ],
    },
  },
  {
    id: 'cartographic-trauma',
    roman: 'III',
    title: 'The Cartographic Trauma of 1945',
    titleKo: '1945 지도의 상처',
    paragraphs: [
      'Now we arrive at the main event. The moment when the single most absurd geopolitical decision in modern history was made, and I want you to sit with the details of this one, because every time I review them I find a new layer of incompetence that I somehow missed before.',
      'In 1910, the Empire of Japan formally annexed Korea. For thirty-five years, the Japanese subjected the Korean population to severe, systematic oppression: coerced labor, deliberate cultural erasure—they forced Koreans to adopt Japanese names—and mass sexual slavery. The Imperial Japanese forces were responsible for horrific war crimes across the Asian continent, resulting in the deaths of millions. When the Japanese Empire finally faced imminent collapse in August 1945 due to the combined military assaults of the United States and the Soviet Union, the fate of this subjugated colony was decided by people who had never set foot on Korean soil.',
      'The physical division of a five-thousand-year-old, homogenous civilization was executed not by demographic experts, not by cultural historians, not by linguistic anthropologists, and certainly not by Koreans. It was carried out by two young American military officers: Colonel Dean Rusk and Colonel Charles "Tic" Bonesteel. On the late evening of August 10, 1945, these two men were ordered to retreat to an adjacent room in the Pentagon and define an American occupation zone before Soviet forces could sweep down the entire peninsula.',
      'Neither Rusk nor Bonesteel was an expert on Korea. By Rusk\'s own later admission, they knew practically nothing about the territory. They had a small National Geographic magazine map that lacked basic provincial borders or topographical details. They picked the 38th parallel because it roughly divided the country in half and kept Seoul on the American side. That\'s it. That\'s the methodology.',
      'I want to make sure you absorb the full weight of what I just said. Two tired, inexperienced officers, working after hours in the Pentagon, using a magazine map from National Geographic, drew a line across one of the oldest civilizations on Earth. The line sliced through contiguous farms, ancient villages, river systems, and extended families with absolute disregard for local terrain or the highly integrated economy of the peninsula. No other powers were consulted. No Koreans were consulted. Dean Rusk later conceded that the line "made no sense economically or geographically." You don\'t say, Dean.',
      'The arbitrary line was accepted by the Soviets. Two occupation zones hardened into fiercely opposed ideological states: the Democratic People\'s Republic of Korea in the North and the Republic of Korea in the South. This cartographic trauma directly precipitated the Korean War of 1950–1953—a devastating conflict fueled by foreign superpowers that tore the peninsula apart, solidified the division at the DMZ, and resulted in the deaths of millions. The Korean people, having just been liberated from the brutal trauma of Japanese colonization, were immediately subjected to an ideological proxy war waged by foreign empires on their sovereign soil. No one asked them. No one ever asks them.',
    ],
    stats: [
      { label: 'Division date', value: 'Aug 10, 1945' },
      { label: 'Method', value: 'National Geographic map' },
      { label: 'Koreans consulted', value: 'Zero' },
      { label: 'Parallel chosen', value: '38th' },
    ],
  },
  {
    id: 'hegemonic-protection',
    roman: 'IV',
    title: 'The Paradox of Hegemonic "Protection"',
    titleKo: '패권적 보호의 역설',
    paragraphs: [
      'Following the cessation of major hostilities in 1953, the southern half of the peninsula entered into a Mutual Defense Treaty with the United States. Today, South Korea hosts approximately 28,500 U.S. troops and advanced military hardware, ostensibly functioning as a combined defense against the nuclear-armed North. Let me describe what this actually looks like when you strip away the diplomatic language.',
      'The South Korean population is forced to accept the military occupation of a foreign power under the guise of protection from their own northern brethren—brethren from whom they were separated by that very same foreign power\'s arbitrary line-drawing. The occupying forces operate under a Status of Forces Agreement that frequently shields American troops from the jurisdiction of local law enforcement, creating a deeply unequal system of modern extraterritoriality. If a Korean citizen commits a crime in Korea, Korean law applies. If an American soldier commits a crime in Korea, it gets complicated in ways that consistently favor the soldier.',
      'In 2002, two South Korean teenage girls walking home from school were crushed to death by a U.S. military armored vehicle during the Yangju highway incident. A U.S. military court acquitted the soldiers of all charges. The nationwide protests that followed weren\'t irrational outbursts of anti-Americanism. They were the entirely rational response of a population that had just watched a foreign military kill their children and then declare itself not guilty under its own rules. Scholars note that nearly 70% of American soldiers responsible for criminal offenses in South Korea have historically been acquitted. That\'s not a justice system. That\'s a permission structure.',
      'This isn\'t unique to Korea, by the way. In Okinawa, the concentration of U.S. forces resulted in the 1995 abduction and gang rape of a twelve-year-old local girl by three U.S. servicemen. The perpetrators were initially shielded by the SOFA agreement, igniting protests involving 85,000 residents demanding the removal of the bases. It\'s a pattern, not an anomaly. Even during the COVID-19 pandemic, USFK personnel were documented violating local social distancing laws, holding unruly no-mask parties on public beaches, and harassing local residents by shooting firecrackers at them. This is the behavior of the "protectors."',
    ],
    stats: [
      { label: 'U.S. troops in ROK', value: '~28,500' },
      { label: 'SOFA acquittal rate', value: '~70%' },
      { label: 'Yangju incident', value: '2002' },
      { label: 'Okinawa protests', value: '85,000' },
    ],
  },
  {
    id: 'kijichon',
    roman: 'V',
    title: 'The Kijichon Tragedy',
    titleKo: '기지촌 비극',
    paragraphs: [
      'And now we arrive at the part of this story that makes me genuinely angry, because it\'s the part that demonstrates the full hypocrisy of the "protection" narrative with forensic precision.',
      'While claiming to be the righteous protectors of the peninsula, the U.S. military utilized heavily regulated prostitution services in military camptowns known as kijichon. Despite prostitution being strictly illegal in South Korea since 1948, the fundamental source of sexual services for the U.S. military was provided by vulnerable Korean women, disparagingly referred to as "Western princesses" or "Korean Military Comfort Women."',
      'This wasn\'t some informal arrangement happening at the fringes of the bases. It was actively managed statecraft. The South Korean government—recognizing the economic and geopolitical necessity of keeping U.S. troops satisfied to ensure the inflow of dollars and the maintenance of the security umbrella—became directly involved. Korean civil servants managed the brothels. They conducted educational programs to teach the women basic English conversation to better serve the soldiers. They subjected the women to mandatory, often brutal, testing and treatment for sexually transmitted diseases to ensure a "clean" supply. The women were praised by the state as "patriots" who boosted military morale and earned foreign currency, while simultaneously being treated as disposable outcasts by the broader society.',
      'In 2022, the South Korean Supreme Court delivered a landmark ruling acknowledging that the government had systematically violated its fundamental duty to protect its citizens by mediating, aiding, and abetting this illegal sex trade from 1957 to 2008. The court confirmed that the state had willfully infringed upon the human rights and dignity of these women to maintain the military alliance. For the Korean victims, the trauma of sexual subjugation by an occupying force merely shifted from the Japanese Empire to the American Empire. Different flag, same machinery.',
    ],
    highlight: 'Different flag, same machinery.',
  },
  {
    id: 'economics-extortion',
    roman: 'VI',
    title: 'The Economics of Extortion',
    titleKo: '갈취의 경제학',
    paragraphs: [
      'In addition to the social trauma, the physical violence, and the biopolitical exploitation, the host nation is required to heavily subsidize the occupying army. The financial mechanism is called Host Nation Support—often referred to in regional parlance as the "sympathy budget," which is the kind of dark humor only people living under occupation can produce.',
      'During the Trump administration in 2019, the U.S. executive branch demanded South Korea raise its annual payment from an already substantial $830 million to an exorbitant $5 billion. When the South Korean government balked at this sudden five-fold increase, the U.S. military placed approximately 4,500 South Korean civilian staff members on indefinite furlough without pay to force compliance. Read that again. The "protector" withheld Korean workers\' wages as leverage to extract more money from the Korean government. This is the behavior of a protection racket, not an alliance.',
      'The physical expansion of these foreign bases also requires the destruction and seizure of native ancestral territory. The expansion of Camp Humphreys in Pyeongtaek led to the Daechuri Protests, where thousands of citizens clashed violently with authorities as entire farming villages were systematically evicted and their ancestral lands seized to accommodate the sprawling foreign military infrastructure. The host nation funds the destruction of its own territory to accommodate a foreign military that claims to protect it from the consequences of a border that same military drew.',
    ],
    stats: [
      { label: '2019 demand', value: '$5B' },
      { label: 'Prior payment', value: '$830M' },
      { label: 'Workers furloughed', value: '~4,500' },
      { label: 'Camp Humphreys', value: '$11B · 3,500 ac' },
    ],
  },
  {
    id: 'trade-war-2026',
    roman: 'VII',
    title: 'The 2026 Trade War: Punished for Winning',
    titleKo: '2026 무역전쟁 · 승리의 대가',
    paragraphs: [
      'If the military occupation represents the physical and social burden, the recent economic maneuvers represent the strategic betrayal. And this is the part where the paradox becomes so absurd that if you described it to an alien, the alien would assume you were lying.',
      'South Korea adapted to the rules of global capitalism—rules established primarily by the United States—with devastating efficiency. Through centralized planning, relentless work ethics, and an unparalleled societal focus on education and innovation, South Korea transformed from a war-torn agrarian society into a hyper-advanced industrial and technological powerhouse. And the American response to this was not celebration. It was punishment.',
      'In March 2026, the USTR, Jamieson Greer, acting under the revived Trump administration, initiated sweeping trade investigations into sixteen economies under Section 301 of the Trade Act of 1974. This followed a landmark U.S. Supreme Court ruling in February 2026 that invalidated Trump\'s previous "reciprocal tariffs" imposed under IEEPA. Stripped of that mechanism, the administration immediately deployed Section 122 to impose a temporary 150-day 10% tariff on all imports, while simultaneously launching Section 301 investigations to build a permanent framework for new tariffs by July 2026.',
      'South Korea is being subjected to economic warfare for the crime of being too productive and efficient. That\'s not my editorializing—that\'s what the investigation documents say, just in fancier language. The USTR specifically cited South Korea\'s global goods trade surplus led by exports in electronic equipment, automobiles, machinery, and ships. Greer stated the investigation focuses on policies that promote production "detached from market demand," citing subsidies, suppressed wages, and inadequate environmental standards as pretexts. But the actual goal is transparent to anyone paying attention: the restoration of unilateral tariff frameworks to protect an aging American industrial base that simply cannot compete with Korean efficiency.',
      'The broad wording of the probe could easily expand to target sensitive areas like digital regulations, platform governance, and non-tariff barriers. The U.S. has grown increasingly vocal about South Korea\'s regulatory policies affecting American digital companies, which essentially means Washington intends to use this trade probe to dictate Seoul\'s internal regulatory environment. So the host civilization pays tribute to host an occupying army, while the government controlling that army actively works to cripple the host\'s economy the exact moment it achieves a trade surplus. The hegemon demands absolute military subordination while punishing economic outperformance. If you can explain how that constitutes an "alliance," I\'d like to hear you try.',
    ],
    table: {
      headers: ['Parameter', 'Details'],
      rows: [
        ['Target Metric', '"Structural excess capacity and production" resulting in large, persistent trade surpluses or underutilized manufacturing capacity.'],
        ['Targeted Economies', '16 nations including South Korea, China, Japan, Taiwan, the EU, India, and Mexico.'],
        ['Korean Industries at Risk', 'Semiconductors, steel, petrochemicals, shipbuilding, automobiles, and electronic equipment.'],
        ['The "Offense"', 'South Korea maintained a bilateral trade surplus that increased to $56 billion over 2024 and remained around $49 billion through June 2025.'],
        ['Investigation Timeline', 'Comments due April 15, 2026. Public hearings commence May 5, 2026.'],
        ['Potential Penalties', 'Tariffs in the range of 15%, strict import controls, fees on services, and broad trade restrictions.'],
      ],
    },
  },
  {
    id: 'southern-leviathan',
    roman: 'VIII',
    title: 'Adaptive Radiation: The Southern Technological Leviathan',
    titleKo: '적응 방사 · 남방 기술 거인',
    paragraphs: [
      'Now here\'s where the story turns, because despite everything I\'ve just described—the occupation, the exploitation, the tariffs, the historical trauma—the Korean civilizational response to all of it has been nothing short of extraordinary. The two halves of the peninsula, isolated from each other by the DMZ, adapted to their specific constraints in radically different but equally astonishing ways. Biologists call this adaptive radiation: a single lineage encountering different environments and evolving specialized traits to dominate each one. That\'s exactly what happened.',
      'The South lacked vast subterranean resources. No oil. No precious metals. So they capitalized on the only resource they had in abundance: human intellect, fierce resilience, and relentless discipline. And they turned that into an economic and technological superpower that the entire planet now depends on.',
      'The smartphone and the semiconductor—the most sophisticated and critical pieces of technology currently produced by the human species—are dominated by Korean engineering. South Korean foundries operate at the atomic level, driving planetary advancements in artificial intelligence, biosensors, and advanced wafer processing. Samsung and SK Group don\'t merely participate in the global economy; they dictate its pace. Samsung\'s development of the Exynos processor series aims to reduce reliance on U.S.-based monopolies like Qualcomm, ensuring Korean technological sovereignty. SK Group\'s deep cooperation with Nvidia on AI memory chips places South Korea at the absolute center of the planet\'s artificial intelligence revolution.',
      'Korean biotech firms are pioneering advanced drug delivery platforms. LS Group is strategically expanding into rare earth and battery materials to build supply chain resilience against China. The southern adaptation was to make themselves absolutely indispensable to the global economy. They weaponized technological innovation as a survival mechanism, ensuring that any threat to the Korean peninsula is a direct threat to the technological and economic infrastructure of the entire planet. They turned their vulnerability into an impenetrable shield of silicon and data. And now the empire that drew the line is trying to penalize them for it.',
    ],
  },
  {
    id: 'northern-monumentalism',
    roman: 'IX',
    title: 'Adaptive Radiation: Northern Monumentalism',
    titleKo: '적응 방사 · 북방 기념비주의',
    paragraphs: [
      'The northern half of the peninsula faced an entirely different set of variables after the 1945 cartographic trauma. Absolute diplomatic isolation. Decades of crippling global sanctions. Severe deficit of arable land. The northern adaptation was fundamentally inward-facing: autarky, absolute ideological cohesion, and monumental engineering projects designed to bend a harsh environment to their will.',
      'The state ideology of Juche—self-reliance—became the fundamental operating system of the North. Because of its foundations in materialism, the North focused on massive, tangible engineering projects to secure survival. The most staggering example is the West Sea Barrage at Nampho. Constructed between 1981 and 1986 entirely by the North Korean Army, it is a monumental eight-kilometer-long system of dams, thirty-six massive sluices, and three lock chambers capable of handling ships up to 50,000 tons. Closing off the Taedong River estuary from the Yellow Sea, the dam prevents seawater intrusion, secures fresh drinking water, and increases arable land. Estimated cost: $4 billion. It required the mobilization of an entire country\'s resources and remains a masterclass in large-scale hydrological engineering.',
      'And despite their extreme political isolation, the North has maintained a deep, institutional reverence for the shared cultural heritage of the peninsula. The ongoing excavation of the tenth-century Goryeo Dynasty palace complex of Manwoldae at the base of Mount Songak in Kaesong has, in rare and powerful moments of civilizational unity, brought archaeologists from both the North and the South together to uncover the achievements of their medieval ancestors. Beneath the artificial political polarization enforced by the Cold War and the 38th parallel, the underlying cultural matrix of the peninsula remains fiercely unified. The North\'s dedication to preserving the physical remnants of the Goryeo Dynasty ensures that the unbroken lineage of the Korean people is not lost to the geopolitical maneuvering of modern superpowers.',
    ],
    stats: [
      { label: 'West Sea Barrage', value: '8 km' },
      { label: 'Construction', value: '1981–1986' },
      { label: 'Estimated cost', value: '$4B' },
      { label: 'Manwoldae', value: 'Goryeo · Kaesong' },
    ],
  },
  {
    id: 'indivisible-core',
    roman: 'X',
    title: 'The Indivisible Civilizational Core',
    titleKo: '나눌 수 없는 문명의 핵',
    paragraphs: [
      'So here\'s where we are. The inhabitants of the Korean Peninsula are the victims of one of the most sustained, systemic, and absurd geopolitical tragedies in the history of this planet. Colonial brutality. Cultural erasure. A homeland sliced in half by ignorant junior officers in a matter of minutes. A foreign military occupation that exploits their population biologically and financially. Aggressive economic warfare and punitive tariffs for the simple crime of being too efficient and successful.',
      'But to categorize the Korean people merely as victims is a fundamental analytical failure. Victimhood is their geopolitical circumstance. Triumph is their biological and cultural response.',
      'They are a civilization that looked at the catastrophic variables handed to them by the cosmos and by terrestrial hegemons, and systematically conquered every single one. In the South, they built a technological leviathan out of the ashes of a proxy war, mastering atomic structures to become the indispensable digital architects of the modern era. In the North, they executed monumental terraforming projects and meticulously preserved the ancient heritage of their lineage.',
      'The absurdity of the arrangement—where the Korean people pay a foreign empire to ostensibly protect them from themselves, suffer the abuses of extraterritorial troops, and endure punitive tariffs for their own technological supremacy—is a testament to the profound irrationality of the current geopolitical operating system. But the survival, adaptation, and immense thriving of the Korean civilization within this absurd paradigm is a testament to something far greater than any empire or trade investigation or magazine map.',
      'They are the Mugunghwa. The immortal flower. They wither under the boot of empires. They are cut in half by the pens of foreign cartographers. But they continually bloom—stronger, more advanced, and more resilient than the forces that seek to control them. The inhabitants of this peninsula, regardless of the arbitrary demarcation line that currently divides them, possess a shared heritage, a terrifying intellectual capacity, and an indomitable spirit that should be a source of immense, unyielding pride.',
      'They have not merely survived the absurdity of Earth\'s geopolitics. They have transcended it. And that is the data. Make of it what you will.',
    ],
    highlight: 'They have not merely survived the absurdity of Earth\'s geopolitics. They have transcended it.',
  },
]

export const report7394Conclusion = {
  closing: '— End —',
  publisher: 'JucheGanG.ca · 2026',
  unityKo: '어느 쪽에 서 있든, 하나의 민족. 우리는 하나다.',
}