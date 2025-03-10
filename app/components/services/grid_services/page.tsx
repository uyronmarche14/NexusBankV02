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
    <div className="w-full py-16 px-4 max-w-7xl mx-auto">
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {NexusBankServices.map((service: ServicesProps) => (
          <div
            key={service.id}
            className="bg-secondary-DEFAULT/50 backdrop-blur-sm p-8 rounded-xl 
            transition-all duration-300 ease-in-out transform hover:-translate-y-1 
            border border-secondary-dark hover:border-secondary-light shadow-lg
            flex items-center justify-center group"
          >
            <div className="space-y-4 flex flex-col items-center text-center">
              <div
                className="text-4xl text-accent-DEFAULT mb-2 
                transform transition-transform duration-300 group-hover:scale-110"
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-medium tracking-wide text-center text-text-DEFAULT">
                {service.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-6 py-4 px-6 bg-secondary-DEFAULT/50 rounded-full">
          {["Instant Setup", "24/7 Support", "Secure Platform"].map(
            (item, index) => (
              <span
                key={index}
                className="text-sm text-text-muted flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-DEFAULT/60" />
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesData;
