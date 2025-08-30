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
            className="flex flex-col max-h-[416px] w-full relative overflow-hidden gap-3 flex-1 rounded-[12px] border-[1px] border-white pt-6 pb-0">
            <div className="flex items-center justify-between px-6">
                <h3 className="text-[20px] leading-[24px] text-white font-bold">Market Trades</h3>
                <div className="lg:flex hidden gap-4 items-center">
                    <div onClick={() => setTab('open-orders')}
                         className={`text-[16px] ${tab === 'open-orders' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>Open
                        Orders
                    </div>
                    <div onClick={() => setTab('order-history')}
                         className={`text-[16px] ${tab === 'order-history' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>Order
                        History
                    </div>
                    <div onClick={() => setTab('order-book')}
                         className={`text-[16px] ${tab === 'order-book' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'}  cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>Order
                        Book
                    </div>
                </div>
                <MarketTradesPopup />
            </div>
            <div className="flex flex-col px-6 gap-4 flex-1 min-h-0 overflow-hidden">
                <div className="flex items-center font-bold py-4 border-b border-white/10 flex-shrink-0">
                    <div className="md:flex-1 md:w-auto w-[180px] min-w-0">
                        <span className="lg:text-[16px] text-[14px] text-[#CACACA] tracking-wide">Time</span>
                    </div>
                    <div className="md:flex-1 md:w-auto w-[180px] min-w-0">
                        <span className="lg:text-[16px] text-[14px] text-[#CACACA] tracking-wide">Price (ETH)</span>
                    </div>
                    <div className="md:flex-1 md:w-auto w-[180px] min-w-0">
                        <span className="lg:text-[16px] text-[14px] text-[#CACACA] tracking-wide">Amount (BTC)</span>
                    </div>
                    <div className="md:flex-1 md:w-auto w-[180px] min-w-0">
                        <span className="lg:text-[16px] text-[14px] text-right text-[#CACACA] tracking-wide">Total (ETH)</span>
                    </div>
                </div>
                <div
                    style={{ scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent' }}
                    className="flex flex-col gap-4 overflow-y-auto md:overflow-x-hidden overflow-x-auto md:flex-col-reverse"
                >
                    {tradesData.map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="md:flex-1 md:w-auto w-[180px] font-bold lg:text-[16px] text-[14px] leading-6 text-white">{item.time}</div>
                            <div
                                className={`md:flex-1 md:w-auto w-[180px] font-bold lg:text-[16px] text-[14px] leading-6 ${item.isPositive ? 'text-[#11CABE]' : 'text-[#FA2256]'}`}
                            >
                                {item.price}
                            </div>
                            <div className="md:flex-1 md:w-auto w-[180px] font-bold lg:text-[16px] text-[14px] leading-6 text-white">{item.amount}</div>
                            <div className="md:flex-1 md:w-auto w-[180px] font-bold lg:text-[16px] text-[14px] leading-6 text-white">{item.total}</div>
                        </div>
                    ))}
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