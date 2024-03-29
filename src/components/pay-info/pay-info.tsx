import { Button } from "antd";
import React, { useState } from "react";
import PaymentComponent from "./payment";

import {pricing} from "../../constants/pricing"

const PayInfo = () => {
    return (
        <div className="flex flex-col gap-24">
            <div className="flex flex-col gap-6">
                <div className="flex items-center justify-center text-[36px] font-[700]">
                    Simple no-tricks pricing
                </div>
                <div className="flex items-center justify-center text-[16px] font-[500]">
                    Pay as you go
                </div>
            </div>
            <div className="flex flex-col gap-24">
                <PaymentComponent content={pricing[0]}/>
                <PaymentComponent content={pricing[1]}/>
            </div>
            <div className="grid grid-cols-2">

            </div>
        </div>
    )
}

export default PayInfo;