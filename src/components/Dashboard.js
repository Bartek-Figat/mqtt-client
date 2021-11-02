import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { linkNavigation } from "../routers/index";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import { levelChart } from "./chart";
import { io } from "socket.io-client";
import "chartjs-adapter-luxon";
import { Chart, registerables } from "chart.js";
import { StreamingPlugin, RealTimeScale } from "chartjs-plugin-streaming";
import SideBar from "./SideBar";

const socket = io("ws://localhost:4000", {
  transports: ["websocket", "polling"],
  secure: true,
});

Chart.register(...registerables, StreamingPlugin, RealTimeScale);

function Dashboard() {
  const canvas = useRef();
  let dataChart;
  let currentLevel;

  socket.on("topic", (arg) => {
    const { level } = arg;
    console.log(level);
    currentLevel = level;
  });

  useEffect(() => {
    const ctx = canvas.current;
    const gredient = canvas.current.getContext("2d");
    let grd = gredient.createLinearGradient(0, 0, 0, 400);
    grd.addColorStop(0, "rgba(44, 210, 29, 1)");
    grd.addColorStop(1, "rgba(89, 89, 110, 0.5)");
    levelChart(dataChart, ctx, grd, currentLevel);
  }, [currentLevel, dataChart]);

  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="flex justify-center w-1/6 bg-gray-700">
        <SideBar/>
      </div>
      <div className="flex flex-col items-center w-full">
        <WelcomeBanner />
        <div className="flex  w-2/4 h-2/4">
          <canvas ref={canvas} width={600} height={400}></canvas>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
