import prisma from "@/lib/prismadb";

export async function getAppointmentCount(doctorId: string) {
  try {
    const count = await prisma.appointment.count({
      where: {
        doctorId: doctorId,
      },
    });
    return count;
  } catch (error) {
    console.error("Error getting appointment count for doctor:", error);
    throw new Error("Unable to retrieve appointment count");
  }
}
