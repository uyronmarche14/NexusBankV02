import React from "react";
import { NexusBankServices } from "@/data/serviceData/page";

interface ServicesProps {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServicesData: React.FC = () => {
  return (
    <div className="w-full py-8 flex items-center justify-center">
      <div className="grid grid-cols-3 w-full h-[600px] gap-4">
        {NexusBankServices.map((service: ServicesProps) => (
          <div
            key={service.id}
            className="h-[300px] w-full shadow-2xl shadow-gray-800 border-0.5 border-white rounded-2xl flex flex-col items-center justify-center"
          >
            <div className="text-center items-center justify-center p-4 gap-2">
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h1 className="text-2xl font-semibold py-2">{service.title}</h1>
              <p className="px-8 text-base opacity-55">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesData;
