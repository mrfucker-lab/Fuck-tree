import { Plant } from './types';

export const plants: Plant[] = [
  {
    id: 'oak-tree',
    name: 'White Oak',
    scientificName: 'Quercus alba',
    category: 'Trees',
    difficulty: 'Intermediate',
    safety: 'Safe',
    description: 'A majestic hardwood tree known for its strength, longevity, and beautiful wide-reaching canopy.',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200',
    care: {
      sunlight: 'Full Sun',
      water: 'Moderate (Deep watering during drought)',
      soil: 'Moist, well-drained, acidic to neutral',
      temperature: '-30°F to 100°F (Zones 3-9)'
    },
    tutorial: [
      'Select a site with at least 6 hours of full sun.',
      'Dig a hole twice as wide as the root ball and just as deep.',
      'Place the tree, ensuring the root flare is level with the ground.',
      'Fill with native soil and water deeply to remove air pockets.',
      'Mulch 2-3 inches deep around the base (keep mulch away from trunk).'
    ]
  },
  {
    id: 'oleander',
    name: 'Oleander',
    scientificName: 'Nerium oleander',
    category: 'Shrubs',
    difficulty: 'Beginner',
    safety: 'Highly Toxic',
    description: 'An evergreen shrub known for its beautiful flowers but containing cardiac glycosides.',
    image: 'https://images.unsplash.com/photo-1598611130611-6677467657d4?auto=format&fit=crop&q=80&w=1200',
    warnings: 'All parts of this plant are highly poisonous if ingested. Contact with sap may cause skin irritation.',
    care: {
      sunlight: 'Full Sun to Partial Shade',
      water: 'Drought tolerant',
      soil: 'Tolerates poor soil, well-draining preferred',
      temperature: '20°F to 110°F (Zones 8-10)'
    },
    tutorial: [
      'Plant in a sunny location with well-draining soil.',
      'Always wear gloves when pruning to avoid contact with sap.',
      'Water regularly during the first growing season.',
      'Prune after flowering to maintain shape.',
      'Keep away from areas accessible to children and pets.'
    ]
  },
  {
    id: 'monstera',
    name: 'Monstera Deliciosa',
    scientificName: 'Monstera deliciosa',
    category: 'Indoor',
    difficulty: 'Beginner',
    safety: 'Toxic',
    description: 'The famous "Swiss Cheese Plant" loved for its iconic perforated leaves and tropical vibe.',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=1200',
    warnings: 'Contains calcium oxalate crystals; toxic to cats and dogs if chewed or ingested.',
    care: {
      sunlight: 'Bright, indirect light',
      water: 'Water when top 1-2 inches of soil is dry',
      soil: 'Rich, peaty, well-draining potting mix',
      temperature: '65°F to 85°F'
    },
    tutorial: [
      'Provide a moss pole or stake for the plant to climb as it grows.',
      'Wipe leaves regularly to remove dust and maintain health.',
      'Fertilize monthly during spring and summer.',
      'Repot every 1-2 years as it becomes root-bound.',
      'Avoid direct hot afternoon sun which can scorch leaves.'
    ]
  },
  {
    id: 'weeping-willow',
    name: 'Weeping Willow',
    scientificName: 'Salix babylonica',
    category: 'Trees',
    difficulty: 'Intermediate',
    safety: 'Safe',
    description: 'Iconic for its sweeping, graceful branches that drape toward the ground, often near water.',
    image: 'https://images.unsplash.com/photo-1518118014377-ce9366914589?auto=format&fit=crop&q=80&w=1200',
    care: {
      sunlight: 'Full Sun to Partial Shade',
      water: 'High (Prefers moist/wet ground)',
      soil: 'Adaptable but prefers moist, slightly acidic soil',
      temperature: '-20°F to 90°F (Zones 4-9)'
    },
    tutorial: [
      'Plant near a water source or in a spot that stays naturally moist.',
      'Dig a hole twice as wide as the root ball.',
      'Backfill with soil mixed with compost.',
      'Staking may be necessary for young trees in windy areas.',
      'Prune only to remove dead branches or for structural integrity.'
    ]
  },
  {
    id: 'lily-of-the-valley',
    name: 'Lily of the Valley',
    scientificName: 'Convallaria majalis',
    category: 'Flowers',
    difficulty: 'Beginner',
    safety: 'Highly Toxic',
    description: 'Delicate, bell-shaped white flowers with a sweet fragrance, but dangerous if consumed.',
    image: 'https://images.unsplash.com/photo-1520121401995-928cd50d4e27?auto=format&fit=crop&q=80&w=1200',
    warnings: 'Extremely poisonous if eaten. Can cause heart irregularities and stomach upset.',
    care: {
      sunlight: 'Partial to Full Shade',
      water: 'Consistent moisture',
      soil: 'Humus-rich, moist, well-drained',
      temperature: '-40°F to 80°F'
    },
    tutorial: [
      'Plant pips in early spring in a shady area.',
      'Space about 4 inches apart.',
      'Keep soil moist but not waterlogged.',
      'Mulch with leaf mold or compost annually.',
      'Be cautious as it can be invasive in ideal conditions.'
    ]
  },
  {
    id: 'lavender',
    name: 'English Lavender',
    scientificName: 'Lavandula angustifolia',
    category: 'Shrubs',
    difficulty: 'Intermediate',
    safety: 'Safe',
    description: 'A fragrant Mediterranean shrub prized for its relaxing scent and beautiful purple spikes.',
    image: 'https://images.unsplash.com/photo-1498612722673-4bc7accd0661?auto=format&fit=crop&q=80&w=1200',
    care: {
      sunlight: 'Full Sun',
      water: 'Low (Once established)',
      soil: 'Well-drained, sandy, alkaline',
      temperature: '-20°F to 100°F'
    },
    tutorial: [
      'Ensure excellent drainage; lavender hates "wet feet".',
      'Prune lightly in spring and more heavily after flowering.',
      'Avoid overhead watering to prevent fungal issues.',
      'Do not over-fertilize; it prefers lean soil.',
      'Plant in a spot with good air circulation.'
    ]
  },
  {
    id: 'coast-redwood',
    name: 'Coast Redwood',
    scientificName: 'Sequoia sempervirens',
    category: 'Trees',
    difficulty: 'Hard',
    safety: 'Safe',
    description: 'The tallest tree species on Earth, famous for its massive trunk and dense, reddish bark.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1200',
    care: {
      sunlight: 'Full Sun to Partial Shade',
      water: 'High (Prefers fog and consistent moisture)',
      soil: 'Deep, well-drained, fertile soil',
      temperature: '30°F to 80°F (Zones 7-9)'
    },
    tutorial: [
      'Plant in a location with high humidity or frequent fog.',
      'Provide plenty of space; these trees grow extremely large.',
      'Water young trees regularly to establish deep roots.',
      'Mulch heavily to keep roots cool and moist.',
      'Monitor for spider mites in dryer conditions.'
    ]
  }
];
