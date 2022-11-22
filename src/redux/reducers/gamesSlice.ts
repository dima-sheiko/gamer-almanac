import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { TGames } from '../../@types/TGames';

type GamesState = {
  games: TGames[];
  isLoading: boolean;
  error: string;
};

const initialState: GamesState = {
  games: [],
  isLoading: false,
  error: '',
};

export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://637bace46f4024eac21566d8.mockapi.io/games`
      );
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue('Cannot load the data.');
    }
  }
);

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      fetchGames.fulfilled,
      (state, action: PayloadAction<TGames[]>) => {
        state.games = action.payload;
        state.isLoading = false;
        state.error = '';
      }
    );
    builder.addCase(fetchGames.rejected, (state, action) => {
      state.games = [];
      state.isLoading = false;
      state.error = String(action.payload);
    });
  },
});

export default gamesSlice.reducer;
