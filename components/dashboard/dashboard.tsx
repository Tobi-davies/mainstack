import React from "react";
import ViewChart from "../chart";
import DoughnutChart from "../doughnut";

const piedata = {
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
      <div className="py-2 mb-6 text-xl">Dashboard</div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex flex-col gap-2">
          <span className="text-2xl">Good morning, Blessing ⛅️</span>
          <span className="text-sm">Check out your dashboard summary.</span>
        </div>
        <a href="">View analytics</a>
      </div>

      <div className="flex gap-2">
        {TABS.map((item, i) => {
          return (
            <span
              key={i}
              className={`py-1.5 px-3 rounded-3xl border-2 text-sm ${
                item === "All Time"
                  ? " border-[#FF5403] bg-[#FFDDCD] text-[#FF5403]"
                  : "border-[#EFF1F6]"
              }`}
            >
              {item}
            </span>
          );
        })}
      </div>

      <ViewChart />

      <div className="grid grid-cols-2 gap-3 mt-5">
        <div className="border-2 border-[#EFF1F6] rounded-lg p-4 flex flex-col">
          <div className="flex justify-between items-center">
            <span className='text-lg text-[#131316] font-bold'>Top Locations</span> <a>View full reports </a>
            
          </div>
          <div>
              <DoughnutChart items={piedata.top_locations} />
            </div>
        </div>
        <div className="border-2 border-[#EFF1F6] rounded-lg p-4"> B </div>
      </div>
    </div>
  );
};

export default Dashboard;
