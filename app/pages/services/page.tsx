import React from "react";
import Header from "@/app/components/services/header/page";
import Grid_Services from "@/app/components/services/grid_services/page";

export const Services = () => {
  return (
    <div className="h-[100vh] flex flex-col w-full pt-28 px-52">
      <Header />
      <Grid_Services />
    </div>
  );
};

export default Services;
