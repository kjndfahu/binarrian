export function BuyBlock(){
	return (
		<div
			className="relative lg:w-[320px] w-full rounded-[14px] border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]">
			<div className="flex flex-col gap-6 p-6 rounded-[12px] bg-[#070322]  w-full">
				<div className="flex items-center justify-between">
					<h3 className="text-[20px] font-bold text-white leading-[24px]">Bitcoin</h3>
					<img className="w-[32px] h-[32px]" src="/img/btc-icon.svg" alt="icon"/>
				</div>
				<div className="flex flex-col gap-[17px]">
					<div className="flex flex-col gap-2">
						<h5 className="text-[16px] font-bold text-[#CACACA] leading-6">Limit price</h5>
						<div className="flex items-center justify-between border-b-[1px] border-[#34384C] py-4">
							<input
								className="text-[18px] outline-0 ring-0 text-white placeholder:text-white leading-[27px] font-bold"
								placeholder="4,000"
								type="text"/>
							<h5 className="text-[18px] text-white font-semibold leading-[26px]">USDT</h5>
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<h5 className="text-[16px] font-bold text-[#CACACA] leading-6">Amount</h5>
						<div className="flex items-center justify-between border-b-[1px] border-[#34384C] py-4">
							<input
								className="text-[18px] outline-0 ring-0 text-white placeholder:text-white leading-[27px] font-bold"
								placeholder="0,020"
								type="text"/>
							<h5 className="text-[18px] text-white font-semibold leading-[26px]">BTC</h5>
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<h5 className="text-[16px] font-bold text-[#CACACA] leading-6">Order Type</h5>
						<div
							className="flex items-center justify-between px-8 py-4 rounded-full border-[1px] border-[#D0DCFF8F] py-4 px-8 indice-bg">
							<h4 className="text-[18px] text-white font-bold leading-[27px]">Stop Limit</h4>
							<img className="rotate-90" src="/img/arrow-right.svg" alt="arrow"/>
						</div>
					</div>
				</div>
				<div className="flex w-full items-center justify-between gap-4 mt-8">
					<button
						className="text-[16px] w-full h-[58px] rounded-full cursor-pointer text-[#11CABE] leading-[20px] font-semibold border-[1px] border-[#11CABE]">
						Buy
					</button>
					<button
						className="text-[16px] w-full h-[58px] rounded-full cursor-pointer text-[#FA2256] leading-[20px] font-semibold border-[1px] border-[#FA2256]">
						Sell
					</button>
				</div>
			</div>
		</div>
	)
}