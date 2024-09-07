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
      <div className="bg-white py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl
            className="grid text-center grid-cols-2 relative"
            style={{
              border: "1px solid black",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <div
              className="mx-auto flex max-w-xs flex-col gap-y-4"
              style={{ position: "relative" }}
            >
              <dt className="text-base leading-7 text-gray-600">
                Patient Count
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {patientCount}
              </dd>
            </div>
            <div
              className="mx-auto flex max-w-xs flex-col gap-y-4"
              style={{ position: "relative" }}
            >
              <dt className="text-base leading-7 text-gray-600">Appointment</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {appointmentCount}
              </dd>
            </div>
            <div
              className="absolute inset-y-0 left-1/2 w-px bg-gray-300"
              style={{ transform: "translateX(-50%)" }}
            />
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Dashboardcard;
