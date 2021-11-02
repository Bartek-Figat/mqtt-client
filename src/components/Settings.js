import React, { useState, useRef, useEffect } from "react";
import SideBar from "./SideBar";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";

function Settings() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="flex justify-center w-1/6 bg-gray-700">
        <SideBar />
      </div>
      <div className="flex flex-col items-center w-full">
        <WelcomeBanner />
        <div className="flex  w-2/4 h-2/4">
          <span>Settings Page</span>
        </div>
      </div>
    </div>
  );
}

export default Settings;
