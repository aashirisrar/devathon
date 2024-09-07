import prisma from "@/lib/prismadb";

export async function getPatientCount(doctorId: string) {
  try {
    const count = await prisma.patient.count({
      where: {
        doctorId: doctorId,
      },
    });
    return count;
  } catch (error) {
    console.error("Error getting patient count for doctor:", error);
    throw new Error("Unable to retrieve patient count");
  }
}
