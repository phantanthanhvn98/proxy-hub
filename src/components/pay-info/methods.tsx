import React from "react";

import mc from "../../assets/images/mc.svg"
import visa from "../../assets/images/visa.svg"
import binance from "../../assets/images/binance.svg"
import bitcoin from "../../assets/images/bitcoin.svg"

const methods = [
    {
        image: mc
    }, 
    {
        image: visa
    }, 
    {
        image: binance
    }, 
    {
        image: bitcoin
    }, 
]
const PaymentMethods = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex justify-center items-center">
                We accept
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-5 w-full max-[768px]:grid-cols-3 max-[500px]:grid-cols-2 gap-y-4">
                    {
                        methods.map((item: any, index: number) => {
                            return (
                                <div className="flex justify-center" key={index}>
                                    <img className="w-[100px] h-[50px]" src={item.image} key={index}/>
                                </div>
                            )
                        })
                    }
                    <div className="w-[150px] h-[50px] text-center">
                        and over 100 other cryptocurrencies
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethods;