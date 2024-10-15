"use client";
import React from "react";

import Header2 from "../components/header2/page";
import ShelterStaffLayout from "@/ShelterStaffLayout";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ShelterStaffLayout>
      <div>
      <div>
        <Header2/>
      </div>
      <div >
        <div>{children}</div>
      </div>
     
    </div>
    </ShelterStaffLayout>
  );
}