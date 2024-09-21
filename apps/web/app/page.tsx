"use client"
import { Button } from '@repo/ui/button'
import React from 'react'
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();



const addUser = async() => {
  console.log("hoooo")
}
const Home = () => {
  return (
    <div>
      <div className="m-4 text-2xl">Welcome to connect_app</div>
    </div>
  )
}

export default Home