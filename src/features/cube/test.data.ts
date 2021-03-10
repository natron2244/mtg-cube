import { v4 as uuid } from 'uuid';

import { Archetype, Card, Rating } from "./interfaces";

export const testRatings: Rating[] = [
  {
    id: uuid(),
    name: '1',
    value: 1,
  },
  {
    id: uuid(),
    name: '2',
    value: 2,
  },
  {
    id: uuid(),
    name: '3',
    value: 3,
  },
  {
    id: uuid(),
    name: '4',
    value: 4,
  },
  {
    id: uuid(),
    name: '5',
    value: 5,
  },
];

export const testArchetypes: Archetype[] = [
  {
    id: uuid(),
    name: 'Counters',
  },
  {
    id: uuid(),
    name: 'Agro',
  },
  {
    id: uuid(),
    name: 'Control',
  }
];

export const testCards: Card[] = [
  {
    id: uuid(),
    name: 'Merciless Predator',
    imageUrl: 'https://c1.scryfall.com/file/scryfall-cards/large/back/0/2/028aeebc-4073-4595-94da-02f9f96ea148.jpg?1562825445',
    archetypes: [],
  },
  {
    id: uuid(),
    name: 'Hinterland Hermit',
    imageUrl: 'https://c1.scryfall.com/file/scryfall-cards/large/front/b/6/b6edac85-78e7-4e90-b538-b67c88bb5c62.jpg?1581395155',
    archetypes: [
      {
        archetypeId: testArchetypes[0].id,
        ratingId: testRatings[0].id,
      }
    ],
  },
  {
    id: uuid(),
    name: 'Keldon Marauders',
    imageUrl: 'https://c1.scryfall.com/file/scryfall-cards/large/front/b/f/bf42524c-97e5-40b2-8a6d-d2a1f0a9eb65.jpg?1580014576',
    archetypes: [
      {
        archetypeId: testArchetypes[0].id,
        ratingId: testRatings[2].id,
      },
      {
        archetypeId: testArchetypes[1].id,
        ratingId: testRatings[3].id,
      },
    ],
  },
];