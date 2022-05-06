import React from 'react';
import { Wrapper } from './styles';
import { Input } from '../input/Input';
import { Select } from '../select/select';
import { IOptionsNameFilter, IOptionsTypeFilter } from '../select/types';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { filterSlice } from '../../store/reducers/FilterSlice';

// значения для options селектора для выбора параметра фильтрации
const optionsNameFilter: IOptionsNameFilter[] = [
  { name: '', value: '' },
  { name: 'name', value: 'Название' },
  { name: 'amount', value: 'Количество' },
  { name: 'distance', value: 'Расстояние' },
];

// значения для options селектора для выбора типа фильтрации(больше,меньше и т.д)
const optionsTypeFilter: IOptionsTypeFilter[] = [
  { name: '', value: '' },
  { name: '>', value: 'больше' },
  { name: '=', value: 'равно' },
  { name: '<', value: 'меньше' },
  { name: 'includes', value: 'содержит' },
];

export const Filter: React.FC = () => {
  const dispatch = useAppDispatch();
  const { valueFilter } = useAppSelector(store => store.filterReducer);

  //обработчик выбора значения параметра фитрации
  const changeHandlerNameSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(
      filterSlice.actions.setNameFilter(
        optionsNameFilter[event.currentTarget.options.selectedIndex].name
      )
    );
  };

  //обработчик выбора значения типа фильтрации(больше,меньше и т.д)
  const changeHandlerTypeSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(
      filterSlice.actions.setTypeFilter(
        optionsTypeFilter[event.currentTarget.options.selectedIndex].name
      )
    );
  };

  //обработчик для input
  const changeHandlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterSlice.actions.setValueFilter(event.target.value));
  };

  return (
    <Wrapper>
      <Select
        width="30%"
        options={optionsNameFilter}
        onChange={changeHandlerNameSelect}
      />
      <Select
        isTextCenter
        width="15%"
        options={optionsTypeFilter}
        onChange={changeHandlerTypeSelect}
      />
      <Input value={valueFilter} onChange={changeHandlerInput} />
    </Wrapper>
  );
};
