import React from 'react';

export type TypeFilter = '' | '>' | '<' | '=' | 'includes';
export type NameFilter = '' | 'name' | 'amount' | 'distance';

export interface IOptionsTypeFilter {
  name: TypeFilter;
  value: string;
}

export interface IOptionsNameFilter {
  name: NameFilter;
  value: string;
}

export interface ISelect {
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  isTextCenter?: boolean;
  width: string;
  options: IOptionsNameFilter[] | IOptionsTypeFilter[];
}
