import { Button } from "antd"
import React from "react"

const contactOption = [
    {
        title: "Same business day",
        description: "Contact us via email for support.",
        method: {
            name: 'Email',
            value: "xxx@mailxxx"
        }
    },
    {
        title: "Less than a couple hours",
        description: "Receive timely assistance.",
        method: {
            name: 'Discord',
            value: "https://discord.gg/xxx"
        }
    },
    {
        title: "24/7 Support",
        description: "Get in touch with one of our agents.",
        method: {
            name: 'Live chat',
            value: "https://live.chat.gg/xxx"
        }
    }
]


const Help = () => {
    return (
        <div className="pl-[271px] pr-[16px] py-[100px] flex flex-col gap-8 max-[1200px]:pl-4">
                       <div className="flex flex-col gap-8">
                <div className="text-[25px] font-[700] flex items-center justify-center mt-16">
                    Contact Options
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-3 gap-8 max-[1135px]:grid-cols-2 max-[768px]:grid-cols-1">
                        {
                            contactOption.map((item: any, index: number) => {
                                return (
                                    <div className="p-8 w-[330px] shadow-[0px_0px_10px_0px_#8549a7] flex flex-col gap-5 rounded-[24px]" key={index}>
                                        <div className="flex text-[18px] font-[500]">
                                            {item.title}
                                        </div>
                                        <div className="text-[14px]">
                                            {item.description}
                                        </div>   
                                        <div className="text-[36px] font-[700]">
                                            {item.method.name}
                                        </div>
                                        <Button className="bg-[#AE01FF] text-[14px] text-[#fff] hover:bg-[#AE01FF!important]">
                                            Select
                                        </Button>
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

export default Help