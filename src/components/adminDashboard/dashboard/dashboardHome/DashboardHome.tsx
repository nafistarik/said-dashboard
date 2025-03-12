import React from "react";
import TotalCards from "./TotalCards";
import Overview from "./Overview";

const DashboardHome = () => {
  return (
    <div className="space-y-8">
      <TotalCards />
      <Overview />
    </div>
  );
};

export default DashboardHome;
