"use client"

import { useEffect, useRef, useState } from "react"

interface OrderTypePopupProps {
    isOpen: boolean
    onClose: () => void
    onSelectOrderType: (orderType: string) => void
    currentOrderType?: string
    triggerRef?: React.RefObject<HTMLDivElement>
}

const orderTypes = [
    { id: "limit", name: "Limit Order" },
    { id: "market", name: "Market Order" },
    { id: "stop-limit", name: "Stop Limit" },
    { id: "stop-market", name: "Stop Market Order" },
    { id: "trailing-stop", name: "Trailing Stop Order" },
]

export function OrderTypePopup({
                                   isOpen,
                                   onClose,
                                   onSelectOrderType,
                                   triggerRef,
                               }: OrderTypePopupProps) {
    const popupRef = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    // управление видимостью для плавной анимации
    useEffect(() => {
        if (isOpen) {
            setVisible(true)
        } else {
            const timeout = setTimeout(() => setVisible(false), 200)
            return () => clearTimeout(timeout)
        }
    }, [isOpen])

    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node
            if (
                popupRef.current &&
                !popupRef.current.contains(target) &&
                triggerRef?.current &&
                !triggerRef.current.contains(target)
            ) {
                onClose()
            }
        }

        if (visible) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [visible, onClose, triggerRef])

    const handleSelect = (orderType: { id: string; name: string }) => {
        onSelectOrderType(orderType.id)
        onClose()
    }

    if (!visible) return null

    return (
        <div
            ref={popupRef}
            className={`absolute z-[100] top-[120px] left-0 right-0 flex flex-col backdrop-blur-2xl buy-crypto-bg text-white font-semibold text-[14px] leading-6 border-[1px] border-[#D0DCFF8F] rounded-[20px] overflow-hidden
        transition-all duration-200 transform origin-top
        ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            style={{ height: "180px" }}
        >
            <div style={{ scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent' }} className="flex flex-col overflow-y-auto">
                {orderTypes.map((orderType) => (
                    <div
                        key={orderType.id}
                        onClick={() => handleSelect(orderType)}
                        className="flex items-center px-6 py-4 cursor-pointer hover:text-[#11CABE] hover:bg-[#1A1D2E] transition-colors"
                    >
                        <p className="font-semibold text-[16px] leading-6">{orderType.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
