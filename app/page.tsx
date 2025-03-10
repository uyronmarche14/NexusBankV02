import React from "react";
import Image from "next/image";
import Navbar from "@/app/components/navbar/page";
import LandingPage from "@/app/pages/landingPage/page";
import Services from "@/app/pages/services/page";
import BgEffect from "@/public/bgeffects/page";
import Features from "@/app/pages/Features/page";
import Footer from "@/app/components/footer/page";
import Message from "@/app/pages/messeges/page";

export default function Home() {
  return (
    <div className="items-center justify-center w-full h-full flex flex-col font-system ">
      <BgEffect />
      <LandingPage />
      <Services />
      <Features />
      <Message />
      <Footer />
    </div>
  );
}
