import React from "react"

import dashboard from "../assets/images/dashboard.svg"
import store from "../assets/images/store.svg"
import invoices from '../assets/images/invoices.svg'
import referal from "../assets/images/referal.svg"
import help from "../assets/images/help.svg"
import wallet from "../assets/images/wallet.svg"
import { Link, useLocation } from "react-router-dom"

import "./dark-theme.css"
const header = [
    {
        name: "Dashboard",
        uri: "/?login=true",
        icon: dashboard
    },
    {
        name: "Buy a plan",
        uri: "/store?login=true",
        icon: store
    },
    {
        name: "Wallet",
        uri: "/wallet?login=true",
        icon: wallet
    },
    {
        name: "Invoices",
        uri: "/invoices?login=true",
        icon: invoices
    }, 
    {
        name: "Referals",
        uri: "/referals?login=true",
        icon: referal
    }, 
    {
        name: "Help Center",
        uri: "/help-center?login=true",
        icon: help
    }, 
]

const HeaderX = ({setOpen}: any) =>{
    const {pathname, search} = useLocation()
    return (
        <div className="fixed z-10 bg-[#fff]">
            <div className="relative p-3 w-[255px] h-[calc(100vh-80px)] pt-4 flex gap-6 flex-col border-r-[1px] border-r-[#634087]">
                {
                    header.map((item: any, index: number) => {
                        return (
                            <Link to={item.uri} key={index}>
                                <div className={`flex text-[16px] font-[500] pl-5 gap-4 ${item.uri === `${pathname}${search}` ? "border-l-[5px] border-l-[#AE01FF]" : ""}`} onClick={() => setOpen(false)}>
                                    <img className="w-[24px] h-[24px]" src={item.icon} alt=""/>
                                    {item.name}
                                </div>
                            </Link>
                        )
                    })
                }
                {/* <div className="absolute bottom-0 pb-4 left-[calc(50%-28px)]">
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label>
                </div> */}
            </div>
        </div>
    )
}

export default HeaderX