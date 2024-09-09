import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();

const prisma = new PrismaClient();

app.get('/', async (req, res) => {
  const resp = await prisma.user.findMany()

  console.log("resp", resp)
  res.send(resp)
})

app.get('/a', (req, res) => {
  res.send("next page")
})

app.listen(4000, () => {
  console.log('Server started on port 4000');
})
