"use client"

import {useState, useEffect, useRef} from "react";
import { motion } from "framer-motion";

interface SearchBarProps {
    isNotificationOpen: boolean;
    setIsNotificationOpen: (isOpen: boolean) => void;
    notificationRef: React.RefObject<HTMLDivElement>;
}

export function SearchBar({ isNotificationOpen, setIsNotificationOpen, notificationRef }: SearchBarProps) {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const bellRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target as Node) &&
                bellRef.current &&
                !bellRef.current.contains(event.target as Node)
            ) {
                setIsNotificationOpen(false);
            }
        };

        if (isNotificationOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isNotificationOpen, setIsNotificationOpen, notificationRef]);

    return (
        <div className="flex justify-end w-full items-center md:gap-6 gap-4">
            <motion.div
                className="md:flex items-center flex-1 justify-between hidden rounded-full py-2 px-6 faq-bg"
                animate={{flex: 1}}
                transition={{duration: 0.3, ease: "easeInOut"}}
            >
                <input
                    placeholder="Search"
                    className="text-[16px] w-full leading-6 outline-0 ring-0 placeholder:text-white text-white"
                    type="text"
                    onFocus={() => setIsInputFocused(true)}
                    onBlur={() => setIsInputFocused(false)}
                />
                <img src="/img/search-logo.svg" alt="search"/>
            </motion.div>
            <img className="md:hidden flex cursor-pointer" src="/img/search-logo.svg" alt="search"/>
            <div className="flex items-center justify-center relative w-[25px] h-[25px]">
                <img
                    ref={bellRef}
                    onClick={(event) => {
                        event.stopPropagation();
                        setIsNotificationOpen(!isNotificationOpen);
                    }}
                    className="cursor-pointer"
                    src="/img/bell.svg"
                    alt="bell"
                />
                <div className="absolute top-[1px] right-[3px] w-[8px] h-[8px] rounded-full bg-[#8547F6]"></div>
            </div>
        </div>
    );
}