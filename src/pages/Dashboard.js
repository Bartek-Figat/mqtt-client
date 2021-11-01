import React, { useState, useRef, useEffect } from "react";
import {
  Link,
  NavLink,
  useLocation
} from "react-router-dom";
import WelcomeBanner from "../partials/dashboard/WelcomeBanner";
import { io } from "socket.io-client";
import "chartjs-adapter-luxon";
import { Chart, registerables } from "chart.js";
import { StreamingPlugin, RealTimeScale } from "chartjs-plugin-streaming";

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

  const chartColors = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgba(44, 210, 29, 1)",
    blue: "rgb(29, 124, 210, 100)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(201, 203, 207)",
  };

  useEffect(() => {
    const ctx = canvas.current;
    const gredient = canvas.current.getContext("2d");
    let grd = gredient.createLinearGradient(0, 0, 0, 400);
    grd.addColorStop(0, "rgba(44, 210, 29, 1)");
    grd.addColorStop(1, "rgba(89, 89, 110, 0.5)");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dataChart = new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            shadowOffsetX: 3,
            shadowOffsetY: 3,
            label: "Level",
            backgroundColor: grd,
            borderColor: chartColors.blue,
            borderWidth: 3,
            pointRadius: 1,
            clip: true,
            pointStyle: "circle",
            radius: 0,
            fill: "start",
            cubicInterpolationMode: "monotone",
            lineTension: 0,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              padding: 10,
              font: {
                weight: "bold",
                size: 16,
              },
            },
          },
          tooltip: {
            enabled: true,
            caretPadding: 10,
            cornerRadius: 10,
            position: "average",
            titleAlign: "center",
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || "";
                if (label) {
                  label += `: ${context.parsed.y}ft`;
                }
                return label;
              },
              labelColor: function (context) {
                return {
                  borderColor: null,
                  backgroundColor: "rgba(44, 210, 29, 1)",
                  borderWidth: 2,
                };
              },
              labelTextColor: function (context) {
                return "#fff";
              },
            },
          },
        },
        scales: {
          x: {
            type: "realtime",
            realtime: {
              duration: 20000,
              refresh: 1000,
              delay: 2000,
              onRefresh: (chart) => {
                chart.data.datasets.forEach((dataset) => {
                  dataset.data.push({
                    x: Date.now(),
                    y: currentLevel ? currentLevel : 0,
                  });
                });
              },
            },
          },
          y: {
            title: {
              font: {
                weight: "bold",
                size: 18,
              },
              display: true,
              text: "Scale",
            },
            min: 0,
            max: 100,
          },
        },
        hover: {
          mode: "index",
          intersect: false,
          animationDuration: 0,
        },

        interaction: {
          intersect: false,
        },
      },
    });
  }, []);

  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="flex flex-row w-screen h-screen bg-red-50">
      <div className="flex justify-center w-1/6 bg-gray-700">
      <nav className="flex justify-center w-full mt-36">
          <ul className="mt-3 w-11/12">
            <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${pathname === '/' && 'bg-gray-900'}`}>
              <NavLink className="text-gray-200 hover:text-white" exact to="/">Dashboard</NavLink>
            </li>
            <li className="px-3 py-2 rounded-sm mb-2 last:mb-0 bg-gray-900">
              <NavLink className="text-gray-200 hover:text-white" to="/about">Analystic</NavLink>
            </li>
            <li className="px-3 py-2 rounded-sm mb-2 last:mb-0 bg-gray-900">
              <NavLink className="text-gray-200 hover:text-white" to="/users">Alarm Banner</NavLink>
            </li>
            <li className="px-3 py-2 rounded-sm mb-2 last:mb-0 bg-gray-900">
              <NavLink className="text-gray-200 hover:text-white" to="/users">Reporting</NavLink>
            </li>
            <li className="px-3 py-2 rounded-sm mb-2 last:mb-0 bg-gray-900">
              <NavLink className="text-gray-200 hover:text-white" to="/users">Calendar</NavLink>
            </li>
            <li className="px-3 py-2 rounded-sm mb-2 last:mb-0 bg-gray-900">
              <NavLink className="text-gray-200 hover:text-white" to="/users">Messages</NavLink>
            </li>
            <li className="px-3 py-2 rounded-sm mb-2 last:mb-0 bg-gray-900">
              <NavLink className="text-gray-200 hover:text-white" to="/users">Settings</NavLink>
            </li>
            <li className="px-3 py-2 rounded-sm mb-2 last:mb-0 bg-gray-900">
              <NavLink className="text-gray-200 hover:text-white" to="/users">Logout</NavLink>
            </li>
          </ul>
        </nav>
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
