import React from "react";

const page = async () => {
  const appointments = await getAppointments();

  return <div><AppointmentClient appointments={appointments} /></div>;
};

export default page;
