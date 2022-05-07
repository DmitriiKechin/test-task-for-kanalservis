import { IOrder } from '../../models/IOrder';

export type Columns = [string, string, string, string];

export interface ITable {
  columns: Columns;
  columnWidths: Columns;
  orders: IOrder[] | undefined;
  maxPage: number | undefined;
}
