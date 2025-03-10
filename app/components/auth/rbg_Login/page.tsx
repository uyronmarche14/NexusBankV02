import Image from "next/image";
import React from "react";
import bg from "@/public/bg.png";
export const RightBg_login = () => {
  return (
    <div className="items-center justify-center w-[50%] h-full flex flex-col font-system ">
      <div className="w-full h-full">
        <Image
          className="h-full w-full object-cover object-center bg-cover"
          src={bg}
          alt="nature image"
        />
      </div>
    </div>
  );
};

export default RightBg_login;
