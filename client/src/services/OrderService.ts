//RTK_QUERY
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IFetchOrders, IQueryParametrsFetchOrders } from './types';

export const orderAPI = createApi({
  reducerPath: 'orderAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5500' }),
  endpoints: build => ({
    //запрос для получения (отсортированного) массива данных
    fetchOrders: build.query<IFetchOrders, IQueryParametrsFetchOrders>({
      query: ({
        limit,
        page,
        valueFilter = '',
        nameFilter = '',
        typeFilter = '',
      }) => ({
        url: `/api/orders`,
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
