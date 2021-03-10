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
    archetypes: [],
  },
  {
    id: uuid(),
    name: 'Hinterland Hermit',
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