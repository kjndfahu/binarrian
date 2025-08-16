"use client"

import {AssetBlock} from "@/features/dashboard/overview/asset-block.tsx";
import {useState} from "react";

export function MarketTradesSection(){
    const [tab, setTab] = useState('open-orders')
    return (
        <div
            className="flex flex-col w-full relative overflow-h-hidden gap-3 h-[311px] rounded-[12px] border-[1px] border-white pt-6 pb-0 w-[55%]">
            <div className="flex items-center justify-between px-6">
                <h3 className="text-[20px] leading-[24px] text-white font-bold">Market Trades</h3>
                <div className="flex gap-4 items-center">
                    <div onClick={() => setTab('open-orders')}
                         className={`text-[16px] ${tab === 'open-orders' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>Open
                        Orders
                        Assets
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
            </div>
            <div style={{ scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent' }} className="flex flex-col px-6 overflow-y-auto gap-4">
                <AssetBlock/>
                <AssetBlock/>
                <AssetBlock/>
                <AssetBlock/>
            </div>
            <img className="absolute w-full h-[77px] pointer-events-none select-none bottom-0 rounded-[12px]"
                 src="/img/shadow.png" alt="shadow"/>
        </div>
    )
}