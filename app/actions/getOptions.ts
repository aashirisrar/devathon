import prisma from "@/lib/prismadb"

import { getCurrentUser } from "./getCurrentUser"

export default async function getOptions() {
    try {
        const currentUser = await getCurrentUser()

        if (!currentUser) return null

        const options = await prisma.option.findUnique({
            where: {
                userId: currentUser.id
            }
        })

        return options
    } catch (error: any) {
        throw new Error(error)
    }
}