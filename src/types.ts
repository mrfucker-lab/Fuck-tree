export type GrowthDifficulty = 'Beginner' | 'Intermediate' | 'Expert';
export type SafetyStatus = 'Safe' | 'Toxic' | 'Highly Toxic';
export type PlantCategory = 'Trees' | 'Indoor' | 'Shrubs' | 'Flowers';

export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  category: PlantCategory;
  difficulty: GrowthDifficulty;
  safety: SafetyStatus;
  description: string;
  image: string;
  care: {
    sunlight: string;
    water: string;
    soil: string;
    temperature: string;
  };
  tutorial: string[];
  warnings?: string;
}
