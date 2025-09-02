"use client"

import { useState, useRef, useCallback } from "react"
import { CurrencyPopup } from "@/features/dashboard/trading/currency-popup"

export function ExchangeBlock() {
	type Currency = "BTC" | "ETH" | "USD"

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
	}

	const handleGetOrderTypeSelect = useCallback(
		(orderType: string, currency?: string) => {
			setSelectedGetOrderType(orderType)
			if (currency && currency in currencyIcons) {
				setSelectedGetCurrency(currency as Currency)
			}
			setIsGetPopupOpen(false)
		},
		[currencyIcons]
	)

	const handlePayOrderTypeSelect = useCallback(
		(orderType: string, currency?: string) => {
			setSelectedPayOrderType(orderType)
			if (currency && currency in currencyIcons) {
				setSelectedPayCurrency(currency as Currency)
			}
			setIsPayPopupOpen(false)
		},
		[currencyIcons]
	)

	const toggleGetPopup = () => setIsGetPopupOpen((prev) => !prev)
	const togglePayPopup = () => setIsPayPopupOpen((prev) => !prev)

	return (
		<div className="relative lg:w-[320px] w-full rounded-[14px] border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]">
			<div className="flex flex-col gap-6 p-6 rounded-[12px] bg-[#070322] w-full">
				<h3 className="text-[20px] font-bold text-white leading-[24px]">Exchange</h3>

				{/* Get Block */}
				<div className="flex relative flex-col gap-2">
					<h5 className="text-[16px] font-bold text-[#CACACA] leading-6">Get</h5>
					<div className="flex items-center justify-between px-8 py-4 rounded-full border-[1px] border-[#D0DCFF8F] indice-bg">
						<input
							placeholder="5000"
							className="text-[18px] w-[70%] outline-0 ring-0 placeholder:text-white text-white font-bold leading-[27px]"
						/>
						<div
							ref={getTriggerRef}
							onClick={toggleGetPopup}
							className="flex border-l-[1px] cursor-pointer border-[#34384C] px-4 items-center gap-2"
						>
							<img className="w-[24px] h-[24px]" src={currencyIcons[selectedGetCurrency]} alt="coin" />
							<img className="w-[20px] h-[20px] rotate-90" src="/img/arrow-right.svg" alt="arrow" />

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

				{/* Pay Block */}
				<div className="flex relative flex-col gap-2">
					<h5 className="text-[16px] font-bold text-[#CACACA] leading-6">Pay</h5>
					<div className="flex items-center justify-between px-8 py-4 rounded-full border-[1px] border-[#D0DCFF8F] indice-bg">
						<input
							placeholder="5000"
							className="text-[18px] w-[70%] outline-0 ring-0 placeholder:text-white text-white font-bold leading-[27px]"
						/>
						<div
							ref={payTriggerRef}
							onClick={togglePayPopup}
							className="flex border-l-[1px] cursor-pointer border-[#34384C] px-4 items-center gap-2"
						>
							<img className="w-[24px] h-[24px]" src={currencyIcons[selectedPayCurrency]} alt="coin" />
							<img className="w-[20px] h-[20px] rotate-90" src="/img/arrow-right.svg" alt="arrow" />

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
			</div>
		</div>
	)
}
