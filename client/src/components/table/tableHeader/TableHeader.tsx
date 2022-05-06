import React from 'react';
import { Wrapper, Column } from './styles';
import { ITableHeader } from './types';

export const TableHeader: React.FC<ITableHeader> = ({
  columns,
  columnWidths,
}) => {
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
