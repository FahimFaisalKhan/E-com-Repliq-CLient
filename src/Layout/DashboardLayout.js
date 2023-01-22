import React from "react";
import { Outlet } from "react-router-dom";

import CatDrawer from "../Shared/CatDrawer/CatDrawer";
import Navigation from "../Shared/Navigation/Navigation";

const DashboardLayout = () => {
  return (
    <div className="min-h-[100vh] bg-tertiary-light text-base-100">
      <div className="min-h-[4rem]">
        <Navigation />
      </div>

      <CatDrawer fromDashboard={true}>
        <Outlet />
      </CatDrawer>
    </div>
  );
};

export default DashboardLayout;
