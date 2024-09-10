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
    <div className='flex h-screen w-full justify-center'>
      <Signup>Sign Up</Signup>
    </div>
  )
}

export default page