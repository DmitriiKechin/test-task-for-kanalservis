import { Columns } from '../types';

export interface ITableRow {
  columns: Columns;
  columnWidths: Columns; //array of table column widths
}
