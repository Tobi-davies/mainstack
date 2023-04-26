import Dashboard from "@/components/dashboard/dashboard";
import Image from "next/image";

export default function Home() {
  const sidebar_content = {
    top: [
      {
        label: "Dashboard",
        image: "/dashboard.svg",
        active: true,
      },
      {
        label: "Item 1",
        image: "/edit.svg",
      },
      {
        label: "Item 2",
        image: "/group.svg",
      },
      {
        label: "Item 3",
        image: "/hourglass_empty.svg",
      },
    ],
    middle: {
      title: "OTHERS 1",
      content: [
        {
          label: "Item 4",
          image: "/add_a_photo.svg",
        },
        {
          label: "Item 5",
          image: "/delete.svg",
        },
      ],
    },
    bottom: {
      title: "OTHERS 2",
      content: [
        {
          label: "Item 6",
          image: "/subscriptions.svg",
        },
        {
          label: "Item 7",
          image: "/file_present.svg",
        },
        {
          label: "Item 8",
          image: "/alarm.svg",
        },
      ],
    },
  };
  return (
    <div className="flex relative">
      <div className="w-[300px] fixed top-0 left-0 h-screen border-r-2 border-[#EFF1F6] pt-8 pb-8 flex flex-col">
        <div className="mb-7 pl-8">
          <Image
            className=""
            src="/mainstack-logo.svg"
            alt="Mainstack Logo"
            width={40}
            height={40}
            priority
          />
        </div>
        <ul className="flex flex-col gap-4 mb-6">
          {sidebar_content.top.map((item, i) => {
            return (
              <li
                className={`flex gap-3 pl-10 cursor-pointer ${item.active ? "border-l-4 border-[#FF5403]" : ""
                  }`}
                key={i}
              >
                {/* <span></span> */}
                <Image
                  className=""
                  src={item.image}
                  alt="sidebar icon"
                  width={15}
                  height={15}
                />
                <span
                  className={`text-base text-[#4D5760] ${item.active ? "text-[#FF5403]" : ""
                    }`}
                >
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="mb-6 pl-10">
          <span className="text-xs font-[Sohne] text-[#4D5760] mb-4 block">
            {sidebar_content.middle.title}
          </span>
          <ul className="flex flex-col gap-4">
            {sidebar_content.middle.content.map((item, i) => {
              return (
                <li className="flex gap-3 cursor-pointer" key={i}>
                  {/* <span></span> */}
                  <Image
                    className=""
                    src={item.image}
                    alt="sidebar icon"
                    width={15}
                    height={15}
                  />
                  <span className="text-base text-[#4D5760]">{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pl-10">
          <span className="text-xs font-[Sohne] text-[#4D5760] mb-4 block">
            {sidebar_content.bottom.title}
          </span>
          <ul className="flex flex-col gap-4">
            {sidebar_content.bottom.content.map((item, i) => {
              return (
                <li className="flex gap-3 cursor-pointer" key={i}>
                  {/* <span></span> */}
                  <Image
                    className=""
                    src={item.image}
                    alt="sidebar icon"
                    width={15}
                    height={15}
                  />
                  <span className="text-base text-[#4D5760]">{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center pl-9 pr-4 mt-auto cursor-pointer">
          <Image
            className=""
            src="/blessing-daniels.svg"
            alt="sidebar icon"
            width={32}
            height={32}
          />

          <span className={`ml-3 font-["Sohne_kraftig"]`}>Blessing Daniels</span>

          <Image
            className="ml-auto"
            src="/more_horiz.svg"
            alt="sidebar icon"
            width={11}
            height={2}

          />
        </div>
      </div>
      <div
        style={{ width: "calc(100% - 300px)", overflow: 'hidden' }}
        className="ml-[300px] min-h-screen"
      >
        <Dashboard />
      </div>
    </div>
  );
}
