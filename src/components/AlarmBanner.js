import React from "react";
import { WrappMain, WrappSideBar, WrappContent } from "./WrapComponents";
import Table from "./Tables";
import SideBar from "./SideBar";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";

function AlarmBanner() {
  return (
    <WrappMain>
      <WrappSideBar>
        <SideBar />
      </WrappSideBar>
      <WrappContent>
        <WelcomeBanner />
        <div className="flex flex-col justify-center w-11/12 mt-6">
          <Table />
        </div>
      </WrappContent>
    </WrappMain>
  );
}

export default AlarmBanner;
