import React from "react";
import ViewChart from "../chart";
import useViews from "@/hooks/useFetch";
import Locations from "../top-locations";
import ReferralSources from "../referral-sources";

const Dashboard = () => {
  const { isLoading, data, isSuccess } = useViews()

  const TABS = [
    "1 Day",
    "3 Days",
    "7 Days",
    "30 Days",
    "All Time",
    "Custom Date",
  ];
  return (
    // <div className="px-10 w-[100%] pb-10">
    <>
      <div className={`pt-3 pb-2 px-10 mb-6 text-xl font-["Sohne_Halbefett"] fixed w-full bg-white`}>Dashboard</div>
      <div className="px-10 w-[100%] pb-10 mt-14">
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

        <div className="grid grid-row-1 xl:grid-cols-2 gap-3 mt-5">
          <div className="border-2 border-[#EFF1F6] rounded-lg p-4">
            <Locations isSuccess={isSuccess} items={data?.top_locations
            } isLoading={isLoading} />
          </div>
          <div className="border-2 border-[#EFF1F6] rounded-lg p-4">  <ReferralSources isSuccess={isSuccess} items={data?.top_sources
          } isLoading={isLoading} /> </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
