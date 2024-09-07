import React from "react";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { getPatients } from "@/app/actions/getPatients";

const page = async () => {
  const currentUser = await getCurrentUser();
  const patients = await getPatients(currentUser?.id);

  return <div><PatientClient patients={patients} /></div>;
};

export default page;
