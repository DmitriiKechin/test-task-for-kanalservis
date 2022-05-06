import { Router } from 'express';
import { getOrders } from '../controllers/ordersController';

const router = Router();

router.get('', getOrders);

export default router;
