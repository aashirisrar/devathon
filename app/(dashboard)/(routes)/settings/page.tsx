import { getCurrentUser } from "@/app/actions/getCurrentUser";

import Heading from "@/components/HeroHeading";
import SettingsClient from "./SettingsClient";
import EmptyState from "@/components/EmptyState";

const SettingsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title="Not logged in."
        subtitle="Please login to continue."
        showLogin
      />
    );
  }

  return (
    <section className="p-10">
      <Heading title="Settings" subtitle="Customize your preferences." />
      <SettingsClient username={currentUser?.username!!} />
    </section>
  );
};

export default SettingsPage;
