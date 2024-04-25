import React from "react";
import { Outlet } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default DashboardPage;
