"use client";

import Home from "@/components/home/home";
import { Suspense } from "react";

export default function page() {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
}
