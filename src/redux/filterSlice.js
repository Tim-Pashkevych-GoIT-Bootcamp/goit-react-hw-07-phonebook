import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter(_, { payload }) {
      return payload;
    },
  },
  selectors: {
    getFilter: state => state,
  },
});

export const { getFilter } = filterSlice.selectors;
export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
