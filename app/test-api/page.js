"use client"

import TestingAPICalls from "@/components/TestingAPICalls";
import React from "react";

const page = () => {
  return (
    <div className="w-full px-12 flex justify-center">
      <div className="w-full max-w-[85rem]">
        <TestingAPICalls />
      </div>
    </div>
  );
};

export default page;
