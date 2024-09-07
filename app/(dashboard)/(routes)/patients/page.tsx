import React from "react";
import { getCurrentUser } from "@/app/actions/getCurrentUser";

const page = async () => {
  const currentUser = await getCurrentUser();
  const patients = await getPatients(currentUser?.id);

  return <div>page</div>;
};

export default page;
