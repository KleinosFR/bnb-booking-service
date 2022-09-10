import express, { Request, Response } from 'express';
import cors from 'cors';

import roomsRoutes from './routes/room';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world');
});

app.use(express.json());
app.use(cors());

app.use('/rooms', roomsRoutes);

export default app;
