"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { NotificationBlock } from "@/features/dashboard/header/notification-block.tsx";

export function SearchBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isInputFocused, setIsInputFocused] = useState(false);

    return (
        <div className="flex justify-end w-full items-center md:gap-6 gap-4">
            <motion.div
                className="md:flex items-center justify-between hidden rounded-full py-2 px-6 faq-bg"
                animate={{ flex: isInputFocused ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <input
                    placeholder="Search"
                    className="text-[16px] leading-6 outline-0 ring-0 placeholder:text-white text-white"
                    type="text"
                    onFocus={() => setIsInputFocused(true)}
                    onBlur={() => setIsInputFocused(false)}
                />
                <img src="/img/search-logo.svg" alt="search" />
            </motion.div>
            <img className="md:hidden flex cursor-pointer" src="/img/search-logo.svg" alt="search" />
            <div className="flex items-center justify-center relative w-[25px] h-[25px]">
                <img
                    onClick={() => setIsOpen(!isOpen)}
                    className="cursor-pointer"
                    src="/img/bell.svg"
                    alt="bell"
                />
                <div className="absolute top-[1px] right-[3px] w-[8px] h-[8px] rounded-full bg-[#8547F6]"></div>
            </div>
            {isOpen && <NotificationBlock />}
        </div>
    );
}