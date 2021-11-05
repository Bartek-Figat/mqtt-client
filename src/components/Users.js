import React, { useState, useRef, useEffect } from "react";
import { WrappMain, WrappSideBar, WrappContent } from "./WrapComponents";
import SideBar from "./SideBar";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";

function Users() {
  return (
    <WrappMain>
      <WrappSideBar>
        <SideBar />
      </WrappSideBar>
      <WrappContent>
        <WelcomeBanner />
        <div className="flex  w-2/4 h-2/4">
          <span>Users Page</span>
        </div>
      </WrappContent>
    </WrappMain>
  );
}

export default Users;
