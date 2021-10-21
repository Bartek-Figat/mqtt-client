import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { Chart, registerables } from "chart.js";
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import StreamingPlugin from 'chartjs-plugin-streaming';
import moment from "moment";
const socket = io("ws://localhost:8000", {
  transports: ["websocket", "polling"],
  secure: true,
});

Chart.register(...registerables, DataLabelsPlugin, StreamingPlugin);

function App() {
  const [currentLevel, setCurrentLevel] = useState([]);
  const canvas = useRef();
  const increment = useRef();

  let dataChart;

  useEffect(() => {
    socket.on("topic", (arg) => {
      const { level } = arg;
     
      setCurrentLevel(level);
      if (increment.current === undefined) {
        increment.current = 0;
      }
      if (increment.current < 10) {
        increment.current = increment.current + 1;
      } else {
        removeData(dataChart);
      }
      const currentTime = moment(new Date(), "HH:mm:ss").format("HH:mm:ss")
      addData(dataChart, currentTime, level);
    });
  }, []);

  function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
      console.log(dataset.data);
      dataset.data.push(data);
    });
    chart.update();
  }

  function removeData(chart) {
    chart.data.labels.splice(2, 1);
    chart.data.datasets.forEach((dataset) => {
      dataset.data[0] = dataset.data[2][0];
      dataset.data[1] = dataset.data[2];
      dataset.data.splice(2, 1);
    });
    chart.update();
  }

  const chartColors = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(48 128 208 / 48%)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(201, 203, 207)",
  };

  const data = {
    labels: [],
    datasets: [
      {
        label: "Wet Well Level",
        backgroundColor: chartColors.blue,
        borderColor: "rgb(48 128 208)",
        pointBackgroundColor: "#2326b3",
        fill: false,
        cubicInterpolationMode: "monotone",
        data: [0, currentLevel],
      },
    ],
  };

  useEffect(() => {
    const ctx = canvas.current;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dataChart = new Chart(ctx, {
      type: "line",
      data,
      options: {
        stroke: {
          curve: 'smooth'
        },
        title: {
          display: true,
          text: "Line chart (hotizontal scroll) sample",
        },
        scales: {
          xAxes: 
            {
              realtime: {
                duration: 10,
                refresh: 10,
                delay: 10,
              }
            },
          y: {
            suggestedMin: 0,
            suggestedMax: 100,
            display: true,
            labelString: "value",
          },
        },
        interaction: {
          intersect: false
        },
        plugins: {
          datalabels: {
            backgroundColor: context => context.dataset.borderColor,
            padding: 4,
            borderRadius: 4,
            clip: true,
            color: 'white',
            font: {
              weight: 'bold'
            },
            formatter: value => value.y
          }
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

      {/* <h1>{currentLevel ? `${currentLevel[currentLevel.length - 1]}` : null}</h1> */}
    </>
  );
}

export default App;
