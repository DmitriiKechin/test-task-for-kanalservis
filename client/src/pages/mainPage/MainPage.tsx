import { TimeoutId } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';
import React, { useEffect, useRef } from 'react';
import { Filter } from '../../components/filter/Filter';
import { useAppSelector } from '../../components/hooks/redux';
import { Table } from '../../components/table/Table';
import { Columns } from '../../components/table/types';
import { orderAPI } from '../../services/OrderService';
import { Wrapper } from './styles';
import { IFetchOrder } from './types';

const columnWidths: Columns = ['22%', '28%', '28%', '22%'];
const columns: Columns = ['Дата', 'Название', 'Количество', 'Расстояние'];

export const MainPage: React.FC = () => {
  const fetchOrderRef = useRef<IFetchOrder>();
  const timerId = useRef<TimeoutId>();
  const { nameFilter, typeFilter, valueFilter } = useAppSelector(
    store => store.filterReducer
  );

  useEffect(() => {
    if (timerId.current) {
      clearTimeout(timerId.current);
    }

    timerId.current = setTimeout(() => {
      const { data, isLoading, error } = orderAPI.useFetchOrdersQuery({
        limit: 10,
        page: 1,
      });
      fetchOrderRef.current = { orders: data, error, isLoading };
    }, 700);
  }, [nameFilter, typeFilter, valueFilter]);
  // const orders: IOrder[] = [
  //   { id: 1, date: '11.05.2019', name: 'Труба', amount: '3', distance: '300m' },
  //   {
  //     id: 2,
  //     date: '11.06.2020',
  //     name: ' Квадрадная труба',
  //     amount: '5',
  //     distance: '350m',
  //   },
  //   {
  //     id: 3,
  //     date: '11.07.2021',
  //     name: 'Переходник',
  //     amount: '7',
  //     distance: '200m',
  //   },
  //   {
  //     id: 4,
  //     date: '11.08.2022',
  //     name: 'Провод',
  //     amount: '13',
  //     distance: '220m',
  //   },
  //   {
  //     id: 5,
  //     date: '11.09.2018',
  //     name: 'Утеплитель',
  //     amount: '23',
  //     distance: '170m',
  //   },
  //   {
  //     id: 6,
  //     date: '11.10.2019',
  //     name: 'Кабель',
  //     amount: '45',
  //     distance: '410m',
  //   },
  //   {
  //     id: 7,
  //     date: '11.11.2020',
  //     name: 'Гофра',
  //     amount: '32',
  //     distance: '450m',
  //   },
  //   {
  //     id: 8,
  //     date: '11.12.2021',
  //     name: 'Канализационная труба',
  //     amount: '18',
  //     distance: '270m',
  //   },
  //   {
  //     id: 9,
  //     date: '11.01.2018',
  //     name: 'Самогреющий кабель',
  //     amount: '45',
  //     distance: '235m',
  //   },
  //   {
  //     id: 10,
  //     date: '11.02.2019',
  //     name: 'Арматура',
  //     amount: '9',
  //     distance: '300m',
  //   },
  // ];
  return (
    <Wrapper>
      <Filter />
      <br />
      <Table
        columns={columns}
        columnWidths={columnWidths}
        orders={fetchOrderRef.current?.orders}
      />
    </Wrapper>
  );
};
