import express from 'express';
import { dataBase } from '../app';
let sum = 0;
export const getOrders = (
  req: express.Request,
  res: express.Response
): express.Response => {
  sum++;
  console.log('fetch', sum);
  return res.json(dataBase);
};
