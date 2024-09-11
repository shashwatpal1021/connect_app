import Express, { Request, Response } from "express";
import { PrismaClient } from "@repo/db/client";
//@ts-ignore
import { signUpSchema } from "@repo/ui/schema/signup";
//@ts-ignore
import app from "../app/app";

const prisma = new PrismaClient();

const userRouter = Express.Router();

userRouter.get('/', async (req: Request, res: Response) => {
  res.send("hello")
})

userRouter.post('/create', async (req: any, res: any) => {
  console.log("res", req.body)
  const result = signUpSchema.safeParse(req.body)
  const resp = await prisma.user.create({
    data: result.data
  })
  console.log("resp", resp)
  res.status(201).json({
    message: 'User created successfully',
    data: resp
  })
})

export default userRouter;