"use client"

import { useEffect, useRef, useState } from "react"

interface OrderTypePopupProps {
    isOpen: boolean
    onClose: () => void
    onSelectOrderType: (orderType: string, currency?: string) => void
    currentOrderType?: string
    currentCurrency?: string
    triggerRef?: React.RefObject<HTMLDivElement>
}

const orderTypes = [
    { id: "limit", name: "BTC", img: "/img/btc-icon.svg" },
    { id: "market", name: "ETH", img: "/img/eth-icon.svg" },
    { id: "stop-limit", name: "BNB", img: "/img/bnb-icon.svg" },
    { id: "stop-market", name: "USD", img: "/img/coin-icon.svg" },
    { id: "trailing-stop", name: "ETH", img: "/img/eth-icon.svg" },
]

export function CurrencyPopup({
                                  isOpen,
                                  onClose,
                                  onSelectOrderType,
                                  triggerRef,
                              }: OrderTypePopupProps) {
    const popupRef = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

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

    const handleSelect = (orderType: { id: string; name: string; img: string }) => {
        onSelectOrderType(orderType.id, orderType.name)
        onClose()
    }

    if (!visible) return null

    return (
        <div
            ref={popupRef}
            className={`absolute z-[100] top-[80px] left-0 right-0 backdrop-blur-2xl flex flex-col text-white font-semibold text-[14px] leading-6 border-[1px] border-[#D0DCFF8F] rounded-[20px] buy-crypto-bg overflow-hidden
      transition-all duration-200 transform origin-top
      ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            style={{ height: "130px" }}
        >
            <div style={{ scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent' }} className="flex flex-col overflow-y-auto">
                {orderTypes.map((orderType) => (
                    <div
                        key={orderType.id}
                        onClick={() => handleSelect(orderType)}
                        className="flex items-center justify-between px-6 py-4 cursor-pointer hover:text-[#11CABE] hover:bg-[#1A1D2E] transition-colors"
                    >
                        <img src={orderType.img} alt={orderType.name} className="w-[24px] h-[24px]" />
                        <p className="font-semibold text-[16px] leading-6">{orderType.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
