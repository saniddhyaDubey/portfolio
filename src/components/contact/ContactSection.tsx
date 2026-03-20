"use client";

import React from "react";
import GetInTouch from "./getInTouch";
import ConnectForm from "./ContactForm";

export default function ContactSection() {
  return (
    <div className="px-6 md:pl-36 md:pr-12 mt-12">
      <div>
        <h1 className="text-4xl md:text-5xl font-courier">Contact Me</h1>
        <div className="w-full max-w-2xl h-[1px] bg-gray-500 mt-3"></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 py-12">
        <GetInTouch />
        <ConnectForm />
      </div>
    </div>
  );
}
