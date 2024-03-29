import React, { useState } from "react";
import PricingCard from "../components/pricing/pricing";
import { pricePlan } from "../constants/pricing";
import Purchase from "../components/modal/purchase";

const Store = () => {
    const [plan, setPlan] = useState(pricePlan[1].price[0])
    const [open, setOpen] = useState(false)
    return (
        <div className="pl-[271px] pr-[16px] py-[100px] flex flex-col gap-8 max-[1200px]:pl-4">
            <div className="text-[48px] font-[700] flex justify-center">
                Store
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-4 gap-4 max-[530px]:grid-cols-2">
                    {
                        pricePlan[1].price.map((price: any, i: number) => {
                            return (
                                <div key={i} className={`${price.name===plan.name ? "bg-[#AE01FF] text-[#fff]" : "hover:text-[#AE01FF] bg-[#dbe2eb]"}  p-2 rounded-[8px] cursor-pointer flex justify-center items-center`} onClick={() => setPlan(price)}>
                                    {price.name}
                                </div>   
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-8 max-[836px]:grid-cols-1">
                    <PricingCard setOpen={setOpen} setPlan={setPlan} className="grid-cols-1" data={pricePlan[0]} plan={pricePlan[0].price[0]}/>
                    <PricingCard setOpen={setOpen} setPlan={setPlan}  className="grid-cols-1" data={pricePlan[1]} plan={plan}/>
                </div>
            </div>
            <Purchase open={open} setOpen={setOpen}/>
        </div>
    )
}

export default Store;