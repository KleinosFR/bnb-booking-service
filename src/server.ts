import app from './app';
import dotenv from 'dotenv';
import prisma from '../prisma/prismaInstance';

dotenv.config();

const port = process.env.PORT || 8000;

const databaseConnect = async () => {
  try {
    // try to connect to db
    await prisma.$connect();
    console.log('Database connected');
  } catch (error) {
    console.log('Could not connect to database', error);
  }
};

databaseConnect();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
