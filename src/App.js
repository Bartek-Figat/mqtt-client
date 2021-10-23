import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import "chartjs-adapter-luxon";
import { Chart, registerables } from "chart.js";
import { StreamingPlugin, RealTimeScale } from "chartjs-plugin-streaming";
import moment from "moment";

const socket = io("ws://localhost:8000", {
  transports: ["websocket", "polling"],
  secure: true,
});

Chart.register(...registerables, StreamingPlugin, RealTimeScale);
function App() {
  const canvas = useRef();
  let dataChart;
  let currentLevel;

  socket.on("topic", (arg) => {
    const { level } = arg;
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
            label: "Wet Well Level",
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
          tooltip: {
            enabled: true,
            caretPadding: 10,
            cornerRadius: 10,
            position: 'average',
            titleAlign: 'center',
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
                    y: currentLevel ? currentLevel :  0,
                  });
                });
              },
            },
          },
          y: {
            title: {
              display: true,
              text: "Value",
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

  return (
    <>
      <div className="flex justify-center px-5 py-3 ">
        <div className="w-2/4 h-2/4">
          <canvas ref={canvas} width={600} height={400}></canvas>
        </div>
      </div>
    </>
  );
}

export default App;
