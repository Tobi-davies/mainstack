import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
//   import faker from 'faker';
import { faker } from "@faker-js/faker";
import React from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
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
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      //   label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    // {
    //   label: "Dataset 2",
    //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
    //   borderColor: "rgb(53, 162, 235)",
    //   backgroundColor: "rgba(53, 162, 235, 0.5)",
    // },
  ],
};


export const chartsD ={
  labels: ["31 Jul", "1 Aug", "2 Aug", "3 Aug", "4 Aug", "5 Aug", "6 Aug","7 Aug", "8 Aug", "9 Aug"],
      datasets: [
        {
          data: [1, 3, 3, 7, 8, 5, 20, 50, 100, 2],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
}

const ViewChart = () => {
  const [chartData, setChartData] = React.useState({});
//   const [chartOptions, setChartOptions] = React.useState({});

  // React.useEffect(() => {
  //   setChartData({
  //     labels: ["31 Jul", "1 Aug", "2 Aug", "3 Aug", "4 Aug", "5 Aug", "6 Aug","7 Aug", "8 Aug", "9 Aug"],
  //     datasets: [
  //       {
  //         data: [1, 3, 3, 7, 8, 5, 20, 50, 100, 2],
  //         borderColor: "rgb(255, 99, 132)",
  //         backgroundColor: "rgba(255, 99, 132, 0.5)",
  //       },
  //     ],
  //   });
  // }, []);

  return <Line options={options} data={chartsD} />;
};

export default ViewChart;
