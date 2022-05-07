import React from 'react';
import { Filter } from '../../components/filter/Filter';
import { useAppSelector } from '../../hooks/redux';
import { Table } from '../../components/table/Table';
import { Columns } from '../../components/table/types';
import { orderAPI } from '../../services/OrderService';
import { Wrapper } from './styles';

const columnWidths: Columns = ['22%', '28%', '28%', '22%'];
const columns: Columns = ['Дата', 'Название', 'Количество', 'Расстояние'];

export const MainPage: React.FC = () => {
  const { page, nameFilter, typeFilter, valueFilter } = useAppSelector(
    state => state.filterReducer
  );

  const { data, isLoading, error } = orderAPI.useFetchOrdersQuery({
    limit: 7,
    page: page,
    nameFilter,
    typeFilter,
    valueFilter,
  });

  return (
    <Wrapper>
      <Filter />
      <br />
      {isLoading && <div>Loading...</div>}
      {error && <div>Произошла ошибка при загрузке</div>}
      {!isLoading && !error && (
        <Table
          columns={columns}
          columnWidths={columnWidths}
          orders={data?.orders}
          maxPage={data?.maxPage}
        />
      )}
    </Wrapper>
  );
};
