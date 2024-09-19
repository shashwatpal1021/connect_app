import { Signup } from '@repo/ui/signup'
import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
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