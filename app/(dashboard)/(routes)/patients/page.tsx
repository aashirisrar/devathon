import React from "react";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { getPatients } from "@/app/actions/getPatients";

import Heading from "@/components/HeroHeading";

import PatientClient from "./PatientClient";

const page = async () => {
  const currentUser = await getCurrentUser();
  const patients = await getPatients(currentUser?.id);

  return (
    <div className="p-6">
      <Heading title="Patients" subtitle="Manage your patients." />
      <PatientClient patients={patients} />
    </div>
  );
};

export default page;
