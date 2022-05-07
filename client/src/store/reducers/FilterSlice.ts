import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameFilter, TypeFilter } from '../../components/select/types';

interface FilterState {
  page: number;
  typeFilter: TypeFilter;
  nameFilter: NameFilter;
  valueFilter: string;
}

const initialState: FilterState = {
  page: 0,
  nameFilter: '',
  typeFilter: '',
  valueFilter: '',
};

export const filterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setNameFilter: (state, action: PayloadAction<NameFilter>) => {
      state.nameFilter = action.payload;
    },
    setTypeFilter: (state, action: PayloadAction<TypeFilter>) => {
      state.typeFilter = action.payload;
    },
    setValueFilter: (state, action: PayloadAction<string>) => {
      state.valueFilter = action.payload;
    },
  },
});

export default filterSlice.reducer;
