import React from "react";
import LawyerTable from "../components/LawyerTable";
import HomeButton from "../components/HomeButton";

const LawyerDashboard = () => {
  return (
    <div className="p-6 ">
    <div className="flex justify-center">
    <h1 className="text-2xl font-bold mb-6">Lawyer Dashboard</h1>
    </div>
      <HomeButton />
      <LawyerTable />
    </div>
  );
};

export default LawyerDashboard;


