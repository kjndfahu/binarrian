"use client"

import { useState } from "react";
import { MarketTradesPopup } from "./market-trades-popup";

export function MarketTradesSection() {
    const [tab, setTab] = useState('open-orders');

    const tradesData = [
        {
            time: "12:34:44",
            price: "243546.12443536",
            isPositive: true,
            amount: "12425.21435364",
            total: "24324.320214535"
        },
        {
            time: "12:34:44",
            price: "243546.12443536",
            isPositive: false,
            amount: "12425.21435364",
            total: "24324.320214535"
        },
        {
            time: "12:34:44",
            price: "243546.12443536",
            isPositive: false,
            amount: "12425.21435364",
            total: "24324.320214535"
        },
        {
            time: "12:34:44",
            price: "243546.12443536",
            isPositive: true,
            amount: "12425.21435364",
            total: "24324.320214535"
        },
        {
            time: "12:34:44",
            price: "243546.12443536",
            isPositive: true,
            amount: "12425.21435364",
            total: "24324.320214535"
        },
        {
            time: "12:34:44",
            price: "243546.12443536",
            isPositive: true,
            amount: "12425.21435364",
            total: "24324.320214535"
        },
        {
            time: "12:34:44",
            price: "243546.12443536",
            isPositive: true,
            amount: "12425.21435364",
            total: "24324.320214535"
        },
        {
            time: "12:34:44",
            price: "243546.12443536",
            isPositive: true,
            amount: "12425.21435364",
            total: "24324.320214535"
        },
        {
            time: "12:34:44",
            price: "243546.12443536",
            isPositive: true,
            amount: "12425.21435364",
            total: "24324.320214535"
        },
        {
            time: "12:34:44",
            price: "243546.12443536",
            isPositive: true,
            amount: "12425.21435364",
            total: "24324.320214535"
        },
        {
            time: "12:34:44",
            price: "243546.12443536",
            isPositive: true,
            amount: "12425.21435364",
            total: "24324.320214535"
        },
        {
            time: "12:34:44",
            price: "243546.12443536",
            isPositive: true,
            amount: "12425.21435364",
            total: "24324.320214535"
        },
        {
            time: "12:34:44",
            price: "243546.12443536",
            isPositive: true,
            amount: "12425.21435364",
            total: "24324.320214535"
        },
        {
            time: "12:34:44",
            price: "243546.12443536",
            isPositive: true,
            amount: "12425.21435364",
            total: "24324.320214535"
        },
        {
            time: "12:34:44",
            price: "243546.12443536",
            isPositive: true,
            amount: "12425.21435364",
            total: "24324.320214535"
        },
        {
            time: "12:34:44",
            price: "243546.12443536",
            isPositive: true,
            amount: "12425.21435364",
            total: "24324.320214535"
        },
        {
            time: "12:34:44",
            price: "243546.12443536",
            isPositive: true,
            amount: "12425.21435364",
            total: "24324.320214535"
        },
        {
            time: "12:34:44",
            price: "243546.12443536",
            isPositive: true,
            amount: "12425.21435364",
            total: "24324.320214535"
        },
    ];

    return (
        <div
            style={{scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent'}}
            className="relative rounded-[12px] w-full overflow-x-auto lg:overflow-x-hidden border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]"
        >
            <style jsx>{`
                .custom-scroll::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }

                .custom-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }

                .custom-scroll::-webkit-scrollbar-thumb {
                    background: #D0DCFF8F;
                    border-radius: 4px;
                }
            `}</style>
            <div className="flex flex-col z-[3] h-full w-full items-center justify-center gap-6 min-w-[800px] lg:min-w-0">
                <div className="w-full z-[3] rounded-[12px] bg-[#070322] overflow-hidden">
                    <div className="flex items-center z-[3] justify-between px-6 py-6 border-b border-white/10">
                        <h3 className="text-[20px]  leading-[24px] text-white font-bold">Market Trades</h3>
                        <div className="lg:flex hidden z-[3] gap-4 items-center">
                            <div onClick={() => setTab('open-orders')}
                                 className={`text-[16px] ${tab === 'open-orders' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>Open
                                Orders
                            </div>
                            <div onClick={() => setTab('order-history')}
                                 className={`text-[16px] ${tab === 'order-history' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>Order
                                History
                            </div>
                            <div onClick={() => setTab('order-book')}
                                 className={`text-[16px] ${tab === 'order-book' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>Order
                                Book
                            </div>
                        </div>
                        <MarketTradesPopup/>
                    </div>
                    <div
                        style={{scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent'}}
                        className="overflow-y-auto max-h-[calc(416px-96px)] custom-scroll [direction:rtl] lg:[direction:ltr]"
                    >
                        <div className="[direction:ltr] pr-[20px] lg:pr-0">
                            <div
                                className="flex items-center font-bold py-4 border-b border-white/10 flex-shrink-0 px-6">
                                <div className="md:flex-1 md:w-auto w-[180px] min-w-0">
                                    <span
                                        className="lg:text-[16px] text-[14px] text-[#CACACA] tracking-wide">Time</span>
                                </div>
                                <div className="md:flex-1 md:w-auto w-[180px] min-w-0">
                                    <span className="lg:text-[16px] text-[14px] text-[#CACACA] tracking-wide">Price (ETH)</span>
                                </div>
                                <div className="md:flex-1 md:w-auto w-[180px] min-w-0">
                                    <span className="lg:text-[16px] text-[14px] text-[#CACACA] tracking-wide">Amount (BTC)</span>
                                </div>
                                <div className="md:flex-1 md:w-auto w-[180px] min-w-0">
                                    <span
                                        className="lg:text-[16px] text-[14px] text-right text-[#CACACA] tracking-wide">Total (ETH)</span>
                                </div>
                            </div>
                            {tradesData.map((item, index) => (
                                <div key={index}
                                     className="flex items-center justify-between px-6 py-4 border-b border-white/10 hover:bg-[#FFFFFF05] transition-colors">
                                    <div
                                        className="md:flex-1 md:w-auto w-[180px] font-bold lg:text-[16px] text-[14px] leading-6 text-white">{item.time}</div>
                                    <div
                                        className={`md:flex-1 md:w-auto w-[180px] font-bold lg:text-[16px] text-[14px] leading-6 ${item.isPositive ? 'text-[#11CABE]' : 'text-[#FA2256]'}`}
                                    >
                                        {item.price}
                                    </div>
                                    <div
                                        className="md:flex-1 md:w-auto w-[180px] font-bold lg:text-[16px] text-[14px] leading-6 text-white">{item.amount}</div>
                                    <div
                                        className="md:flex-1 md:w-auto w-[180px] font-bold lg:text-[16px] text-[14px] leading-6 text-white">{item.total}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <img
                className="absolute w-full h-[77px] pointer-events-none select-none bottom-0 rounded-[12px]"
                src="/img/shadow.png"
                alt="shadow"
            />
        </div>
    );
}