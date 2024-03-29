import { Button } from "antd";
import React, { useState } from "react";

const PricingCard = ({data, plan, setPlan, setOpen}: any) => {

    const onClickPurchase = () => {
        setPlan(plan)
        setOpen(true)
    }
    return (
        <div className="shadow-[0px_0px_10px_0px_#8549a7] rounded-[8px] w-[384px] max-[400px]:w-[100%]">  
            <div className="p-8">
                <div className="flex items-center text-[20px] font-[700]">
                    {data.name}
                </div>
                <div className="flex items-center text-[16px] mt-[16px]">
                    {data.description}
                </div>
                <div className="flex items-center text-[12px] mt-[8px]">
                    Starting from
                </div>
                <div className="flex flex-col gap-6 mt-[16px]">
                    <div className="flex items-center text-[49px] font-[800]">
                        {plan.value}
                        <div className="relative h-[40px]">
                            <div className="text-[14px] font-[400] text-[#AE01FF] items-end absolute bottom-0 w-[40px]">
                                /{plan.unit}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center w-full">
                        <Button className="w-full h-[40px] bg-[#AE01FF] hover:bg-[#AE01FF!important] text-[#fff] text-[14px] font-[500] px-8 py-4 flex items-center justify-center" onClick={() => onClickPurchase()}>
                            Purchase
                        </Button>
                    </div>
                </div>
                <div className="w-full mt-8 flex flex-col gap-3">
                    {
                        data.metrics.map((item: any, index: number) => {
                            return (
                                <div className="flex gap-4 items-center text-[14px]" key={index}>
                                    <img className="w-[20px] h-[20px]" src="" alt=""/>
                                    {item.name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PricingCard;