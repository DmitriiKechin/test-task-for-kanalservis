import { NameFilter, TypeFilter } from '../controllers/types';
import { IOrder } from '../models/Order';

export const getCurrentPage = (
  arr: IOrder[],
  limit: number,
  page: number
): IOrder[] => {
  const outputАrray: IOrder[] = [];
  for (let i = page * limit; i < (page + 1) * limit; i++) {
    if (!arr[i]) {
      break;
    }
    outputАrray.push(arr[i]);
  }
  return outputАrray;
};

export const orderFilter = (
  data: IOrder[],
  type: TypeFilter,
  name: NameFilter,
  value: string
) => {
  const dataCopy: IOrder[] = JSON.parse(JSON.stringify(data));
  let dataFilter: IOrder[] = [];

  // если будет название не существующего столбца
  if (dataCopy[0][name] === undefined) {
    throw new Error(
      'заданно не существующее значение названия параметра для фильтрации'
    );
  }

  switch (type) {
    case '>':
      // если пытаемся сравнивать названия (больше меньше) то отдаем пустой массив
      if (name === 'name') {
        break;
      }

      //если вместо числа ввели что то другое то отдаем пустой массив
      if (isNaN(Number(value))) {
        break;
      }

      dataFilter = dataCopy.filter((order) => order[name] > Number(value));
      break;

    case '=':
      dataFilter = dataCopy.filter((order) => String(order[name]) === value);
      break;

    case '<':
      if (name === 'name') {
        break;
      }

      if (isNaN(Number(value))) {
        break;
      }

      dataFilter = dataCopy.filter((order) => order[name] < Number(value));
      break;

    case 'includes':
      dataFilter = dataCopy.filter(
        (order) =>
          String(order[name]).toLowerCase().includes(value.toLowerCase()) // приводим все значения к нижнему регистру, чтобы поиск не зависел от регистра
      );
      break;

    default:
      throw new Error('Не существующее условие для сортировки');
  }
  return dataFilter;
};
