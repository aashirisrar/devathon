import prisma from "@/lib/prismadb"

interface IParams {
    username?: string
}

export default async function getOptionsByUserName(params: IParams) {
    try {
        const { username } = params

        if (!username) return null

        const options = await prisma.option.findFirst({
            where: {
                user: {
                    username: username
                }
            }
        })

        return options
    } catch (error: any) {
        throw new Error(error)
    }
}