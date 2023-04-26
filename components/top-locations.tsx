import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import LoadingSpinner from './loading-spinner';
import { GoPrimitiveDot } from 'react-icons/go';
import ReactCountryFlag from "react-country-flag"
import {
  Chart as ChartJS, ArcElement
} from 'chart.js';

ChartJS.register(ArcElement);

const Locations = ({ items, isLoading, isSuccess }: any) => {
  const countryNames: any = {
    "Nigeria": "NG",
    "Germany": "DE",
    "Ghana": 'GH',
    "Finland": 'FI',
    "United Kingdom": 'GB'
  }

  const colors = ['#844FF6',
    '#599EEA',
    '#F09468',
    '#0FB77A',
    '#FAB70A',]

  function getCountryCode(countryCode: any) {
    if (countryNames.hasOwnProperty(countryCode)) {
      return countryNames[countryCode];
    }
  }

  // console.log(getCountryCode("Nigeria"));

  const renderView = () => {
    if (isLoading) return (
      <div className="min-h-[200px] flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )

    if (isSuccess) {
      const data = {
        labels: [],
        datasets: [
          {
            data: items?.map((item: any) => item.percent),
            backgroundColor: colors.slice(0, items?.length),
            borderWidth: 0,
            hoverBackgroundColor: colors.slice(0, items?.length),
          },
        ],
      };

      return (
        <div className='flex flex-col gap-4'>
          <div className="flex justify-between items-center">
            <h4 className='text-lg text-[#131316] font-bold'>Top Locations</h4> <a>View full reports </a>

          </div>
          <div className='flex justify-between items-center pr-4'>
            <div>
              <ul className='flex flex-col gap-3'>
                {items?.map((item: any, i: number) => ({ ...item, color: colors[i] })).map((item: any, i: any) => {
                  console.log(item);

                  return (
                    <li className='flex gap-2 items-center' key={i}>
                      <ReactCountryFlag countryCode={getCountryCode(item?.country)} svg />
                      <span className='text-base text-[#131316] font-[Sohne]'>{item?.country} </span><span className='text-[#131316] text-base font-["Sohne_kraftig"]'>{item?.percent}%</span>
                      <GoPrimitiveDot fontSize={20} color={item.color} />
                    </li>
                  )
                })}
              </ul>
            </div>

            <div style={{
              height: '160px',
            }}>
              <Doughnut data={data} />
            </div>
          </div>
        </div>
      )
    }


  }
  return (
    <>{renderView()}</>
  )
}


export default Locations