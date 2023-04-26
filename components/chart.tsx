import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  // Title,
  Tooltip,
  // Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
//   import faker from 'faker';
import { faker } from "@faker-js/faker";
import React from "react";
import LoadingSpinner from "./loading-spinner";
import { MdOutlineInfo } from 'react-icons/md'
import { AiOutlineInfoCircle } from 'react-icons/ai'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  // Title,
  Tooltip,
  // Legend,
  Filler,
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


// export const chartsD = {
//   labels: ["31 Jul", "1 Aug", "2 Aug", "3 Aug", "4 Aug", "5 Aug", "6 Aug", "7 Aug", "8 Aug", "9 Aug"],
//   datasets: [
//     {
//       data: [1, 3, 3, 7, 8, 5, 20, 50, 100, 2],
//       borderColor: "rgb(255, 99, 132)",
//       backgroundColor: "rgba(255, 84, 3, 0.2)",
//     },
//   ],
// }

const ViewChart = ({ chartData, isLoading, isSuccess }: any) => {
  // const [chartData, setChartData] = React.useState({});
  //   const [chartOptions, setChartOptions] = React.useState({});

  const dateFormat = (date: Date | string) => {
    return new Intl.DateTimeFormat('en-GB',
      {
        day: "numeric",
        month: "short"
      }).format(new Date(date))
  }

  // console.log(Object.keys(chartData).map((item) => dateFormat(item)));


  // const xy = new Date("2022-07-31")
  // console.log(xy);



  // console.log(funcformat());


  // const chartsD = {
  //   // labels: ["31 Jul", "1 Aug", "2 Aug", "3 Aug", "4 Aug", "5 Aug", "6 Aug", "7 Aug", "8 Aug", "9 Aug"],
  //   labels: Object.keys(chartData).map((item) => dateFormat(item)),
  //   datasets: [
  //     {
  //       // data: [1, 3, 3, 7, 8, 5, 20, 50, 100, 2],
  //       fill: true,
  //       data: Object.values(chartData),
  //       borderColor: "#FF5403",
  //       backgroundColor: "rgba(255, 84, 3, 0.2)",
  //       // fill:true,
  //       tension: 0.1

  //     },

  //   ],


  // }


  // console.log(new Intl.DateTimeFormat('en-GB',
  //   {
  //     day: "numeric",
  //     month: "short"
  //   }).format(new Date("2022-07-31")));



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

  const renderView = () => {
    if (isLoading) return (
      <div className="min-h-[300px] flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )

    if (isSuccess) {
      const chartsD = {
        // labels: ["31 Jul", "1 Aug", "2 Aug", "3 Aug", "4 Aug", "5 Aug", "6 Aug", "7 Aug", "8 Aug", "9 Aug"],
        labels: Object.keys(chartData).map((item) => dateFormat(item)),
        datasets: [
          {
            // data: [1, 3, 3, 7, 8, 5, 20, 50, 100, 2],
            fill: true,
            data: Object.values(chartData),
            borderColor: "#FF5403",
            backgroundColor: "rgba(255, 84, 3, 0.2)",
            // fill:true,
            tension: 0.1

          },

        ],


      }


      return (
        <>

          <div className="flex items-center justify-between"><h3 className="text-lg">Page Views</h3><MdOutlineInfo color="#31373D" /></div>
          <p className="font-[Sohne] text-sm mb-3">All time</p>
          <h3 className="text-5xl mb-5">500</h3>
          {/* <div className="chart" > */}
          <Line options={options} data={chartsD} />
          {/* </div> */}

        </>
      )
    }
  }

  return (
    <div
      // style={{ border: '1px solid red' }} 
      className="border-2 border-[#EFF1F6] rounded-2xl mt-4 px-6 pt-5 pb-4">
      {renderView()}
    </div>
  )
}




export default ViewChart;
