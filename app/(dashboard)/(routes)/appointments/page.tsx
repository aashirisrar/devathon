import React from "react";

import { getCurrentUser } from "@/app/actions/getCurrentUser"
import { getAppointments } from "@/app/actions/getAppointments"

const page = async () => {
  const currentUser = await getCurrentUser();
  const appointments = await getAppointments(currentUser?.id);

  return <div><AppointmentClient appointments={appointments} /></div>;
};

export default page;
