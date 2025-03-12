"use client";
import { useState } from "react";
import RightBg_login from "@/app/components/auth/rbg_Login/page";
import Login from "@/app/components/auth/login/page";
import Registration from "@/app/components/auth/registration/page";
export const auth = () => {
  const [toggle, SetToggle] = useState(false);

  return (
    <div className="items-center justify-center w-full h-[100vh] flex flex-col font-system ">
      <div className="flex flex-row items-center justify-center w-full h-full ">
        <Registration />

        <RightBg_login />
      </div>
    </div>
  );
};

export default auth;
