import express, { Request, Response } from 'express';
import { requireAuth } from '@cygnetops/common';
import { Order } from '../models/order';

const router = express.Router();

router.get('/api/orders', requireAuth, async (req: Request, res: Response) => {
  const orders = await Order.find({
    userId: req.currentUser!.id,
  }).populate('ticket');

  res.json({
    status: 'success',
    orders,
  });
});

export { router as indexOrderRouter };
