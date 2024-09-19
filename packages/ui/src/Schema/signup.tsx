import { z } from "zod";


export const signUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
})

export type SignUpSchema = z.infer<typeof signUpSchema>

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export type SignInSchema = z.infer<typeof signInSchema>