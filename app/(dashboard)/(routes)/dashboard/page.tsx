import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { getPatientCount } from "@/app/actions/getPatientCount";
import { getAppointmentCount } from "@/app/actions/getPatientAppointment";
import EmptyState from "@/components/EmptyState";
import Heading from "@/components/HeroHeading";
import Dashboardcard from "@/components/dashboard-cards";

const DashboardPage = async () => {
  const currentUser = await getCurrentUser();
  const numberOfPatient = await getPatientCount(currentUser?.id!!);
  const numberOfAppointment = await getAppointmentCount(currentUser?.id!!);

  if (!currentUser)
    return (
      <EmptyState
        title="Not logged in."
        showLogin
        subtitle="Please login to continue."
      />
    );

  return (
    <div className="px-1 grid min-h-screen w-full md:grid-cols-[300px_1fr] lg:grid-cols-[500px_1fr] xl:grid-cols-[900px_1fr] gap-2">
      <div className="p-5">
        <Heading title="Active Patients" />
        <Dashboardcard
          patientCount={numberOfPatient}
          appointmentCount={numberOfAppointment}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
