
export interface Mission {
  id: string
  name: string
  agency: string
  destination: string
  year: number
  status: string
  category: string
  description: string
  image: string
}

export const missions: Mission[] = [
  {
    id: 'voyager-1',
    name: 'Voyager 1',
    agency: 'NASA',
    destination: 'Interstellar Space',
    year: 1977,
    status: 'Active',
    category: 'Deep Space',
    description:
      'Voyager 1 explores interstellar space and studies the environment beyond the heliosphere.',
    image:
      'https://images-assets.nasa.gov/image/PIA21777/PIA21777~orig.jpg',
  },
  {
    id: 'perseverance',
    name: 'Perseverance',
    agency: 'NASA',
    destination: 'Mars',
    year: 2020,
    status: 'Active',
    category: 'Mars Exploration',
    description:
      'Perseverance investigates the geology of Mars and searches for evidence of ancient microbial life.',
    image:
      'https://images-assets.nasa.gov/image/PIA23764/PIA23764~orig.jpg',
  },
  {
    id: 'cassini',
    name: 'Cassini-Huygens',
    agency: 'NASA / ESA / ASI',
    destination: 'Saturn',
    year: 1997,
    status: 'Completed',
    category: 'Planetary Exploration',
    description:
      'Cassini transformed our understanding of Saturn, its rings and its extraordinary moons.',
    image:
      'https://images-assets.nasa.gov/image/PIA03883/PIA03883~orig.jpg',
  },
  {
    id: 'voyager-2',
    name: 'Voyager 2',
    agency: 'NASA',
    destination: 'Outer Solar System',
    year: 1977,
    status: 'Active',
    category: 'Deep Space',
    description:
      'Voyager 2 visited Jupiter, Saturn, Uranus and Neptune before continuing into interstellar space.',
    image:
      'https://images-assets.nasa.gov/image/PIA01492/PIA01492~orig.jpg',
  },
  {
    id: 'curiosity',
    name: 'Curiosity',
    agency: 'NASA',
    destination: 'Mars',
    year: 2011,
    status: 'Active',
    category: 'Mars Exploration',
    description:
      'Curiosity studies the Martian environment and investigates whether Mars once supported microbial life.',
    image:
      'https://images-assets.nasa.gov/image/PIA16064/PIA16064~orig.jpg',
  },
  {
    id: 'apollo-11',
    name: 'Apollo 11',
    agency: 'NASA',
    destination: 'Moon',
    year: 1969,
    status: 'Completed',
    category: 'Human Exploration',
    description:
      'Apollo 11 achieved the first crewed landing on the Moon and returned samples to Earth.',
    image:
      'https://images-assets.nasa.gov/image/AS11-40-5875/AS11-40-5875~orig.jpg',
  },
  {
    id: 'new-horizons',
    name: 'New Horizons',
    agency: 'NASA',
    destination: 'Pluto',
    year: 2006,
    status: 'Active',
    category: 'Deep Space',
    description:
      'New Horizons performed the first close flyby of Pluto and explored the Kuiper Belt object Arrokoth.',
    image:
      'https://images-assets.nasa.gov/image/PIA19952/PIA19952~orig.jpg',
  },
  {
    id: 'mars-pathfinder',
    name: 'Mars Pathfinder',
    agency: 'NASA',
    destination: 'Mars',
    year: 1996,
    status: 'Completed',
    category: 'Mars Exploration',
    description:
      'Mars Pathfinder demonstrated an innovative landing system and deployed the Sojourner rover.',
    image:
      'https://images-assets.nasa.gov/image/PIA01555/PIA01555~orig.jpg',
  },
]
