import React from "react";
import FormInput from "@/app/components/messeges/form/page";
import HeaderMesseges from "@/app/components/messeges/header/page";
export const ComponentsMessages = () => {
  return (
    <div className="h-full w-full rounded-t-xl">
      <HeaderMesseges />
      <FormInput />
    </div>
  );
};

export default ComponentsMessages;
