import { getCurrentUser } from "@/app/actions/getCurrentUser";

import EmptyState from "@/components/EmptyState";
import Heading from "@/components/HeroHeading";

const DashboardPage = async () => {
  const currentUser = await getCurrentUser();

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
      </div>
    </div>
  );
};

export default DashboardPage;
