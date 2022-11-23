import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { TGames } from '../../types/TGames';

type FetchGamesParams = {
  filterParam: string;
  sortParam: string;
};

type GamesState = {
  games: TGames[];
  isLoading: boolean;
  error: unknown;
};

const initialState: GamesState = {
  games: [],
  isLoading: false,
  error: '',
};

export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async (params: FetchGamesParams, thunkAPI) => {
    const { filterParam, sortParam } = params;
    try {
      const response = await axios.get<TGames[]>(
        `https://637bace46f4024eac21566d8.mockapi.io/games?&genre=${filterParam}&sortBy=${sortParam}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
      state.error = action.payload;
    });
  },
});

export default gamesSlice.reducer;
