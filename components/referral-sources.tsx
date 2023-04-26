import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import {
    Chart as ChartJS, ArcElement
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ReactCountryFlag from "react-country-flag"
import LoadingSpinner from './loading-spinner';


ChartJS.register(ArcElement);

// export const data = {
// //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//   labels: [''],
//   datasets: [
//     {
//     //   label: '# of Votes',
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

const ReferralSources = ({ items, isLoading, isSuccess }: any) => {
    console.log(items);

    const colors = ['#844FF6',
        '#599EEA',
        '#F09468',
        '#0FB77A',
        '#FAB70A',]


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
                        <h4 className='text-lg text-[#131316] font-bold'>Top Referral source</h4> <a>View full reports </a>

                    </div>
                    <div className='flex justify-between items-center pr-8'
                    >
                        <div>
                            <ul className='flex flex-col gap-3'>
                                {items?.map((item: any, i: number) => ({ ...item, color: colors[i] })).map((item: any, i: any) => {
                                    console.log(item);

                                    return (
                                        <li className='flex gap-2 items-center' key={i}>




                                            <span className='text-base text-[#131316] font-[Sohne] capitalize'>{item?.source} </span>
                                            <span className='text-[#131316] text-base font-["Sohne_kraftig"]'>{item?.percent}%</span>
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
        <>
            {renderView()}</>
    )
}


export default ReferralSources