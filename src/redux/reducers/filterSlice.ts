import { createSlice } from '@reduxjs/toolkit';

type FilterState = {
  searchValue: string;
  filterParam: string;
  sortParam: string;
};

const initialState: FilterState = {
  searchValue: '',
  filterParam: '',
  sortParam: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setFilterParam: (state, action) => {
      state.filterParam = action.payload;
    },
    setSortParam: (state, action) => {
      state.sortParam = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { setSearchValue, setFilterParam, setSortParam } =
  filterSlice.actions;
