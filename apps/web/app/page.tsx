"use client"
import { Button } from '@repo/ui/button'
import React from 'react'
import { PrismaClient } from '@prisma/client';
import axios from 'axios'

const prisma = new PrismaClient();



const addUser = async() => {
  console.log("hoooo")
}
const Home = () => {
  return (
    <div>
      <div className="m-4 text-2xl">Home</div>
      <Button onClick={addUser} appName="web" className="m-4">Button</Button>
     
    </div>
  )
}

export default Home