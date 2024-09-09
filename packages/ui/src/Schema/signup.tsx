import { z } from "zod";


export const signUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
})

export type SignUpSchema = z.infer<typeof signUpSchema>

