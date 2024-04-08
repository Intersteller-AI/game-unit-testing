"use client"

import TestingStateChange from "@/components/TestingStateChange";
import React from "react";

const page = () => {
  return (
    <div className="w-full px-12 flex justify-center">
      <div className="w-full max-w-[85rem]">
        <TestingStateChange />
      </div>
    </div>
  );
};

export default page;
