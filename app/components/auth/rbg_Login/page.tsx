import Image from "next/image";
import React from "react";
import bg from "@/public/bgbg.png";

export const RightBg_login = () => {
  return (
    <div className="items-center justify-center w-[60%] h-full flex flex-col font-system shadow-2xl shadow-white/50 select-none relative ">
      <div className="w-full h-full relative ">
        <Image
          className="h-full w-full object-cover brightness-85 contrast-95 "
          src={bg}
          alt="nature image"
        />
        <div className="absolute inset-0 flex flex-col items-start justify-start p-8 text-white z-10 bg-black/30">
          <h1 className="text-3xl font-semibold mb-4">Nexus Bank</h1>
          {/* Add more content here as needed */}
        </div>
      </div>
    </div>
  );
};

export default RightBg_login;
