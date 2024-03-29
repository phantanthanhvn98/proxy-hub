import { Button } from "antd"
import React, { useState } from "react"

import tick from "../../assets/images/tick.svg"

const PaymentComponent = (props:any) => {
    const content = props.content
    const [plan, setPlan] = useState<any>(content.price[0])
    return (
        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
            <div className="flex flex-col gap-8 col-span-1">
                <div className="flex font-[700] text-[24px]">
                    {content.title}
                </div>
                <div className="flex text-[16px] col-span-1">
                    {content.descriptipon}
                </div>
                <div className="">
                    <div className="flex gap-4 flex-col">
                        <div className="text-[14px] font-[500] flex">
                            What's included
                        </div>
                        <div className="flex w-full items-center">
                            <div className="h-[1px] w-full border-solid border-[1px] border-[#c785ec]" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {
                                content.metrics.map((item:any, index: number) => {
                                    return (
                                        <div className="flex items-center gap-4 text-[14px] text-[#c785ec] font-[400]" key={index}>
                                            <img src={tick} alt=""/>
                                            {item}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center border-[#8549a7] border-[2px] p-4 rounded-[30px] shadow-[0px_0px_10px_0px_#8549a7]">
                <div className="flex flex-col gap-8 w-full">
                    <div className="flex justify-center w-full">
                        {/* <div className="flex w-full items-center justify-between" style={content.price.length === 1 ? {justifyContent: "center"} : {}}> */}
                        <div className="grid grid-cols-4 max-[600px]:grid-cols-2 gap-4">
                            {
                                content.price.map((price: any, i: number) => {
                                    return (
                                        <div key={i} className={`${price.name===plan.name ? "bg-[#AE01FF] text-[#fff]" : "hover:text-[#AE01FF] bg-[#dbe2eb]"}  p-2 rounded-[8px] cursor-pointer flex justify-center items-center`} onClick={() => setPlan(price)}>
                                            {price.name}
                                        </div>   
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center justify-center text-[49px] font-[800]">
                            {plan.value}
                            <div className="relative h-[40px]">
                                <div className="text-[14px] font-[400] text-[#AE01FF] items-end absolute bottom-0 w-[40px]">
                                    /{plan.unit}
                                </div>
                            </div>
                        </div>
                        <Button className="w-[150px] h-[40px] bg-[#AE01FF] hover:bg-[#AE01FF!important] text-[#fff] text-[14px] font-[500] px-8 py-4 flex items-center justify-center">
                            Purchase
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentComponent;