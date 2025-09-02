"use client"

import { useState, useRef } from "react"
import { CurrencyPopup } from "@/features/dashboard/trading/currency-popup.tsx"

export function ExchangeBlock() {
    const [isGetPopupOpen, setIsGetPopupOpen] = useState(false)
    const [isPayPopupOpen, setIsPayPopupOpen] = useState(false)
    const [selectedGetOrderType, setSelectedGetOrderType] = useState("stop-limit")
    const [selectedPayOrderType, setSelectedPayOrderType] = useState("stop-limit")
    const [selectedGetCurrency, setSelectedGetCurrency] = useState("USD")
    const [selectedPayCurrency, setSelectedPayCurrency] = useState("BTC")

    const getBlockRef = useRef<HTMLDivElement>(null)
    const payBlockRef = useRef<HTMLDivElement>(null)

    const currencyIcons: Record<string, string> = {
        BTC: "/img/btc-icon.svg",
        ETH: "/img/eth-icon.svg",
        USD: "/img/coin-icon.svg",
        BNB: "/img/bnb-icon.svg",
    }

    const handleGetOrderTypeSelect = (orderType: string, currency?: string) => {
        setSelectedGetOrderType(orderType)
        if (currency && currencyIcons[currency]) setSelectedGetCurrency(currency)
    }

    const handlePayOrderTypeSelect = (orderType: string, currency?: string) => {
        setSelectedPayOrderType(orderType)
        if (currency && currencyIcons[currency]) setSelectedPayCurrency(currency)
    }

    const toggleGetPopup = () => {
        setIsGetPopupOpen((prev) => !prev)
        setIsPayPopupOpen(false)
    }

    const togglePayPopup = () => {
        setIsPayPopupOpen((prev) => !prev)
        setIsGetPopupOpen(false)
    }

    return (
        <div className="flex flex-col lg:pt-0 pt-6 gap-6">
            <div className="flex items-center justify-between">
                <h4 className="text-[20px] leading-6 font-bold text-white">Exchange</h4>
                <img src="/img/exchange.svg" alt="exchange" />
            </div>

            <div className="flex flex-col gap-4">
                {/* GET block */}
                <div className="flex relative border-b-[1px] border-[#34384C] py-[14px]">
                    <input
                        placeholder="100"
                        className="text-[18px] w-full leading-[27px] flex-1 outline-0 ring-0 placeholder:text-white text-white"
                        type="text"
                    />
                    <div
                        ref={getBlockRef}
                        onClick={toggleGetPopup}
                        className="flex items-center cursor-pointer gap-4 border-l-[1px] border-[#34384C] pl-4"
                    >
                        <img
                            className="w-6 h-6"
                            src={currencyIcons[selectedGetCurrency] || "/img/eth-icon.svg"}
                            alt="icon"
                        />
                        <h5 className="text-[18px] text-white leading-[26px] font-semibold">
                            {selectedGetCurrency}
                        </h5>
                        <img
                            className="rotate-90 w-5 h-5"
                            src="/img/arrow-right.svg"
                            alt="arrow"
                        />
                    </div>
                    <CurrencyPopup
                        isOpen={isGetPopupOpen}
                        onClose={() => setIsGetPopupOpen(false)}
                        onSelectOrderType={handleGetOrderTypeSelect}
                        currentOrderType={selectedGetOrderType}
                        currentCurrency={selectedGetCurrency}
                        triggerRef={getBlockRef}
                    />
                </div>

                {/* PAY block */}
                <div className="flex relative border-b-[1px] border-[#34384C] py-[14px]">
                    <input
                        placeholder="0.074153"
                        className="text-[18px] w-full leading-[27px] flex-1 outline-0 ring-0 placeholder:text-white text-white"
                        type="text"
                    />
                    <div
                        ref={payBlockRef}
                        onClick={togglePayPopup}
                        className="flex items-center cursor-pointer gap-4 border-l-[1px] border-[#34384C] pl-4"
                    >
                        <img
                            className="w-6 h-6"
                            src={currencyIcons[selectedPayCurrency] || "/img/btc-icon.svg"}
                            alt="icon"
                        />
                        <h5 className="text-[18px] text-white leading-[26px] font-semibold">
                            {selectedPayCurrency}
                        </h5>
                        <img
                            className="rotate-90 w-5 h-5"
                            src="/img/arrow-right.svg"
                            alt="arrow"
                        />
                    </div>
                    <CurrencyPopup
                        isOpen={isPayPopupOpen}
                        onClose={() => setIsPayPopupOpen(false)}
                        onSelectOrderType={handlePayOrderTypeSelect}
                        currentOrderType={selectedPayOrderType}
                        currentCurrency={selectedPayCurrency}
                        triggerRef={payBlockRef}
                    />
                </div>
            </div>

            <button className="text-[14px] w-full h-[47px] mt-[4px] font-semibold cursor-pointer rounded-full text-white py-3 px-[18px] visit-btn">
                Exchange
            </button>
        </div>
    )
}
