"use client"

import { Popup } from "@/shared/ui/popup"
import { useState } from "react"

export function OvverralGrowthAdaptive() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="lg:hidden flex relative relative">
            <div onClick={() => setIsOpen(!isOpen)} className="xl:hidden flex items-center justify-center cursor-pointer border-[1px] border-white rounded-full gap-2 py-2 px-4">
                <h3 className="text-[16px] leading-[24px] text-white font-semibold">1 hour</h3>
                <img className="w-[14px] h-[14px] rotate-90" src="/img/arrow-right.svg" alt=""/>
            </div>
            {isOpen && (
                <Popup styles="top-[50px] right-[0px]" items={["1 hour", "1 day", "1 week"]}/>
            )}
        </div>
    )
}