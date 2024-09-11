import { Signup } from '@repo/ui/signup'
import React from 'react'

interface User{
  email: string,
  password: string,
  confirmPassword: string
  onSubmit: () => void
}


const page = () => {
  return (
    
      <Signup>Sign Up</Signup>
   
  )
}

export default page