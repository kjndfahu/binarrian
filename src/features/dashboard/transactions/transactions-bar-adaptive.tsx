"use client"

import { Popup } from "@/shared/ui/popup"
import { useState } from "react"

export function TransactionsBarAdaptive() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="lg:hidden flex relative">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex items-center justify-between w-[71px] cursor-pointer text-[14px] text-white leading-[22px] font-semibold px-4 py-2 rounded-full border-[1px] border-white">
                All
                <img className="w-[14px] h-[14px] rotate-90" src="/img/arrow-right.svg" alt=""/>
            </div>
            {isOpen && (
                <Popup styles="top-[50px] right-[0px]" items={["All", "Deposit", "Withdraw"]}/>
            )}
        </div>
    )
}