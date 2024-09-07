import { getCurrentUser } from "@/app/actions/getCurrentUser";

import EmptyState from "@/components/EmptyState";
import Heading from "@/components/HeroHeading";

const ProfilePage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser)
    return (
      <EmptyState
        title="Not logged in."
        subtitle="Please login to continue."
        showLogin
      />
    );

  return (
    <section className="p-10 space-y-6">
      <Heading title="Your Profile" subtitle="Manage your subscriptions." />
      <div className="space-y-4">
        {currentUser?.name}
      </div>
    </section>
  );
};

export default ProfilePage;
