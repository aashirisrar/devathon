"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const Stats = () => {
  const [yearsOfService, setYearsOfService] = useState(0);
  const [patientsServed, setPatientsServed] = useState(0);
  const [recordsProcessed, setRecordsProcessed] = useState(0);
  const [patientSatisfaction, setPatientSatisfaction] = useState(0);

  useEffect(() => {
    const duration = 2000; // in milliseconds
    const incYears = 25; // Example: hospital has been running for 25 years
    const incPatientsServed = 500000; // Total number of patients served
    const incRecordsProcessed = 1000000; // Total number of medical records processed
    const incPatientSatisfaction = 90; // Patient satisfaction rate in percentage

    const updateval = (setval, target, inc) => {
      let start = 0;
      
      const stepTime = Math.abs(Math.floor(duration / (target / inc)));

      const timer = setInterval(() => {
        start += inc;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setval(start);
      }, stepTime);
    };

    updateval(setYearsOfService, incYears, 1);
    updateval(setPatientsServed, incPatientsServed, 1000);
    updateval(setRecordsProcessed, incRecordsProcessed, 10000);
    updateval(setPatientSatisfaction, incPatientSatisfaction, 1);
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-gray-200 font-sans">
      <div style={{backgroundColor:"rgb(212 221 260)"}} className="flex-1 p-8 py-16 md:py-24 pl-6 pr-10 md:pl-12 md:pr-20">
      <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2.5rem' }}
    className="md:text-4xl lg:text-5xl md:mb-20">    Why Invest in Patient Data Management Today?
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-600 mb-6 leading-7 md:leading-9">
          In the healthcare industry, data management is more important than ever. 
          Patient records, medical history, and analytics play a vital role in delivering
          quality care. Streamlining data handling can save time, reduce errors, 
          and improve patient outcomes. Investing in a reliable patient management system 
          is a key step toward efficient, future-ready healthcare services.
        </p>
        <a
          href="#"
          className="text-blue-500 text-base tracking-widest mt-10 flex font-bold items-center hover:text-black transition-colors duration-300"
        >
          LEARN MORE
          <ArrowRight className="ml-2 transition-transform transform hover:translate-x-1 duration-300" />
        </a>
      </div>
      <div className="flex-1 py-16 md:py-24 bg-blue-900 text-black p-8">
        <h2 className="text-base md:text-lg lg:text-xl tracking-widest font-semibold mb-8 md:mb-12">
          KEY HEALTHCARE STATS
        </h2>
        <div className="space-x-6 md:space-x-12 flex justify-center">
          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {yearsOfService}+
              </span>
              <span className="text-base md:text-lg lg:text-xl mt-2 font-medium text-center">
                Years of Service
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {patientsServed.toLocaleString()}
              </span>
              <span className="text-base md:text-lg lg:text-xl mt-2 font-medium text-center">
                Patients Served
              </span>
            </div>
          </div>
          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {recordsProcessed.toLocaleString()}
              </span>
              <span className="text-base md:text-lg lg:text-xl mt-2 font-medium text-center">
                Medical Records Processed
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {patientSatisfaction}%
              </span>
              <span className="text-base md:text-lg lg:text-xl mt-2 font-medium text-center">
                Patient Satisfaction Rate
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
