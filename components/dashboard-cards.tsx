import React from "react";

interface DashboardcardProps {
  patientCount: number;
  appointmentCount: number;
}

const Dashboardcard: React.FC<DashboardcardProps> = ({
  patientCount,
  appointmentCount,
}) => {
  return (
    <div>
      <div>Patient Count {patientCount}</div>
      <div>Appointment{appointmentCount}</div>
    </div>
  );
};

export default Dashboardcard;
