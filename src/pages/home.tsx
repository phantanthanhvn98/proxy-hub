import React from 'react'
import star from "../assets/images/star.png"
import { Button } from 'antd'
import Metrics from '../components/metrics/metrics'
import PayInfo from '../components/pay-info/pay-info'
import PaymentMethods from '../components/pay-info/methods'
import { useLocation } from 'react-router-dom'
import Dashboard from '../components/dashboard/dashboard'

const Home = () => {
    const {search} = useLocation()
    if(search.includes("?login=true"))
        return (
            <Dashboard />
        )
    else
        return (
            <div className='flex flex-col gap-[128px] p-8 mt-[100px] max-md:p-4'>
                <div className='flex px-4 max-md:px-0 flex-col gap-2 relative'>
                    <div className='flex gap-4'>
                        Great
                        <div className='flex gap-2'>
                            {
                                Array(5).fill(star).map((item: any, index: number) => {
                                    return (
                                        <img className='h-[24px] w-[24px]' src={item} alt='' key={index}/>
                                        // <div className=''>
                                            
                                        // </div>
                                    )
                                })
                            }
                        </div>
                        Trust pilot
                    </div>
                    <div className='text-[3.75rem] max-md:text-[50px] font-[700] max-w-[50vw] max-[768px]:max-w-[100%]'>
                        Unbeatable quality, incredible prices
                    </div>
                    <div className='text-[2rem] text-[#c785ec] font-[500] max-w-[50vw] max-[768px]:max-w-[100%]'>
                        Lightning-Fast Web Data Collection Without Hassles
                    </div>
                    <div className='flex pt-4 gap-8'>
                        <Button className='h-[40px] bg-[#AE01FF] hover:bg-[#AE01FF!important]  text-[#fff] text-[14px] font-[500] px-8 py-4 flex items-center justify-center'>
                            Get started
                        </Button>
                        <Button className='h-[40px] bg-[#AE01FF] hover:bg-[#AE01FF!important] text-[#fff] text-[14px] font-[500] px-8 max-md:px-4 py-4 flex items-center justify-center'>
                            Talk to an expert
                        </Button>
                    </div>
                </div>
                <Metrics />
                <PayInfo />
                <PaymentMethods />
            </div>
        )
}

export default Home;