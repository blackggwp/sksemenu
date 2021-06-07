import React from "react";
import ReactApexChart from "react-apexcharts";

export default function PieChart({ data, labels }) {
  const initChart = {
    series: data,
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: labels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={initChart.options}
        series={initChart.series}
        type="pie"
        width={380}
      />
    </div>
  );
}
