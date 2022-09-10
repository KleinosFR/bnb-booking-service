import prisma from '../../prisma/prismaInstance';
import { Router } from 'express';

const router = Router();

export type Room = {
  id: string;
  name: string;
  defaultPrice: number;
};

router.get('/', async (req, res) => {
  try {
    const rooms = await prisma.room.findMany();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const room = await prisma.room.findUnique({
    where: {
      id: String(id),
    },
  });
  res.json(room);
});

router.post('/', async (req, res) => {
  const { name, defaultPrice }: { name: string; defaultPrice: number } = req.body;
  const room = await prisma.room.create({
    data: {
      name,
      defaultPrice,
    },
  });
  res.json(room);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, defaultPrice } = req.body;
  const room = await prisma.room.update({
    where: {
      id: String(id),
    },
    data: {
      name,
      defaultPrice,
    },
  });

  res.json(room);
});

export default router;
