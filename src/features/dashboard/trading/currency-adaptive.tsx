export function CurrencyAdaptive() {
    return (
        <div className="lg:hidden flex items-center gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide min-w-max">
            <div className="flex items-center w-[228px] h-[88px] gap-4 p-4 border-[1px] border-white rounded-[12px] flex-shrink-0">
                <img className="w-[28px] h-[28px]" src="/img/btc-icon.svg" alt="btc" />
                <div className="flex items-start w-full justify-between">
                    <div className="flex flex-col gap-2">
                        <h5 className="text-[14px] leading-6 font-bold text-[#CACACA]">Bitcoin</h5>
                        <h3 className="text-[18px] text-white font-semibold leading-[27px]">BTC/USD</h3>
                    </div>
                    <img className="xl:w-[24px] w-[17px] xl:h-[24px] h-[17px] rotate-90" src="/img/arrow-right.svg" alt="arrow" />
                </div>
            </div>

            <div className="flex items-center w-[228px] h-[88px] gap-4 p-4 border-[1px] border-white rounded-[12px] flex-shrink-0">
                <div className="flex flex-col gap-2">
                    <h5 className="text-[14px] leading-6 font-bold text-[#CACACA]">24h Change</h5>
                    <div className="flex gap-2">
                        <h3 className="text-[18px] text-[#11CABE] font-semibold leading-[27px]">0.53%</h3>
                        <img className="rotate-180 w-[24px] h-[24px]" src="/img/arrow-green-down.svg" alt="arrow" />
                    </div>
                </div>
                <img className="w-[86px] h-[28px]" src="/img/bnb-chart.svg" alt="chart" />
            </div>

            <div className="flex items-center w-[228px] h-[88px] gap-4 p-4 border-[1px] border-white rounded-[12px] flex-shrink-0">
                <div className="flex flex-col">
                    <h5 className="text-[14px] leading-6 font-bold text-[#CACACA]">Last Price</h5>
                    <h3 className="text-[18px] text-white font-semibold leading-[27px]">18372.595198 USD</h3>
                </div>
            </div>

            <div className="flex items-center w-[228px] h-[88px] gap-4 p-4 border-[1px] border-white rounded-[12px] flex-shrink-0">
                <div className="flex flex-col">
                    <h5 className="text-[14px] leading-6 font-bold text-[#CACACA]">24h Low</h5>
                    <h3 className="text-[18px] text-white font-semibold leading-[27px]">18372.595198 USD</h3>
                </div>
            </div>
        </div>
    );
}