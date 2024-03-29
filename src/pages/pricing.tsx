import React, { useState } from "react"

import {pricePlan} from "../constants/pricing"
import PricingCard from "../components/pricing/pricing"

const Pricing = () => {
    const [plan, setPlan] = useState(pricePlan[1].price[0])
    return (
        <div className="pt-[100px] px-4 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
                <div className="flex justify-center text-center items-center text-[48px] font-[700]">
                    Pricing plans for everyone
                </div>
                <div className="flex justify-center text-center items-center font-[18px]">
                    We always strive to provide the most flexible and cost efficient formula to our clients.
                </div>
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
                    <PricingCard className="grid-cols-1" data={pricePlan[0]} plan={pricePlan[0].price[0]}/>
                    <PricingCard className="grid-cols-1" data={pricePlan[1]} plan={plan}/>
                </div>
            </div>
        </div>
    )
}

export default Pricing