import { z } from "zod";


export const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
})

export type SignUpSchema = z.infer<typeof signUpSchema>

