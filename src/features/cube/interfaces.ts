export interface CubeState {
  cards: Card[];
  archetypes: Archetype[];
  ratings: Rating[];
}

// TODO: Look at 
export interface Card {
  id: string;
  name: string,
  archetypes: ArchetypeEntry[];
}

export interface Archetype {
  id: string;
  name: string,
}

export interface Rating {
  id: string;
  name: string,
  value: number,
}

export interface ArchetypeEntry {
  archetypeId: string,
  ratingId: string,
}