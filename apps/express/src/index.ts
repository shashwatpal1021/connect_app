import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();

const prisma = new PrismaClient();

app.get('/', async(req, res) => {
  const resp = await prisma.user.create(
    {
      data: {
        name: "test"
      }
    }
  )
  console.log({
    id: resp.id,
    name: resp.name
  })
  res.send("Hello" + {
    id: resp.id,
    name: resp.name
  })
})

app.get('/a', (req, res) => {
  res.send("next page")
})

app.listen(4000, () => {
  console.log('Server started on port 4000');
})
