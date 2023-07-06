import React from 'react';
import Image from "next/image";
import { Doughnut } from 'react-chartjs-2';
import { GoPrimitiveDot } from 'react-icons/go';
import {
    Chart as ChartJS, ArcElement
} from 'chart.js';
import LoadingSpinner from './loading-spinner';
import { FcGoogle } from "react-icons/fc";
import Twitter from '../public/twitter.svg'
import LinkedIn from '../public/linkedIn.svg'
import Facebook from '../public/facebook.svg'
import Instagram from '../public/Instagram.svg'

ChartJS.register(ArcElement);

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
                    <div className='flex justify-between items-center pr-4'
                    >
                        <div>
                            <ul className='flex flex-col gap-3'>
                                {items?.map((item: any, i: number) => ({ ...item, color: colors[i] })).map((item: any, i: any) => {
                                    console.log(item);

                                    return (
                                        <li className='flex gap-2 items-center' key={i}>

                                            {item.source === 'instagram' ?

                                                <Image
                                                    className=""
                                                    src={Instagram}
                                                    alt="IG Logo"
                                                    width={18}
                                                    height={18}

                                                /> : item.source === 'facebook' ? <Image
                                                    className=""
                                                    src={Facebook}
                                                    alt="facebook Logo"
                                                    width={17}
                                                    height={17}

                                                /> : item.source === 'linkedin' ? <Image
                                                    className=""
                                                    src={LinkedIn}
                                                    alt="linkedIn Logo"
                                                    width={17}
                                                    height={17}

                                                /> : item.source === "google" ? <FcGoogle /> : ''}


                                            <span className='text-base text-[#131316] font-[Sohne] capitalize'>{item?.source} </span>
                                            <span className='text-[#131316] text-base font-["Sohne_kraftig"]'>{item?.percent}%</span>
                                            <GoPrimitiveDot fontSize={20} color={item.color} />
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>

                        <div  className='h-[100px] md:h-[160px]'>
                            <Doughnut data={data} />
                        </div>
                    </div>
                </div>
            )
        }


    }
    return (
        <>
            {renderView()}
        </>
    )
}


export default ReferralSources