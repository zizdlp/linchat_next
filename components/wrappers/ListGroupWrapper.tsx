"use client";

import React, { useContext } from "react";
import { SideBarContext } from "@/providers/SideBarProvider";
interface ListGroupWrapperProps {
  children: React.ReactNode;
}

export default function ListGroupWrapper(props: ListGroupWrapperProps) {
  const { sideBarOpen } = useContext(SideBarContext);
  return (
    <div
      className={`relative z-5 pt-8 mb-4 flex items-center w-full min-h-screen  ${
        sideBarOpen
          ? "justify-center lg:justify-start lg:left-[max(352px,calc(50%-28rem))]"
          : "justify-center"
      }`}
    >
      <div className="lg:max-w-[min(calc(100%-28rem),calc(50%+23rem))] mx-4 flex-col w-full min-h-screen ">
        {props.children}
      </div>
    </div>
  );
}
