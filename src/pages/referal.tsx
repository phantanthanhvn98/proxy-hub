import { Button } from "antd"
import React from "react"

const Referal = () => {
    return (
        <div className="pl-[271px] pr-[16px] py-[100px] flex flex-col gap-8 max-[1200px]:pl-4">
            <div className="">
                Affiliate program
            </div>
            <div className="">
                Refer our service and earn money through participating in ThunderProxies’ Affiliate Program! You will receive a commission for users who register and purchase on ThunderProxies.com through your links.
            </div>
            <Button className='h-[40px] bg-[#AE01FF] hover:bg-[#AE01FF!important] text-[#fff] text-[14px] font-[500] px-8 max-md:px-4 py-4 flex items-center justify-center'>
                Apply now
            </Button>
        </div>
    )
}

export default Referal