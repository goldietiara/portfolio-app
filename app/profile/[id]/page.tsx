import { UserProfile } from "@/common.types";
import ProfilePage from "@/components/ProfilePage";
import { getUserProjects } from "@/lib/actions";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};
const Profile = async ({ params }: Props) => {
  const result = (await getUserProjects(params.id, 100)) as {
    user: UserProfile;
  };

  if (!result?.user) {
    return (
      <p className="w-full text-center my-10 px-2">Failed to fetch user info</p>
    );
  }

  return (
    <div>
      <ProfilePage user={result?.user}></ProfilePage>
    </div>
  );
};

export default Profile;
