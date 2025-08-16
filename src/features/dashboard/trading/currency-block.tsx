export function CurrencyBlock(){
    return (
        <div className="flex items-center justify-between w-full rounded-[12px] py-4 px-8 border-[1px] border-[#D0DCFF8F]">
            <div className="flex items-start gap-4">
                <img className="w-[44px] h-[44px]" src="/img/btc-icon.svg" alt="btc"/>
                <div className="flex flex-col gap-2">
                    <h5 className="text-[16px] leading-6 font-bold text-[#CACACA]">Bitcoin</h5>
                    <h3 className="text-[20px] text-white font-semibold leading-[27px]">BTC/USD</h3>
                </div>
                <img className="w-[24px] h-[24px] rotate-90" src="/img/arrow-right.svg" alt="arrow"/>
            </div>
            <div className="w-[1px] bg-[#CACACA] h-full"/>
            <div className="flex items-center gap-4">
                <div className="flex flex-col gap-2">
                    <h5 className="text-[16px] leading-6 font-bold text-[#CACACA]">24h Change</h5>
                    <div className="flex gap-2">
                        <h3 className="text-[20px] text-[#11CABE] font-semibold leading-[27px]">0.53%</h3>
                        <img className="rotate-180 w-[24px] h-[24px]" src="/img/arrow-green-down.svg" alt="arrow"/>
                    </div>
                </div>
                <img className="w-[86px] h-[28px]" src="/img/bnb-chart.svg" alt="chart"/>
            </div>
            <div className="w-[1px] bg-[#CACACA] h-full"/>
            <div className="flex flex-col gap-2">
                <h5 className="text-[16px] leading-6 font-bold text-[#CACACA]">Last Price</h5>
                <h3 className="text-[20px] text-white font-semibold leading-[27px]">18372.595198 USD</h3>
            </div>
            <div className="w-[1px] bg-[#CACACA] h-full"/>
            <div className="flex flex-col gap-2">
                <h5 className="text-[16px] leading-6 font-bold text-[#CACACA]">24h Low</h5>
                <h3 className="text-[20px] text-white font-semibold leading-[27px]">18372.595198 USD</h3>
            </div>
        </div>
    )
}