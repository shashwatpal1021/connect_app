import Express, { Request, Response } from "express";
import { PrismaClient } from "@repo/db/client";
//@ts-ignore
import { signUpSchema } from "@repo/ui/schema/signup";
//@ts-ignore
import app from "../app/app";

const prisma = new PrismaClient();

const userRouter = Express.Router();

userRouter.get('/', async (req: Request, res: Response) => {
  res.status(200).send("hello")
})

userRouter.post('/create', async (req: any, res: any) => {
  console.log("res", req.body)
  try {
    const result = signUpSchema.safeParse(req.body)
    const user = await prisma.user.findUnique({
      where: {
        email: result.data.email
      }
    })
    if(user) {
      return res.status(400).json({
        message: 'User already exists'
      })
    }
    const resp = await prisma.user.create({
      data: result.data
    })
    console.log("resp", resp)
    res.status(201).json({
      message: 'User created successfully',
      data: resp
    })
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default userRouter;