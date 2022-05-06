import React from 'react';
import { Wrapper } from './styles';
import { TableFooter } from './tableFooter/TableFooter';
import { TableHeader } from './tableHeader/TableHeader';
import { TableRow } from './tableRow/TableRow';
import { ITable } from './types';

export const Table: React.FC<ITable> = ({ columns, columnWidths, orders }) => {
  return (
    <Wrapper>
      <TableHeader columnWidths={columnWidths} columns={columns} />
      {orders &&
        orders.map(order => (
          <TableRow
            key={order.id}
            columnWidths={columnWidths}
            columns={[order.date, order.name, order.amount, order.distance]}
          />
        ))}
      <TableFooter />
    </Wrapper>
  );
};
