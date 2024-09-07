import React from "react";

interface AppointmentClientProps {
  appointments: [];
}

const AppointmentClient: React.FC<AppointmentClientProps> = ({
  appointments,
}) => {
  return (
    <div>
      {appointments?.map((appointment) => (
        <div>{appointment.id}</div>
      ))}
    </div>
  );
};

export default AppointmentClient;
