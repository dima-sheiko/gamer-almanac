import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './reducers/gamesSlice';
import filterReducer from './reducers/filterSlice';

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
