import React, { useEffect, useState } from 'react';
import { Wrapper } from './styles';
import { Input } from '../input/Input';
import { Select } from '../select/select';
import { IOptionsNameFilter, IOptionsTypeFilter } from '../select/types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { filterSlice } from '../../store/reducers/FilterSlice';
import { useDebounce } from '../../hooks/useDebounce';

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
  const { valueFilter } = useAppSelector(state => state.filterReducer);
  const [valueInput, setValueInput] = useState(valueFilter);
  const debouncedValueInput = useDebounce(valueInput, 700); //debounce декоратор на воод значений в input

  //обработчик выбора значения параметра фитрации
  const changeHandlerNameSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(filterSlice.actions.setPage(0)); // устанавливаем активной первую страницу
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
    dispatch(filterSlice.actions.setPage(0));
    dispatch(
      filterSlice.actions.setTypeFilter(
        optionsTypeFilter[event.currentTarget.options.selectedIndex].name
      )
    );
  };

  //обработчик для input
  const changeHandlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(filterSlice.actions.setPage(0));
    setValueInput(event.target.value);
  };

  useEffect(() => {
    dispatch(filterSlice.actions.setValueFilter(debouncedValueInput));
  }, [debouncedValueInput, dispatch]);

  return (
    <Wrapper>
      <Select
        width="30%"
        options={optionsNameFilter}
        onChange={changeHandlerNameSelect}
      />
      <Select
        isTextCenter
        width="20%"
        options={optionsTypeFilter}
        onChange={changeHandlerTypeSelect}
      />
      <Input value={valueInput} onChange={changeHandlerInput} />
    </Wrapper>
  );
};
