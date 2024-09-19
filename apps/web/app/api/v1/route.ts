import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from "next/server"

const prisma = new PrismaClient();

export async function GET(Request: NextRequest, Response: NextResponse){
  const res= await prisma.user.findMany()
  // console.log("res", res)
}