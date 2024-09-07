import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { getSubscription } from "@/app/actions/getSubscription";

import EmptyState from "@/components/EmptyState";
import Heading from "@/components/HeroHeading";
import { SubscriptionButton } from "@/components/subscription-button";

const ProfilePage = async () => {
  const currentUser = await getCurrentUser();
  const isPro = await getSubscription();

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
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are currently on a pro plan."
            : "You are currently on a free plan."}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </section>
  );
};

export default ProfilePage;
