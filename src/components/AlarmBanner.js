import React, { useState, useRef, useEffect } from "react";
import { WrappMain, WrappSideBar, WrappContent } from "./WrapComponents";
import SideBar from "./SideBar";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";

function AlarmBanner() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex justify-center bg-gray-700 h-screen z-40 no-scrollbar w-56">
        <SideBar />
      </div>
      <div className="flex flex-col items-center w-full">
        <WelcomeBanner />
        <div className="flex  w-2/4 h-2/4">
          <span>Alarm Banner Page</span>
        </div>
      </div>
    </div>
  );
}

export default AlarmBanner;
