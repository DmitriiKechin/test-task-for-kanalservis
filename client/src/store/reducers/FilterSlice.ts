import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameFilter, TypeFilter } from '../../components/select/types';

interface FilterState {
  typeFilter: TypeFilter;
  nameFilter: NameFilter;
  valueFilter: string;
}

const initialState: FilterState = {
  nameFilter: '',
  typeFilter: '',
  valueFilter: '',
};

export const filterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
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
