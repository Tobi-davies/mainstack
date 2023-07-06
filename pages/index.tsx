import Dashboard from "@/components/dashboard/dashboard";
import Image from "next/image";
import styled from "@emotion/styled";
import React from 'react'



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

const MainContent = styled.div`
  width: 100%;
overflow: hidden;
min-height: 100vh;

@media screen and (min-width: 768px) {
    width: calc(100% - 250px);
    margin-left: 250px;
  }

  @media screen and (min-width: 992px) {
    width: calc(100% - 300px);
    margin-left: 300px;

  }
  
`;

const SideBar = styled.div<{ isMobileNav?: boolean; }>`
    transform: translateX(0);
    width: 300px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100vh;
    // overflow-y: auto;
    transition: transform 1s ease;
    transform: translateX(${({ isMobileNav }) => (isMobileNav ? "0" : "-100vw")});
    z-index: 4;
    background-color: #fff;
    padding: 20px 0;
    border-right: 2px solid #EFF1F6;


@media screen and (min-width: 768px) {
    width: 250px;
    transform: unset;
    // border: 1px solid red;
    height: 100vh;

  }

@media screen and (min-width: 992px) {
    width: 300px;
    postion: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    padding: 16px 0;
    display: flex;
    flex-direction: column;
  }

`

export default function Home() {
  const [isMobileNav, showMobileNav] = React.useState(false)


  const navRef = React.useRef<HTMLDivElement>(null);

  //nav action when clicked outside
  const useOnOutsideClick = (navRef: any, navAction: any) => {
    React.useEffect(() => {
      const navEvent = (e: Event) => {
        if (navRef.current.contains(e.target) || !navRef.current) {
          return;
        }

        navAction(e);
      };

      document.addEventListener("mousedown", navEvent);
      document.addEventListener("touchstart", navEvent);

      return () => {
        document.removeEventListener("mousedown", navEvent);
        document.removeEventListener("touchstart", navEvent);
      };
    }, [navAction, navRef]);
  };

  useOnOutsideClick(navRef, () => showMobileNav(false));

  return (
    <div className="flex relative">
      <SideBar ref={navRef} isMobileNav={isMobileNav}>
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
                className={`flex gap-3 pl-10 cursor-pointer  ${item.active ? "border-l-4 border-[#FF5403]" : ""
                  }`}
                key={i}
              >
                <Image
                  className=""
                  src={item.image}
                  alt="sidebar icon"
                  width={15}
                  height={15}
                />
                <span
                  className={`text-base text-[#4D5760] hover:text-[#FF5403] ${item.active ? "text-[#FF5403]" : ""
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
                  <span className="text-base text-[#4D5760] hover:text-[#FF5403]">{item.label}</span>
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
                  <span className="text-base text-[#4D5760] hover:text-[#FF5403]">{item.label}</span>
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
            width={13}
            height={2}

          />
        </div>
      </SideBar>
      <MainContent

      >
        <Dashboard showMobileNav={showMobileNav} />
      </MainContent>
    </div>
  );
}
