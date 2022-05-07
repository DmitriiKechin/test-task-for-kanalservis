export type TypeFilter = '>' | '<' | '=' | 'includes';
export type NameFilter = 'name' | 'amount' | 'distance';

export interface IQuery {
  limit?: string;
  page?: string;
  value?: string;
  type?: TypeFilter;
  name?: NameFilter;
}
