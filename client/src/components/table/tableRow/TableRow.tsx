import React from 'react';
import { Column, Wrapper } from './styles';
import { ITableRow } from './types';

export const TableRow: React.FC<ITableRow> = ({ columns, columnWidths }) => {
  return (
    <Wrapper>
      {columns.map((column, index) => (
        <Column key={index} width={columnWidths[index]}>
          {column}
        </Column>
      ))}
    </Wrapper>
  );
};
