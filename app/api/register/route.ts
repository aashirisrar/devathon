import bcrypt from "bcryptjs"
import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const body = await request.json()

    const { email, username, password } = body

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await prisma.user.create({
        data: {
            email,
            username,
            hashedPassword
        }
    })

    const options = await prisma.option.create({
        data: {
            userId: user.id
        }
    })

    return NextResponse.json(user)
}