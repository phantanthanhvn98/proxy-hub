import { Button } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import plus from "../../assets/images/plus.svg"
import dashboard from "../../assets/images/dashboard.svg"
import list from "../../assets/images/list.svg"

const statusItems = [
    {
        name: "Active",
        id: 0
    },
    {
        name: "Expired",
        id: 1
    },
    {
        name: "All",
        id: 2
    }
]

const viewModes = [
    {
        name: "Details",
        icon: list
    },
    {
        name: "Cards",
        icon: dashboard
    }
]

const Dashboard = () =>{
    const [status, setStatus] = useState(statusItems[0])
    const [viewMode, setViewMode] = useState(viewModes[0])
    return (
        <div className="pl-[271px] pr-[16px] py-[100px] max-[1200px]:pl-4">
            <div className="text-[24px] font-[700] flex gap-1">
                Welcome back, 
                <div className="font-[600] text-[#AE01FF]">
                    ${"username"}
                </div>
            </div>
            <div className="opacity-80">
                Member since 2024
            </div>
            <div className="w-[440px] p-6 flex gap-6 flex-col shadow-[0px_0px_10px_0px_#8549a7] mt-8 rounded-[12px]">
                <div className="flex justify-between">
                    <div className="text-[18px] font-[500]">
                        Available balance
                    </div>
                    <Link to="store?login=true">
                        <Button className="gap-4 h-[40px] bg-[#AE01FF] hover:bg-[#AE01FF!important] text-[#fff] text-[14px] font-[500] px-8 max-md:px-4 py-4 flex items-center justify-center">
                            <img className="bg-[#fff] rounded-full" src={plus} alt=""/>
                            Add funds
                        </Button>
                    </Link>
                </div>
                <div className="flex gap-1">
                    <div className="text-[24px] font-[800]">
                        0.00
                    </div>
                    <div className="text-[16px] font-[700] opacity-60 pt-2">
                        USD
                    </div>
                </div>
            </div>
            <div className="flex gap-4 mt-[50px] flex-col">
                <div className="text-[24px] font-[500]">
                    Subscriptions
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-4 items-center">
                        {
                            statusItems.map((item: any, index: number) => {
                                return (
                                    <div className={`px-4 py-1 text-[14px] bg-[#e7e7e7] ${index===status.id ? "text-[#AE01FF]" : ""} rounded-lg cursor-pointer`} key={index} onClick={() => setStatus(item)}>
                                        {item.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex gap-4">
                        {
                            viewModes.map((item: any, index:number) => {
                                return (
                                    <div className={`flex ${item.name === viewMode.name ? 'bg-[#e7e7e7]' : ''} items-center justify-center w-[36px] h-[36px] rounded-[8px] cursor-pointer`} key={index} onClick={() => setViewMode(item)}>
                                        <img className="w-[20px] h-[20px]" src={item.icon} alt=""/>
                                    </div>
                                )
                                })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;