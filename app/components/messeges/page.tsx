import React from "react";
import FormInput from "@/app/components/messeges/form/page";
import HeaderMesseges from "@/app/components/messeges/header/page";
import FaqsMessage from "@/app/components/messeges/faqs/page";

export const ComponentsMessages = () => {
  return (
    <div className="min-h-screen w-full ">
      <HeaderMesseges />
      <div className="max-w-7xl mx-auto py-12 px-4">
        <div className="space-y-8 flex flex-row gap-4">
          <FormInput />
          <FaqsMessage />
        </div>
      </div>
    </div>
  );
};

export default ComponentsMessages;
