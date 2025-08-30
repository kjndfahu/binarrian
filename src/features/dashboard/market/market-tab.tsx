"use client"

import { Popup } from "@/shared/ui/popup"
import { useState } from "react"

export function MarketTab() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="lg:hidden flex relative relative">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex items-center justify-between gap-2 cursor-pointer text-[14px] text-white leading-[22px] font-semibold px-4 py-2 rounded-full border-[1px] border-white">
                All Assets
                <img className="w-[14px] h-[14px] rotate-90" src="/img/arrow-right.svg" alt=""/>
            </div>
            {isOpen && (
                <Popup styles="top-[50px] right-[0px]" items={["All Assets", "Gainers", "Losers", "Tradeble"]}/>
            )}
        </div>
    )
}