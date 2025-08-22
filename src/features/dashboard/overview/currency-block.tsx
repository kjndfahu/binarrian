export function CurrencyBlock(){
    return (
        <div className="flex items-start justify-between">
            <div className="flex gap-2">
                <img className="w-5 h-5" src="/img/btc-icon.svg" alt="icon"/>
                <div className="flex flex-col text-[16px] leading-6 text-white font-semibold">
                    <h5>BTC</h5>
                    <p className="font-normal text-[#CACACA]">Bitcoin</p>
                </div>
            </div>
            <div className="flex items-center gap-1">
                <img className="rotate-180" src="/img/arrow-green-down.svg" alt=""/>
                <h6 className="text-[14px] leading-[22px] font-semibold text-[#11CABE]">2.36%</h6>
            </div>
        </div>
    )
}