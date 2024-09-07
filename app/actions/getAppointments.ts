import prisma from "@/lib/prismadb";

export async function getPatients(doctorId: string) {
    try {
        const appointments = await prisma.appointment.findMany({
            where: {
                doctorId: doctorId,
            },
        });
        return appointments;
    } catch (error) {
        console.error("Error getting patient count for doctor:", error);
        throw new Error("Unable to retrieve patient count");
    }
}
