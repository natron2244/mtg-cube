import { v4 as uuid } from 'uuid';

import { Rating } from './interfaces';

export const ratingDefaults: Rating[] = [
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