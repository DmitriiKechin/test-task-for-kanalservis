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
  const { nameFilter, typeFilter, valueFilter } = useAppSelector(
    store => store.filterReducer
  );

  const {
    data: orders,
    isLoading,
    error,
  } = orderAPI.useFetchOrdersQuery({
    limit: 10,
    page: 1,
    nameFilter,
    typeFilter,
    valueFilter,
  });

  return (
    <Wrapper>
      <Filter />
      <br />
      {isLoading && <div>Loading...</div>}
      {error && <div>error</div>}
      {!isLoading && !error && (
        <Table columns={columns} columnWidths={columnWidths} orders={orders} />
      )}
    </Wrapper>
  );
};
