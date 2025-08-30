export function ExchangeBlock(){
	return (
		<div className="flex flex-col gap-6 p-6 rounded-[12px] border-[1px] border-[#D0DCFF8F] lg:w-[320px] w-full">
			<div className="flex items-center justify-between">
				<h3 className="text-[20px] font-bold text-white leading-[24px]">Exchange</h3>
				<img className="w-[24px] h-[24px]" src="/img/exchange.svg" alt="icon"/>
			</div>
			<div className="flex items-center gap-4 lg:justify-between justify-start">
				<div className="flex items-center gap-2.5">
					<h4 className="text-[20px] text-white font-semibold leading-[27px]">1</h4>
					<h5 className="text-[16px] text-[#CACACA] font-bold leading-[24px]">BTC</h5>
				</div>
				<img className="w-[24px] h-[24px]" src="/img/arrow-line.svg" alt="arrow"/>
				<div className="flex items-center gap-4">
					<h4 className="text-[20px] text-white font-semibold leading-[27px]">53,260.20</h4>
					<h5 className="text-[16px] text-[#CACACA] font-bold leading-[24px]">USD</h5>
				</div>
			</div>
			<div className="flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<h5 className="text-[16px] font-bold text-[#CACACA] leading-6">Get</h5>
					<div
						className="flex items-center justify-between px-8 py-4 rounded-full border-[1px] border-[#D0DCFF8F] py-4 px-8 indice-bg">
						<input placeholder="5000"
							   className="text-[18px] w-[70%] outline-0 ring-0 placeholder:text-white text-white font-bold leading-[27px]"/>
						<div className="flex border-l-[1px] cursor-pointer border-[#34384C] px-4 items-center gap-2">
							<img className="w-[24px] h-[24px]" src="/img/coin-icon.svg" alt="coin"/>
							<img className="w-[20px] h-[20px] rotate-90" src="/img/arrow-right.svg" alt="arrow"/>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<h5 className="text-[16px] font-bold text-[#CACACA] leading-6">Pay</h5>
					<div
						className="flex items-center justify-between px-8 py-4 rounded-full border-[1px] border-[#D0DCFF8F] py-4 px-8 indice-bg">
						<input placeholder="5000"
							   className="text-[18px] w-[70%] outline-0 ring-0 placeholder:text-white text-white font-bold leading-[27px]"/>
						<div className="flex border-l-[1px] cursor-pointer border-[#34384C] px-4 items-center gap-2">
							<img className="w-[24px] h-[24px]" src="/img/btc-icon.svg" alt="coin"/>
							<img className="w-[20px] h-[20px] rotate-90" src="/img/arrow-right.svg" alt="arrow"/>
						</div>
					</div>
				</div>

			</div>
			<button
				className="text-[14px] mt-1 w-full h-[58px] mt-[4px] font-semibold cursor-pointer rounded-full text-white py-3 px-[18px] visit-btn">
				Exchange
			</button>
		</div>
	)
}