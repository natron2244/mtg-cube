import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { Archetype, Card, CubeState, Rating } from './interfaces';
import { ratingDefaults } from './rating.defaults';
//!! ONLY FOR TESTING !!//
import { testArchetypes, testCards, testRatings } from './test.data';

// const initialState: CubeState = {
//   cards: [],
//   archetypes: [],
//   ratings: ratingDefaults,
// };

//!! ONLY FOR TESTING !!//
const initialState: CubeState = {
  cards: testCards,
  archetypes: testArchetypes,
  ratings: testRatings,
};

export const cubeSlice = createSlice({
  name: 'cube',
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