//RTK_QUERY
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { NameFilter, TypeFilter } from '../components/select/types';
import { IOrder } from '../models/IOrder';

export const orderAPI = createApi({
  reducerPath: 'orderAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: build => ({
    fetchOrders: build.query<
      //запрос для получения (отсортированного) массива данных
      IOrder[],
      {
        limit: number; //количество элементов в ответе
        page: number; // номер страницы отображения
        valueFilter?: string; // значение для фильтрации
        typeFilter?: TypeFilter; // тип фильтрации (больше,меньше и т.д )
        nameFilter?: NameFilter; // параметр для фильтрации
      }
    >({
      query: ({
        limit,
        page,
        valueFilter = '',
        nameFilter = '',
        typeFilter = '',
      }) => ({
        url: `/orders`,
        params: {
          limit,
          page,
          value: valueFilter,
          type: typeFilter,
          name: nameFilter,
        },
      }),
    }),
  }),
});
