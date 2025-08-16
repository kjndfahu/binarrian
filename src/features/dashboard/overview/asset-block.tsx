export function AssetBlock(){
    return (
        <div className="flex items-center justify-between">
            <div className="flex gap-4">
                <img className="w-[24px] h-[24px]" src="/img/btc-icon.svg" alt="btc"/>
                <div className="flex flex-col gap-1">
                    <h5 className="text-[16px] font-semibold leading-6 text-white">USD 53,260.20 </h5>
                    <p className="text-[16px] leading-6 text-[#CACACA]">Bitcoin</p>
                </div>
            </div>
            <div className="flex flex-col items-end gap-1.5">
                <img className="w-[86px] h-[24px]" src="/img/bnb-chart.svg" alt="chart"/>
                <div className="flex items-center gap-1">
                    <img className="rotate-180" src="/img/red-arrow-up.svg" alt="chart"/>
                    <p className="text-[14px] leading-[22px] text-right text-[#FA2256]">1.80%</p>
                </div>
            </div>
        </div>
    )
}