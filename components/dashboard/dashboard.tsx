import React from "react";
import ViewChart from "../chart";
import DoughnutChart from "../doughnut";
import useViews from "@/hooks/useFetch";
import ReferralSources from "../referral-sources";

const piedata = {
  views: {
    "2022-07-31": 1,
    "2022-08-01": 3,
    "2022-08-02": 3,
    "2022-08-03": 7,
    "2022-08-04": 8,
    "2022-08-05": 5,
    "2022-08-06": 20,
    "2022-08-07": 50,
    "2022-08-08": 100,
    "2022-08-09": 2
  },
  top_locations: [
    {
      country: "Nigeria",
      count: 68,
      percent: 34,
    },
    {
      country: "Germany",
      count: 37,
      percent: 19,
    },
    {
      country: "Ghana",
      count: 50,
      percent: 25,
    },
    {
      country: "Finland",
      count: 40,
      percent: 20,
    },
    {
      country: "United Kingdom",
      count: 4,
      percent: 2,
    },
  ],
  top_sources: [
    {
      source: "google",
      count: 50,
      percent: 25,
    },
    {
      source: "instagram",
      count: 68,
      percent: 34,
    },
    {
      source: "facebook",
      count: 40,
      percent: 20,
    },
    {
      source: "linkedin",
      count: 41,
      percent: 21,
    },
  ],
};

const Dashboard = () => {
  const { isLoading, data, isSuccess } = useViews()

  console.log(data);


  const TABS = [
    "1 Day",
    "3 Days",
    "7 Days",
    "30 Days",
    "All Time",
    "Custom Date",
  ];
  return (
    <div className="px-10 w-[100%] pb-10">
      <div className={`pt-3 pb-2 mb-6 text-xl font-["Sohne_Halbefett"]`}>Dashboard</div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">Good morning, Blessing ⛅️</h1>
          <p className="text-sm font-[Sohne]">Check out your dashboard summary.</p>
        </div>
        <a href="#" className="text-sm">View analytics</a>
      </div>

      <ul className="flex gap-2">
        {TABS.map((item, i) => {
          return (
            <li
              key={i}
              className={`py-1.5 px-3 rounded-3xl cursor-pointer border-2 text-sm ${item === "All Time"
                ? " border-[#FF5403] bg-[#FFDDCD] text-[#FF5403]"
                : "border-[#EFF1F6]"
                }`}
            >
              {item}
            </li>
          );
        })}
      </ul>


      <div className="chart">
        <ViewChart chartData={data?.graph_data?.views} isLoading={isLoading} isSuccess={isSuccess} />
      </div>


      <div className="grid grid-cols-2 gap-3 mt-5">
        <div className="border-2 border-[#EFF1F6] rounded-lg p-4">
          <DoughnutChart isSuccess={isSuccess} items={data?.top_locations
          } isLoading={isLoading} />
        </div>
        <div className="border-2 border-[#EFF1F6] rounded-lg p-4">  <ReferralSources isSuccess={isSuccess} items={data?.top_sources
        } isLoading={isLoading} /> </div>
      </div>
    </div>
  );
};

export default Dashboard;
