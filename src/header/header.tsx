import React, { useState } from "react"

import logo from "../assets/images/logo.png"
import { Link, useLocation } from "react-router-dom"

import { DownOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, Select, Skeleton } from 'antd';
import Menu from "./menu/menu";
import HeaderX from "./header-x";

import account from "../assets/images/account.svg"
import plus from "../assets/images/plus.svg"
import setting from '../assets/images/setting.svg'
import logout from "../assets/images/log-out.svg"

const header = [
    {
        name: "Home",
        uri: "/"
    },
    {
        name: "Pricing",
        uri: "/pricing"
    },
    {
        name: "Support",
        uri: "/support"
    }
]

const itemsLanguage = [
    {
        value: '1',
        label: 'EN',
      },
      {
        value: '2',
        label: 'RUS',
      }
]

const items: MenuProps['items']= [
    {
      key: '1',
      label: (
        // <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        //   1st menu item
        // </a>
        <div className="flex gap-1 pointer-events-none items-center">
            <div className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[#AE01FF] text-[#fff]">
                T
            </div>
            <div className="flex flex-col gap-1">
                <div className="text-[16px] font-[500]">
                    Thanh
                </div>
                <div className="text-[12px] opacity-75">
                    xxxxxxxxxxxxxx@gmail.com
                </div>
            </div>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <Link to={"/profile?login=true"} className="flex gap-2 items-center">
            <img className="w-[18p] h-[18px] text-[18px]" src={setting} alt=""/>
            Setting
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <div className="flex gap-2 items-center">
            <img className="w-[18p] h-[18px] text-[18px]" src={logout} alt=""/>
            Log out
        </div>
      ),
    },
  ];
  

const Header = () => {
    const { pathname, search } = useLocation()
    const [language, setLanguage] = useState(pathname.includes("/ru/") ? "RU" : "EN")
    const [open, setOpen] = useState(false)
    const [balance, setBalance] = useState({loading: true, balance: 0.00})
    return (
        <div className="flex border-b-[1px] bg-[#fff] z-20 border-b-[#634087] fixed w-full top-0 items-center justify-between p-4" >    
            <div className="flex w-full top-0 items-center justify-between relative">
                <div className="flex gap-8">
                    {
                        search.includes("?login=true") ?
                        <div className="hidden max-[1100px]:flex">
                            <Menu open={open} setOpen={setOpen}/>
                        </div> 
                        :<></>
                    }
                    <Link to="/">
                        <div className="flex items-center gap-4 text-6 font-[600]">
                            <img className="w-[28px] h-[28px]" src={logo} alt=""/>
                            RuthlessProxies
                        </div>
                    </Link>
                </div>
                {
                    search.includes("?login=true") ? <></> :
                    <>
                        <div className="flex items-center gap-6 max-md:absolute max-md:w-[calc(100vw-16px)] max-md:h-[100vh] max-md:flex-col max-md:top-0 max-md:left-0 max-md:bg-[#fff] max-md:pt-[80px] max-md:z-0 max-md:opacity-0 max-md:invisible" style={open? {opacity: 1, visibility: "visible"}: {}}>
                            {
                                header.map((item: any, index: number) => {
                                    return (
                                        <Link to={item.uri} key={index}>
                                            <div className={`text-[16px] font-[500] cursor-pointerr hover:text-[#AE01FF] hover:underline px-4 py-3 rounded-[8px] ${pathname ===item.uri ? "text-[#AE01FF] underline" : ""}`} key={index} onClick={() => setOpen(false)}>
                                                {item.name}
                                            </div>
                                        </Link>
                                    )
                                })
                            }
                            <Link to="/auth/login" className={`min-[768px]:hidden text-[16px] font-[500] cursor-pointerr hover:text-[#AE01FF] hover:underline px-4 py-3 rounded-[8px] ${pathname === "/auth/login" ? "text-[#AE01FF] underline" : ""}`} onClick={() => setOpen(false)}>
                                Sign in
                            </Link>
                            <Link to="/auth/register" className={`min-[768px]:hidden text-[16px] font-[500] cursor-pointerr hover:text-[#AE01FF] hover:underline px-4 py-3 rounded-[8px] ${pathname === "/auth/register" ? "text-[#AE01FF] underline" : ""}`} onClick={() => setOpen(false)}>
                                Sign up
                            </Link>
                            <div className="hidden gap-8 max-md:flex">
                                <div className="cursor-pointer opacity-70 hover:opacity-100">
                                    English (EN)
                                </div>
                                <div className="cursor-pointer opacity-70 hover:opacity-100">
                                    Русский (RU)
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 max-md:hidden">
                            <div className="flex items-center">
                                <Select
                                    defaultValue={language}
                                    options={itemsLanguage}
                                    onChange={(value) => setLanguage(value)}
                                >
                                    <div className="flex gap-4">
                                        {language}
                                        <DownOutlined color="#AE01FF"/>
                                    </div>
                                </Select>
                            </div>
                            <Link to='/auth/login'>
                                <div className="px-4 py-3 bg-[] rounded-[8px] bg-[#AE01FF] hover:bg-[#8549a7] text-[#fff] text-[14px] font-[500] cursor-pointer">
                                    Login
                                </div>
                            </Link>
                        </div>
                        <div className="min-[768px]:hidden">
                            <Menu open={open} setOpen={setOpen}/>
                        </div>
                    </>
                }
                {
                    search.includes("?login=true") ?
                    <div className={`${ open ? '': 'max-[1200px]:-translate-x-[255px]'} tranform ease-in-out duration-300 h-[100vh] absolute top-[calc(17px+100%)] left-[-16px] flex`}>
                        <HeaderX setOpen={setOpen}/>
                    </div> : <></>
                }
                {
                    search.includes("?login=true") ?
                    <div className="flex gap-6">
                        <Link to={"/wallet?login=true"}>
                            <div className="flex items-center gap-4 px-4 py-1 bg-[#e7e7e7] rounded-full text-[#000] cursor-pointer">
                                {
                                    balance.loading ?  <Skeleton.Button active={true} shape="square" /> : `$ ${balance.balance.toFixed(2)}`
                                }
                                <img className="" src={plus} alt=""/>
                            </div>
                        </Link>
                        <Dropdown menu={{ items }} placement="bottomLeft" className="flex items-center">
                            <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#e7e7e7] rounded-full cursor-pointer">
                                <img className="w-[28px] h-[28px]" src={account} alt=""/>
                            </div>
                        </Dropdown>
                    </div>
                    : <></>
                }
            </div>
        </div>
    )
}

export default Header;