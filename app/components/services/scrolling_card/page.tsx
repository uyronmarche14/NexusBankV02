"use client"; // Add this at the top since we're using client-side features

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import card1 from "@/public/card/Large.png";
import card2 from "@/public/card/Property 1=1.png";
import card3 from "@/public/card//Property 1=2.png";
import card4 from "@/public/card/Property 1=26.png";
import card5 from "@/public/card/Property 1=4.png";
import card6 from "@/public/card/Property 1=8.png";

const CompanyLogoData: Array<{ src: any; alt: string }> = [
  { src: card1, alt: "Acme Logo" },
  { src: card2, alt: "Quantum Logo" },
  { src: card3, alt: "Echo Logo" },
  { src: card4, alt: "Celestial Logo" },
  { src: card5, alt: "Pulse Logo" },
  { src: card6, alt: "Apex Logo" },
];

const ScrollingCard = () => {
  return (
    <div className="container p-5">
      <h2 className="text-center text-xl text-white/70 my-5">
        Make life more simplier with our services
      </h2>
      <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-zinc-950 before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-zinc-950 after:to-transparent after:content-['']">
        <div className="flex flex-row gap-16 pr-16 animate-scroll">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex flex-row gap-16">
              {CompanyLogoData.map(({ src, alt }) => (
                <div key={alt} className="relative h-60 w-60">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingCard;
