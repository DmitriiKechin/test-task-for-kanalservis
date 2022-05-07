import { NameFilter, TypeFilter } from '../components/select/types';
import { IOrder } from '../models/IOrder';

export interface IFetchOrders {
  orders: IOrder[];
  maxPage: number;
}

export interface IQueryParametrsFetchOrders {
  limit: number; //количество элементов в ответе
  page: number; // номер страницы отображения, отсчёт ведется с 0
  valueFilter?: string; // значение для фильтрации
  typeFilter?: TypeFilter; // тип фильтрации (больше,меньше и т.д )
  nameFilter?: NameFilter; // параметр для фильтрации
}
