import express from 'express';
import { PrismaClient } from '@repo/db/client';
import cors from 'cors';
import { signUpSchema } from '@repo/ui/schema/signup';
const app = express();

const prisma = new PrismaClient();

app.use(cors({
  origin: 'http://localhost:3000',
}))

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/create', async (req, res) => {
  console.log("res",req.body)
  const result = signUpSchema.safeParse(req.body)
  const resp = await prisma.user.create({
    data: result.data
  })

  console.log("resp", resp)
  res.send(resp)
})


app.listen(4000, () => {
  console.log('Server started on port 4000');
})
