export function AssetBlock(){
    return (
        <div className="flex lg:items-center items-start justify-between">
            <div className="flex gap-4">
                <img className="w-[24px] h-[24px]" src="/img/btc-icon.svg" alt="btc"/>
                <div className="flex flex-col gap-1">
                    <h5 className="lg:text-[16px] text-[14px] font-semibold leading-6 text-white">USD 53,260.20 </h5>
                    <p className="tlg:text-[16px] text-[14px] leading-6 text-[#CACACA]">Bitcoin</p>
                </div>
            </div>
            <div className="flex flex-col items-end gap-1.5">
                <img className="lg:flex hidden w-[86px] h-[24px]" src="/img/bnb-chart.svg" alt="chart"/>
                <div className="flex items-center gap-1">
                    <img className=" rotate-180" src="/img/red-arrow-up.svg" alt="chart"/>
                    <p className="lg:text-[14px] text-[12px] leading-[22px] text-right text-[#FA2256]">1.80%</p>
                </div>
            </div>
        </div>
    )
}