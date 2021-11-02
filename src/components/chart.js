import { Chart } from "chart.js";

const chartColors = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgba(44, 210, 29, 1)",
    blue: "rgb(29, 124, 210, 100)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(201, 203, 207)",
};


export const levelChart = (dataChart, ctx, grd, currentLevel) => {
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
}