import prisma from "@/lib/prismadb";

export async function getPatients(doctorId: string) {
  try {
    const patients = await prisma.patient.findMany({
      where: {
        doctorId,
      },
    });
    return patients;
  } catch (error) {
    console.error("Error getting patient for doctor:", error);
    throw new Error("Unable to retrieve patient");
  }
}
