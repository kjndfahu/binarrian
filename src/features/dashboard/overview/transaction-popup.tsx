"use client"

import { Popup } from "@/shared/ui/popup"
import { useState } from "react"

export function TransactionPopup(){
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className="relative">
            <div onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center cursor-pointer border-[1px] border-white rounded-full gap-2 py-2 px-4">
                <h3 className="lg:text-[16px] text-[14px] leading-[24px] text-white font-semibold">All</h3>
                <img className="w-[14px] h-[14px] rotate-90" src="/img/arrow-right.svg" alt=""/>
            </div>
            {isOpen && (
                <Popup styles="top-[50px] right-[0px]" items={["All", "Deposit", "Withdraw"]}/>
            )}
        </div>
    )
}