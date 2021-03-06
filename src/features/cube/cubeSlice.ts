import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

interface Card {
  name: string,
}

export interface Archetype {
  name: string,
}

interface Rating {
  name: string,
  value: number,
}

interface CubeState {
  cards: Card[];
  archetypes: Archetype[];
  ratings: Rating[];
}

const defaultRatings: Rating[] = [
  {
    name: '1',
    value: 1,
  },
  {
    name: '2',
    value: 2,
  },
  {
    name: '3',
    value: 3,
  },
  {
    name: '4',
    value: 4,
  },
  {
    name: '5',
    value: 5,
  },
];

const defaultArchetypes: Archetype[] = [
  {
    name: 'Counters',
  },
  {
    name: 'Agro',
  },
  {
    name: 'Counters',
  }
]

const initialState: CubeState = {
  cards: [],
  archetypes: defaultArchetypes,
  ratings: defaultRatings,
};

export const cubeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.cards = [...state.cards, action.payload];
    },
    addArchetypes: (state, action: PayloadAction<Archetype>) => {
      state.archetypes = [...state.archetypes, action.payload];
    },
    addRating: (state, action: PayloadAction<Rating>) => {
      state.ratings = [...state.ratings, action.payload];
    },
  },
});

export const { addCard, addArchetypes, addRating } = cubeSlice.actions;

export const selectCards = (state: RootState) => state.cube.cards;
export const selectArchetypes = (state: RootState) => state.cube.archetypes;
export const selectRatings = (state: RootState) => state.cube.ratings;

export default cubeSlice.reducer;