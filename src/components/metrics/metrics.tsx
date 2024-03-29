import React from "react"

import database from "../../assets/images/database.svg"
import cloud from "../../assets/images/cloud.svg"
import message from "../../assets/images/message.svg"
import  router from "../../assets/images/router.svg"

const metrics =[
    {
        name: "24/7 Support",
        description: "Rest assured that our dedicated support team is available to help you 24 hours a day, 7 days a week.",
        icon: message
    },
    {
        name: "99.9% Uptime",
        description: "Ruthless Proxies are reliable and always online. We prioritize our users having the best experience while using our proxy solution.",
        icon: database
    },
    {
        name: "Residential Proxies",
        description: "Vast network of over 30M ethically-sourced residential addresses.",
        icon: router
    },
    {
        name: "Datacenter Proxies",
        description: "Over 150K fast and reliable datacenter proxies at your disposal.",
        icon: cloud
    }
]
const Metrics = () =>{
    return (
        <div className="flex gap-4 flex-col">
            <div className="flex justify-center">
                <div className="text-[#c785ec] text-[16px] font-[500] flex items-center justify-center max-w-[672px]">
                    Why choose us?
                </div>
            </div>
            <div className="flex justify-center">
                <div className="text-[#000] font-[700] text-[2.25rem] items-center justify-center max-w-[672px] text-center">
                    Experience uncompromised access and speed
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-[4rem] max-md:grid-cols-1">
                    {
                        metrics.map((item: any, index: number) =>{
                            return (
                                <div className="flex gap-4" key={index}>
                                    <div className="flex items-center justify-center bg-[#AE01FF] w-[40px] h-[40px] rounded-[8px]">
                                        <img className="w-[28px] h-[28px]" src={item.icon} alt=""/>
                                    </div>
                                    <div className=" flex flex-col gap-4">
                                        <div className="flex text-start max-w-[368px] font-[700] text-[16px]">
                                            {item.name}
                                        </div>
                                        <div className="max-w-[368px] text-[16px] ">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Metrics;