import express from 'express';
import { PrismaClient } from '@repo/db/client';
const app = express();

const prisma = new PrismaClient();

app.get('/', async (req, res) => {
  const resp = await prisma.user.create({
    data: {
      name: "shashwat",
      email: "shashwat1@gmail.com",
      password: "shashwat",
    }
  })

  console.log("resp", resp)
  res.send(resp)
})

app.get('/a', (req, res) => {
  res.send("next page")
})

app.listen(4000, () => {
  console.log('Server started on port 4000');
})
