import React from "react";
import { Line } from "react-chartjs-2";
import LoadingSpinner from "./loading-spinner";
import { MdOutlineInfo } from 'react-icons/md';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
);

ChartJS.defaults.font.family = "Sohne";


export const options = {
  responsive: true,
  maintainAspectRatio: false,
  //   plugins: {
  //     legend: {
  //       position: "top" as const,
  //     },
  //     title: {
  //       display: true,
  //       text: "Chart.js Line Chart",
  //     },
  //   },
  // maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        padding: 6,
        color: '#000000',
        stepSize: 20,
        // callback: ((value: any, index: any, ticks: any) => {
        //   return `${value > 0 ? value + '%' : 0}`
        // }),

      },
      border: {
        // display: false,
      },
      grid: {
        drawTicks: false,
      },
    },

    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#000000',
      },
    }
  }
};

const ViewChart = ({ chartData, isLoading, isSuccess }: any) => {
  const dateFormat = (date: Date | string) => {
    return new Intl.DateTimeFormat('en-GB',
      {
        day: "numeric",
        month: "short"
      }).format(new Date(date))
  }


  const renderView = () => {
    if (isLoading) return (
      <div className="min-h-[300px] flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )

    if (isSuccess) {
      const chartsD = {
        labels: Object.keys(chartData).map((item) => dateFormat(item)),
        datasets: [
          {
            fill: true,
            data: Object.values(chartData),
            borderColor: "#FF5403",
            backgroundColor: "rgba(255, 84, 3, 0.2)",
            tension: 0.3,
            borderWidth: 2,
            pointRadius: 0.02,
          },
        ],
      }


      return (
        <>
          <div className="flex items-center justify-between"><h3 className="text-lg">Page Views</h3><MdOutlineInfo color="#31373D" /></div>
          <p className="font-[Sohne] text-sm mb-3">All time</p>
          <h3 className="text-5xl mb-5">500</h3>
          <div className="h-[300px]">
            <Line options={options} data={chartsD} />
          </div>
        </>
      )
    }
  }

  return (
    <div
      className="border-2 border-[#EFF1F6] rounded-2xl mt-4 px-6 pt-5 pb-4">
      {renderView()}
    </div>
  )
}




export default ViewChart;
