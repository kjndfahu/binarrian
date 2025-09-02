"use client"

import { useState, useRef, useEffect } from "react"
import { OrderTypePopup } from "./order-type-popup"

export function BuyBlock() {
	const [isOrderTypePopupOpen, setIsOrderTypePopupOpen] = useState(false)
	const [selectedOrderType, setSelectedOrderType] = useState("stop-limit")
	const triggerRef = useRef<HTMLDivElement>(null)

	const orderTypeNames: Record<string, string> = {
		limit: "Limit Order",
		market: "Market Order",
		"stop-limit": "Stop Limit",
		"stop-market": "Stop Market Order",
		"trailing-stop": "Trailing Stop Order",
	}

	const handleOrderTypeSelect = (orderType: string) => {
		setSelectedOrderType(orderType)
	}

	const togglePopup = () => {
		setIsOrderTypePopupOpen((prev) => !prev)
	}

	const closePopup = () => {
		setIsOrderTypePopupOpen(false)
	}

	return (
		<div className="relative">
			<div className="relative lg:w-[320px] w-full rounded-[14px] border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]">
				<div className="flex flex-col gap-6 p-6 rounded-[12px] bg-[#070322] w-full">
					<div className="flex items-center justify-between">
						<h3 className="text-[20px] font-bold text-white leading-[24px]">Bitcoin</h3>
						<img className="w-[32px] h-[32px]" src="/img/btc-icon.svg" alt="icon" />
					</div>

					<div className="flex flex-col gap-[17px]">
						{/* Limit price */}
						<div className="flex flex-col gap-2">
							<h5 className="text-[16px] font-bold text-[#CACACA] leading-6">Limit price</h5>
							<div className="flex items-center justify-between border-b-[1px] border-[#34384C] py-4">
								<input
									className="text-[18px] outline-0 ring-0 text-white placeholder:text-white leading-[27px] font-bold"
									placeholder="4,000"
									type="text"
								/>
								<h5 className="text-[18px] text-white font-semibold leading-[26px]">USDT</h5>
							</div>
						</div>

						{/* Amount */}
						<div className="flex flex-col gap-2">
							<h5 className="text-[16px] font-bold text-[#CACACA] leading-6">Amount</h5>
							<div className="flex items-center justify-between border-b-[1px] border-[#34384C] py-4">
								<input
									className="text-[18px] outline-0 ring-0 text-white placeholder:text-white leading-[27px] font-bold"
									placeholder="0,020"
									type="text"
								/>
								<h5 className="text-[18px] text-white font-semibold leading-[26px]">BTC</h5>
							</div>
						</div>

						{/* Order Type */}
						<div className="flex relative flex-col gap-4">
							<h5 className="text-[16px] font-bold text-[#CACACA] leading-6">Order Type</h5>
							<div
								ref={triggerRef}
								onClick={togglePopup}
								className="flex items-center justify-between px-8 py-4 rounded-full border-[1px] border-[#D0DCFF8F] indice-bg cursor-pointer hover:border-[#11CABE] transition-colors"
							>
								<h4 className="text-[18px] text-white font-bold leading-[27px]">
									{orderTypeNames[selectedOrderType]}
								</h4>
								<img
									className={`rotate-90 transition-transform ${isOrderTypePopupOpen ? "rotate-[-90deg]" : ""}`}
									src="/img/arrow-right.svg"
									alt="arrow"
								/>
							</div>

							<OrderTypePopup
								isOpen={isOrderTypePopupOpen}
								onClose={closePopup}
								onSelectOrderType={handleOrderTypeSelect}
								currentOrderType={selectedOrderType}
								triggerRef={triggerRef}
							/>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex w-full items-center justify-between gap-4 mt-8">
						<button className="text-[16px] w-full h-[58px] rounded-full cursor-pointer text-[#11CABE] leading-[20px] font-semibold border-[1px] border-[#11CABE]">
							Buy
						</button>
						<button className="text-[16px] w-full h-[58px] rounded-full cursor-pointer text-[#FA2256] leading-[20px] font-semibold border-[1px] border-[#FA2256]">
							Sell
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
