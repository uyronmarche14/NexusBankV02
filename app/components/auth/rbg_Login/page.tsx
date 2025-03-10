import Image from "next/image";
import React from "react";
import bg from "@/public/landingpageBg.png";

export const RightBg_login = () => {
  return (
    <div className="items-center justify-center w-[50%] h-full flex flex-col font-system">
      <div className="w-[80%] h-[80%] rounded-lg overflow-hidden">
        {" "}
        {/* Modified container */}
        <Image
          className="h-full w-full object-contain" /* Changed to object-contain */
          src={bg}
          alt="nature image"
        />
      </div>
    </div>
  );
};

export default RightBg_login;
