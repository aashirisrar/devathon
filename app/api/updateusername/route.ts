import { getCurrentUser } from "@/app/actions/getCurrentUser"
import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const currentUser = await getCurrentUser()

    if (!currentUser) return null

    const body = await request.json()

    const { username } = body

    const user = await prisma.user.update({
        where: {
            id: currentUser?.id
        },
        data: {
            username
        }
    })

    return NextResponse.json(user)
}