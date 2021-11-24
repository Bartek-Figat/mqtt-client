import React, { useState, useRef, useEffect } from "react";
import { WrappMain, WrappSideBar, WrappContent } from "./WrapComponents";
import SideBar from "./SideBar";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import {AiOutlineBarChart } from "react-icons/ai";
import { FaChartArea } from "react-icons/fa";
import { GiChemicalTank, GiWaterTank } from "react-icons/gi";
import { FiSettings, FiTool } from "react-icons/fi";
import {
  FcDownLeft,
  FcDownRight,
  FcDown,
  FcLeftDown,
  FcLeftDown2,
} from "react-icons/fc";

const sideIcons = [
  <GiWaterTank />,
  <AiOutlineBarChart/>,
  <GiChemicalTank />,
  <FiSettings />,
  <FiTool />,
];
// #727aa3
function Build() {
  return (
    <WrappMain>
      <WrappSideBar>
        <SideBar />
      </WrappSideBar>
      <WrappContent>
        <WelcomeBanner />
        <div className="flex w-full h-full">
          <div className="flex w-10/12 h-full dot"></div>
          <div className="flex flex-col  m-auto w-2/12 h-full">
          <form>
                <input
                  type="text"
                  name="price"
                  id="price"
                  class="w-full p-2 border border-gray-500 focus:border-blue-500"
                  placeholder="Search Icons..."
                />
              </form>
            <ul className="w-full">
              {sideIcons.map((icon) => {
                return (
                  <li className="flex justify-center text-8xl p-1 hover:bg-gray-800 hover:text-white cursor-pointer w-full">
                    {icon}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </WrappContent>
    </WrappMain>
  );
}

export default Build;
