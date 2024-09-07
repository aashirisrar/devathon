import React from "react";

import Heading from "@/components/HeroHeading";

import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { getAppointments } from "@/app/actions/getAppointments";

import AppointmentClient from "./AppointmentClient";

const page = async () => {
  const currentUser = await getCurrentUser();
  const appointments = await getAppointments(currentUser?.id);

  return (
    <div className="p-6">
      <Heading title="Your Appointments" subtitle="Manage your appointments." />
      <AppointmentClient appointments={appointments} />
    </div>
  );
};

export default page;
