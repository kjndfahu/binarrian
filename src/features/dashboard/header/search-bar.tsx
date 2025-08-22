"use client"

import {useState} from "react";
import {NotificationBlock} from "@/features/dashboard/header/notification-block.tsx";

export function SearchBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex items-center md:gap-6 gap-4">
            <div className="md:flex hidden rounded-full py-2 px-6 faq-bg">
                <input placeholder="Search"
                       className="text-[16px] leading-6 outline-0 ring-0 placeholder:text-white text-white"
                       type="text"/>
                <img src="/img/search-logo.svg" alt="search"/>
            </div>
            <img className="md:hidden flex cursor-pointer" src="/img/search-logo.svg" alt="search"/>
            <div className="flex items-center justify-center relative w-[25px] h-[25px]">
                <img onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" src="/img/bell.svg" alt="bell"/>
                <div className="absolute top-[1px] right-[3px] w-[8px] h-[8px] rounded-full bg-[#8547F6]"></div>
            </div>
            {isOpen && (
                <NotificationBlock/>
            )}
        </div>
    )
}