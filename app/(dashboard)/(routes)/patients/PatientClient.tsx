"use client";

import React from "react";

interface PatientClientProps {
  patients: [];
}

const PatientClient: React.FC<PatientClientProps> = ({ patients }) => {
  return (
    <div>
      {patients?.map((patient) => (
        <div>{patient}</div>
      ))}
    </div>
  );
};

export default PatientClient;
