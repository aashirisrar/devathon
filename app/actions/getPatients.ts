import prisma from "@/lib/prismadb";

export async function getPatients(doctorId: string) {
    try {
        const patients = await prisma.patient.findMany({
            where: {
                doctorId: doctorId,
            },
        });
        return patients;
    } catch (error) {
        console.error("Error getting patient count for doctor:", error);
        throw new Error("Unable to retrieve patient count");
    }
}
