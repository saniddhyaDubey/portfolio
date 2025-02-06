import React from "react";
import GetInTouch from "./getInTouch";
import ConnectForm from "./ContactForm";

export default function ContactSection() {
  return (
    <div className="pl-36 mt-12">
      <div>
        <h1 className="text-5xl font-courier">Contact Me</h1>
        <div className="w-[40rem] h-[1px] bg-gray-500 mt-3"></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 px-8 py-16">
        <GetInTouch />
        <ConnectForm />
      </div>
    </div>
  );
}
