"use client"

import { useState, useRef, useCallback } from "react"
import { CurrencyPopup } from "@/features/dashboard/trading/currency-popup"

export function SwapSection() {
    type Currency = "BTC" | "ETH" | "USD" | "BNB"

    const [isGetPopupOpen, setIsGetPopupOpen] = useState(false)
    const [isPayPopupOpen, setIsPayPopupOpen] = useState(false)
    const [selectedGetOrderType, setSelectedGetOrderType] = useState("stop-limit")
    const [selectedPayOrderType, setSelectedPayOrderType] = useState("stop-limit")
    const [selectedGetCurrency, setSelectedGetCurrency] = useState<Currency>("USD")
    const [selectedPayCurrency, setSelectedPayCurrency] = useState<Currency>("BTC")

    const getTriggerRef = useRef<HTMLDivElement>(null)
    const payTriggerRef = useRef<HTMLDivElement>(null)

    const currencyIcons: Record<Currency, string> = {
        BTC: "/img/btc-icon.svg",
        ETH: "/img/eth-icon.svg",
        USD: "/img/coin-icon.svg",
        BNB: "/img/bnb-icon.svg",
    }

    const handleGetOrderTypeSelect = useCallback(
        (orderType: string, currency?: string) => {
            setSelectedGetOrderType(orderType)
            if (currency && currency in currencyIcons) setSelectedGetCurrency(currency as Currency)
            setIsGetPopupOpen(false)
        },
        [currencyIcons]
    )

    const handlePayOrderTypeSelect = useCallback(
        (orderType: string, currency?: string) => {
            setSelectedPayOrderType(orderType)
            if (currency && currency in currencyIcons) setSelectedPayCurrency(currency as Currency)
            setIsPayPopupOpen(false)
        },
        [currencyIcons]
    )

    const toggleGetPopup = () => {
        setIsGetPopupOpen((prev) => !prev)
        setIsPayPopupOpen(false)
    }

    const togglePayPopup = () => {
        setIsPayPopupOpen((prev) => !prev)
        setIsGetPopupOpen(false)
    }

    return (
        <div
            className="relative rounded-[14px] lg:w-[300px] w-full border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#D0DCFF8F transparent" }}
        >
            <div className="flex flex-col bg-[#070322] w-full rounded-[12px] gap-6 p-6">
                <h4 className="text-[18px] text-white font-medium leading-6">Swap coin</h4>

                {/* From Block */}
                <div className="flex flex-col gap-[9px]">
                    <p className="text-[14px] leading-[22px] text-[#5D6588]">From</p>
                    <div className="flex relative w-full pr-6 gap-[15px] border-b-[1px] border-[#34384C] py-[14px] items-center justify-between">
                        <input
                            placeholder="0.05"
                            type="number"
                            className="text-[17px] w-full outline-0 ring-0 placeholder:text-white text-white leading-[25px]"
                        />
                        <div
                            ref={getTriggerRef}
                            onClick={toggleGetPopup}
                            className="flex items-center cursor-pointer text-white gap-[7px]"
                        >
                            <img src={currencyIcons[selectedGetCurrency] || "/img/eth-icon.svg"} alt="icon" />
                            <h5 className="text-[16px] leading-[27px] font-semibold">0.1</h5>
                            <h5 className="text-[16px] leading-[27px] font-semibold">{selectedGetCurrency}</h5>
                            <img className="rotate-90" src="/img/arrow-right.svg" alt="icon" />

                            <CurrencyPopup
                                isOpen={isGetPopupOpen}
                                onClose={() => setIsGetPopupOpen(false)}
                                onSelectOrderType={handleGetOrderTypeSelect}
                                currentOrderType={selectedGetOrderType}
                                currentCurrency={selectedGetCurrency}
                                triggerRef={getTriggerRef}
                            />
                        </div>
                    </div>
                </div>

                {/* To Block */}
                <div className="flex flex-col gap-[9px]">
                    <p className="text-[14px] leading-[22px] text-[#5D6588]">To</p>
                    <div className="flex relative w-full pr-6 gap-[15px] border-b-[1px] border-[#34384C] py-[14px] items-center justify-between">
                        <input
                            placeholder="0.05"
                            type="number"
                            className="text-[17px] w-full outline-0 ring-0 placeholder:text-white text-white leading-[25px]"
                        />
                        <div
                            ref={payTriggerRef}
                            onClick={togglePayPopup}
                            className="flex items-center cursor-pointer text-white gap-[7px]"
                        >
                            <img src={currencyIcons[selectedPayCurrency] || "/img/btc-icon.svg"} alt="icon" />
                            <h5 className="text-[16px] leading-[27px] font-semibold">0.1</h5>
                            <h5 className="text-[16px] leading-[27px] font-semibold">{selectedPayCurrency}</h5>
                            <img className="rotate-90" src="/img/arrow-right.svg" alt="icon" />

                            <CurrencyPopup
                                isOpen={isPayPopupOpen}
                                onClose={() => setIsPayPopupOpen(false)}
                                onSelectOrderType={handlePayOrderTypeSelect}
                                currentOrderType={selectedPayOrderType}
                                currentCurrency={selectedPayCurrency}
                                triggerRef={payTriggerRef}
                            />
                        </div>
                    </div>
                </div>

                <button className="text-[14px] w-full h-[47px] mt-[4px] font-semibold cursor-pointer rounded-full text-white py-3 px-[18px] visit-btn">
                    Swap
                </button>
            </div>
        </div>
    )
}
