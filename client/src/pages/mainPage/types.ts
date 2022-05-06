import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { IOrder } from '../../models/IOrder';

export interface IFetchOrder {
  orders: IOrder[] | undefined;
  isLoading: boolean;
  error: FetchBaseQueryError | SerializedError | undefined;
}
