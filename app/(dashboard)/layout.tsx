import { getCurrentUser } from "../actions/getCurrentUser";
import { getSubscription } from "../actions/getSubscription";

import SidebarDashboard from "@/components/dashboard/sidebar-dashboard";
import NavbarDashboard from "@/components/dashboard/navbar-dashboard";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();
  const isPro = await getSubscription();

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] xl:grid-cols-[280px_1fr]">
      <div className="hidden border-r rounded-xl my-1 bg-muted/40 md:block">
        <SidebarDashboard isPro={isPro} currentUser={currentUser} />
      </div>
      <div className="flex flex-col">
        <NavbarDashboard isPro={isPro} currentUser={currentUser} />
        <main className="flex flex-1 flex-col gap-4 lg:gap-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
