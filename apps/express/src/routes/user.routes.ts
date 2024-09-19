import Express, { Request, Response } from "express";
import { PrismaClient } from "@repo/db/client";
//@ts-ignore
import { signUpSchema, signInSchema } from "@repo/ui/schema/signup";

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

userRouter.post("/sign-in", async (req: Request, res: Response) => {
  console.log("res", req.body)
  try {
    const result = signInSchema.safeParse(req.body)
    const user = await prisma.user.findUnique({
      where: {
        email: result.data.email
      }
    })
    if (!user) {
      return res.status(400).json({
        message: 'User not found'
      })
    } 
    if (user.password !== result.data.password) {
      return res.status(400).json({
        message: 'Incorrect password'
      })
    } 
    res.status(200).json({
      message: 'User logged in successfully',
      data: user
    })  
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' })
  }
})


export default userRouter;