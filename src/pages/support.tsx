import React, { useState } from "react";
import arrow from "../assets/images/arrow.svg"
import { Button } from "antd";

const faq = [
    {
        question: 'What protocols do you support?',
        answer: "RuthlessProxies supports HTTP and HTTPS."
    },
    {
        question: 'What payment methods do you accept?',
        answer: "We currently accept worldwide (excluding CIS) cards, bank transfers and cryptocurrencies"
    },
    {
        question: 'What protocols do you support?',
        answer: "No, we do not keep any logs such as connecting IP, or website visited."
    },
    {
        question: 'Do you keep logs of user traffic?',
        answer: "Yes, we offer 100MB trials, get in contact with us for more information."
    },
    {
        question: 'How can I get in contact?',
        answer: "The fastest way to get in contact is via our Discord server linked in the header, if this doesn't work, you can email us at help@xxx.com"
    },
    {
        question: 'What is the format for the proxies?',
        answer: "There are 2 options: ip:port:user:pass or user:pass@ip:port"
    },
    {
        question: 'Can I get a refund?',
        answer: "All sales are final, we don't provide refunds, therefore we highly suggest to get a free trial of a package you want to buy to test it out."
    }
]

const contactOption = [
    {
        title: "Same business day",
        description: "Contact us via email for support.",
        method: {
            name: 'Email',
            value: "xxx@mailxxx"
        }
    },
    {
        title: "Less than a couple hours",
        description: "Receive timely assistance.",
        method: {
            name: 'Discord',
            value: "https://discord.gg/xxx"
        }
    },
    {
        title: "24/7 Support",
        description: "Get in touch with one of our agents.",
        method: {
            name: 'Live chat',
            value: "https://live.chat.gg/xxx"
        }
    }
]
const Support = () => {
    const [open, setOpen] = useState(-1)
    return (
        <div className="mt-[100px] px-8">
            <div className="text-[60px] font-[700] flex justify-center">
                Support
            </div>
            <div className="text-[20px] flex justify-center text-center">
                Get help from our dedicated support team.
            </div>  
            <div className="text-[20px] text-[#AE01FF] flex justify-center text-center">
                Frequently asked questions
            </div> 
            <div className="flex flex-col gap-3 mt-8">
                {
                    faq.map((item: any, index: number) => {
                        return (
                            <div className="border-b-[1px] border-[#585858]  p-[4px] cursor-pointer flex flex-col gap-2" key={index} onClick={() => setOpen(index === open ? -1 : index)}>
                                <div className="text-[16px] font-[600] flex justify-between items-center">
                                    {item.question}
                                    <img className="w-[20px] transition transform ease-in-out duration-300" style={open===index ? {transform: "rotate(180deg)"}: {}} src={arrow} alt=""/>
                                </div>
                                <div className="transition transform ease-in-out duration-300 text-[14px] font-[400] opacity-0 invisible h-[0px]" style={index === open ? {opacity: 1, visibility:"visible", height: "100%"}: {}}>
                                    {item.answer}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex flex-col gap-8">
                <div className="text-[25px] font-[700] flex items-center justify-center mt-16">
                    Contact Options
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-3 gap-8 max-[1100px]:grid-cols-2 max-[768px]:grid-cols-1">
                        {
                            contactOption.map((item: any, index: number) => {
                                return (
                                    <div className="p-8 w-[330px] shadow-[0px_0px_10px_0px_#8549a7] flex flex-col gap-5 rounded-[24px]" key={index}>
                                        <div className="flex text-[18px] font-[500]">
                                            {item.title}
                                        </div>
                                        <div className="text-[14px]">
                                            {item.description}
                                        </div>   
                                        <div className="text-[36px] font-[700]">
                                            {item.method.name}
                                        </div>
                                        <Button className="bg-[#AE01FF] text-[14px] text-[#fff] hover:bg-[#AE01FF!important]">
                                            Select
                                        </Button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support;