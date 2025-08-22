export function BuyBlock(){
	return (
		<div className="flex flex-col gap-[clamp(12px,2vh,20px)] p-[clamp(16px,2vh,24px)] pb-[clamp(12px,2vh,16px)] rounded-[12px] border-[1px] border-[#D0DCFF8F] w-[320px] flex-1 min-h-0 overflow-hidden">
			<div className="flex items-center justify-between">
				<h3 className="text-[clamp(16px,2.2vh,20px)] font-bold text-white leading-[24px]">Bitcoin</h3>
				<img className="w-[32px] h-[32px]" src="/img/btc-icon.svg" alt="icon"/>
			</div>
			<div className="flex flex-col gap-[clamp(10px,1.5vh,17px)]">
				<div className="flex flex-col gap-2">
					<h5 className="text-[16px] font-bold text-[#CACACA] leading-6">Limit price</h5>
					<div className="flex items-center justify-between border-b-[1px] border-[#34384C] py-4">
						<input className="text-[18px] outline-0 ring-0 text-white placeholder:text-white leading-[27px] font-bold"
							   placeholder="4,000"
							   type="text"/>
						<h5 className="text-[18px] text-white font-semibold leading-[26px]">USDT</h5>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<h5 className="text-[16px] font-bold text-[#CACACA] leading-6">Amount</h5>
					<div className="flex items-center justify-between border-b-[1px] border-[#34384C] py-4">
						<input className="text-[18px] outline-0 ring-0 text-white placeholder:text-white leading-[27px] font-bold"
							   placeholder="0,020"
							   type="text"/>
						<h5 className="text-[18px] text-white font-semibold leading-[26px]">BTC</h5>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<h5 className="text-[16px] font-bold text-[#CACACA] leading-6">Order Type</h5>
					<div className="flex items-center justify-between px-8 py-4 rounded-full border-[1px] border-[#D0DCFF8F] py-4 px-8 indice-bg">
						<h4 className="text-[18px] text-white font-bold leading-[27px]">Stop Limit</h4>
						<img className="rotate-90" src="/img/arrow-right.svg" alt="arrow"/>
					</div>
				</div>
			</div>
			<div className="flex w-full items-center justify-between gap-4 mt-8">
				<button
					className="text-[clamp(14px,2vh,16px)] w-full h-[clamp(44px,6vh,58px)] rounded-full cursor-pointer text-[#11CABE] leading-[20px] font-semibold border-[1px] border-[#11CABE] px-[clamp(16px,2vh,24px)]">
					Buy
				</button>
				<button
					className="text-[clamp(14px,2vh,16px)] w-full h-[clamp(44px,6vh,58px)] rounded-full text-[#FA2256] leading-[20px] font-semibold border-[1px] border-[#FA2256] px-[clamp(16px,2vh,24px)]">
					Sell
				</button>
			</div>
		</div>
	)
}