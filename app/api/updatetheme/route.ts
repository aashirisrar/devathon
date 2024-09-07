import { getCurrentUser } from "@/app/actions/getCurrentUser"
import prisma from "@/lib/prismadb"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
    const currentUser = await getCurrentUser()

    if (!currentUser) return null

    const body = await request.json()

    const { theme } = body

    const updatedOptions = await prisma.option.update({
        where: {
            userId: currentUser?.id
        },
        data: {
            theme
        }
    })

    return NextResponse.json(updatedOptions)
}