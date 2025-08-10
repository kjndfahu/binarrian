export function Block(){
    return(
        <div className="flex flex-col w-[300px] gap-4 rounded-[12px] buy-crypto-bg border-[1px] border-[#D0DCFF8F] px-6 pt-6 pb-[11px]">
            <div className="flex items-center gap-4">
                <img className="w-[22px] h-[22px]" src="/img/btc-icon.svg" alt="icon"/>
                <h5 className="text-[18px] text-white leading-[27px]">Total balance</h5>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-[25px] font-semibold text-white leading-[27px]">0.3454364</h3>
                <p className="text-[16px] leading-6 text-[#A5ADCF]">2,345.21 USD</p>
            </div>
        </div>
    )
}