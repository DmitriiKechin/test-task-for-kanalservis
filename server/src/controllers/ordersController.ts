import express from 'express';
import { dataBase } from '../app';
import { getErrorMessage } from '../helpers/getErrorMessage';
import { IOrder } from '../models/Order';
import { getCurrentPage, orderFilter } from '../services/ordersService';
import { IQuery } from './types';

export const getOrders = (
  req: express.Request,
  res: express.Response
): express.Response => {
  const {
    limit: limitQuery,
    page: pageQuery,
    value,
    type,
    name,
  }: IQuery = req.query;
  const limit = Number(limitQuery);
  const page = Number(pageQuery);

  // проверяем являются ли количество элементов и номер страницы числами
  if (isNaN(limit) || isNaN(page)) {
    return res.status(400).json({ message: 'Не верные параметры пагинации' });
  }

  //максимальное количество страниц для нефильтрованного массива
  let maxPage = Math.ceil(dataBase.length / limit) - 1;

  if (maxPage < page) {
    return res
      .status(400)
      .json({ message: 'Запрашиваемая страница не существует' });
  }

  // проверяем присутствуют ли все необходимы параметры для фильтрации, если нет то отдаём не фильтрованный массив
  if (!value || !type || !name) {
    return res.json({ orders: getCurrentPage(dataBase, limit, page), maxPage });
  }

  //фильтрация
  let dataFilter: IOrder[] = [];
  try {
    dataFilter = orderFilter(dataBase, type, name, value);
  } catch (err) {
    const message = getErrorMessage(err);
    return res.status(400).json({ message });
  }

  //максимальное количество страиц для фильтрованного массива
  maxPage = Math.ceil(dataFilter.length / limit) - 1;
  maxPage = maxPage < 0 ? 0 : maxPage;

  if (maxPage < page) {
    return res
      .status(400)
      .json({ message: 'Запрашиваемая страница не существует' });
  }

  return res.json({ orders: getCurrentPage(dataFilter, limit, page), maxPage });
};
