"use client"

import { Popup } from "@/shared/ui/popup"
import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function MarketTradesPopup() {
    const [isOpen, setIsOpen] = useState(false)
    const popupRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen])

    return (
        <div className="lg:hidden flex relative">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden flex items-center justify-center cursor-pointer border-[1px] border-white rounded-full gap-2 py-2 px-4"
            >
                <h3 className="text-[16px] leading-[24px] text-white font-semibold">Open Order</h3>
                <img className="w-[14px] h-[14px] rotate-90" src="/img/arrow-right.svg" alt="" />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={popupRef}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
            
                    >
                        <Popup styles="top-[50px] right-[0px]" items={["Open Orders", "Order History", "Order Book"]} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}