import EmptyState from "@/components/EmptyState";
import ProfilePageClient from "./ProfilePageClient";
import getOptionsByUserName from "@/app/actions/getOptionsByUserName";

interface IParams {
  username?: string;
}

const ProfilePage = async ({ params }: { params: IParams }) => {
  const options = await getOptionsByUserName(params);

  if (!options)
    return (
      <EmptyState
        title="The page you’re looking for doesn’t exist."
        subtitle="Want this to be your username? Create your account now."
        showRegister
      />
    );

  return <ProfilePageClient options={options} />;
};

export default ProfilePage;
