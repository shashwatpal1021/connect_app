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
<<<<<<< Tabnine <<<<<<<
      <Button onClick={addUser} appName="web" className="m-4">Button</Button>//-
      <Button onClick={addUser} appName="web" className="m-4">//+
        Button//+
      </Button>//+
>>>>>>> Tabnine >>>>>>>// {"conversationId":"d5fde76b-9565-4274-a657-b5b2e5a74d3a","source":"instruct"}
    </div>
  )
}

export default Home