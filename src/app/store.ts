import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import cubeReducer from '../features/cube/cubeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cube: cubeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
