import React from "react";
import HeaderFeatures from "@/app/components/features/header/page";
import CardFeatures from "@/app/components/features/card/page";

export const ComponentsFeature = () => {
  return (
    <div className="h-full w-full bg-white shadow-2xl shadow-white/50 rounded-t-xl">
      <HeaderFeatures />
      <CardFeatures />
    </div>
  );
};

export default ComponentsFeature;
