import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import plus from "../assets/images/plus.svg"

const Wallet = () => {
    return (
        <div className="pl-[271px] pr-[16px] py-[100px] flex flex-col gap-8 max-[1200px]:pl-4">
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
            <div className="text-[24px] font-[700]">
                History
            </div>
        </div>
    )
}

export default Wallet;