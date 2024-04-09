"use client"

import TestWithMockData from "@/components/TestWithMockData";
import { data } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div className="w-full px-12 flex justify-center">
      <div className="w-full max-w-[85rem]">
        {/* <TestWithMockDataWithBranching data={data} displayUnorderedList={true}/> */}
        <TestWithMockData data={data}/>
      </div>
    </div>
  );
};

export default page;
