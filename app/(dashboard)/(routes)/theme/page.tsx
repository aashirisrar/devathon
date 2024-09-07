import { getCurrentUser } from "@/app/actions/getCurrentUser";

import Heading from "@/components/HeroHeading";
import ThemeClient from "./ThemeClient";
import EmptyState from "@/components/EmptyState";
import getOptions from "@/app/actions/getOptions";

const ThemePage = async () => {
  const currentUser = await getCurrentUser();
  const options = await getOptions();

  if (!currentUser) {
    return (
      <EmptyState
        title="Not logged in."
        showLogin
        subtitle="Please login to continue."
      />
    );
  }

  return (
    <section className="p-10">
      <Heading title="Theme" subtitle="Change your theme." />
      <ThemeClient theme={options?.theme!!} />
    </section>
  );
};

export default ThemePage;
