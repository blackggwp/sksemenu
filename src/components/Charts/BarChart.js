import React from "react";
import ReactApexChart from "react-apexcharts";

export default function BarChart({ data, labels }) {
  const initChart = {
    series: [
      {
        data: data,
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        fontFamily: "Itim, Arial, sans-serif",
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      dataLabels: {
        enabled: true,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "20%",
          endingShape: "rounded",
        },
      },
      xaxis: {
        categories: labels,
      },
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
        type="bar"
        width={480}
      />
    </div>
  );
}
