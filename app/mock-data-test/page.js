"use client"

import TestWithMockData from "@/components/TestWithMockData";
import React from "react";

const page = () => {
  return (
    <div className="w-full px-12 flex justify-center">
      <div className="w-full max-w-[85rem]">
        {/* <TestWithMockDataWithBranching data={data} displayUnorderedList={true}/> */}
        <TestWithMockData />
      </div>
    </div>
  );
};

export default page;
