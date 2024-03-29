import React from "react";

import discord from "../assets/images/discord.svg"
import telegram from "../assets/images/telegram.svg"
import { useLocation } from "react-router-dom";

const Footer = () => {
    const {search} =  useLocation()
    if(search.includes("login=true"))
        return <></>
    return (
        <div className="p-8 flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className="text-[14px]">
                    <div className="font-[500]">
                        Get in touch
                    </div>
                    <div className="">
                        help@ruthlessproxies.com
                    </div>
                    <div className="">
                        +370-4-141-9174
                    </div>
                    <div className="font-[500]">
                        About us
                    </div>
                    <div className="">
                        VAT Code: LT100016112212
                    </div>
                    <div className="">
                        Address: Konstitucijos pr. 21B (Quadrum South), Vilnius, Lithuania, LT-09306
                    </div>

                </div>
                <div className="flex gap-8">
                    <a href="" target="_blank" rel="noreferer">
                        <img src={discord} alt="" className="w-[40px] h-[40px]"/>
                    </a>
                    <a href="" rel="noreferer" target="_blank">
                        <img src={telegram} alt="" className="w-[40px] h-[40px]" />
                    </a>
                </div>
            </div>
            <div className="flex gap-4 text-[14px] pt-8 border-t-[1px] border-[#636262] justify-center">
                © 2022-2023 ThunderProxies. All Rights Reserved. 
                <a className="hover:underline cursor-pointer hover:text-[#636262]">
                    Terms & Conditions
                </a>
                <a className="hover:underline cursor-pointer hover:text-[#636262]">
                    Privacy Policy
                </a>
            </div>
        </div>
    )
}

export default Footer;