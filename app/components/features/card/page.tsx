import React from "react";
import Image from "next/image";
import { HiLightningBolt, HiArrowRight } from "react-icons/hi";
import { FeatureLinks } from "@/data/featuresData/page";

export const CardFeatures = () => {
  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {FeatureLinks.company.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden hover:shadow-[0_0_40px_rgba(0,0,0,0.05)] transition-all duration-300"
            >
              <div className="aspect-[16/9] relative bg-gray-50 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title || "Feature image"}
                  layout="fill"
                  objectFit="contain"
                  priority
                  className="transform group-hover:scale-[1.02] transition-transform duration-700 ease-out p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-10">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <HiLightningBolt className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-sm font-medium text-blue-500">
                    {feature.subtitle}
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-500 transition-colors duration-300">
                  {feature.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>

                <div className="flex items-center text-sm font-medium text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                  {feature.urlTitle}
                  <HiArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}

          {/* Add more cards with the same structure */}
        </div>
      </div>
    </section>
  );
};

export default CardFeatures;
