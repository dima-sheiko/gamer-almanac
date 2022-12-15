import { createSlice } from '@reduxjs/toolkit';
import { EFilterParam } from '../../types/EFilterParam';
import { ESortParam } from '../../types/ESortParam';

type FilterState = {
  searchValue: string;
  filterParam: EFilterParam;
  sortParam: ESortParam;
};

const initialState: FilterState = {
  searchValue: '',
  filterParam: EFilterParam.All,
  sortParam: ESortParam.Title,
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
