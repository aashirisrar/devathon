import { getCurrentUser } from "@/app/actions/getCurrentUser";
import getOptions from "@/app/actions/getOptions";
import { getSubscription } from "@/app/actions/getSubscription";

import OptionsComponent from "@/components/dashboard/OptionsComponent";
import WebPreview from "@/components/dashboard/WebPreview";
import EmptyState from "@/components/EmptyState";

const DashboardPage = async () => {
  const currentUser = await getCurrentUser();
  const options = await getOptions();
  const isPro = await getSubscription();

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
      <div className="md:border md:rounded-xl md:my-1 md:bg-muted/40 md:block p-5">
        {/* add options here for adding items or customizing in the preview  */}
        <OptionsComponent
          isPro={isPro}
          options={options}
          currentUser={currentUser}
        />
      </div>
      <div className="flex flex-col">
        {/* <NavbarDashboard /> */}
        <div className="lg:w-[550px] xl:w-[700px] h-full fixed p-5 hidden md:flex flex-1 flex-col gap-4 lg:gap-6 border rounded-xl my-1 bg-muted/40">
          {/* place the web site preview here */}
          <WebPreview options={options} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
