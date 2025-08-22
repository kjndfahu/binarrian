export function Block(){
    return (
        <div
            style={{scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent'}}
            className="relative rounded-[14px] overflow-x-auto lg:overflow-x-hidden border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]"
        >
            <div
                className="flex flex-col bg-[#070322] lg:w-[300px] w-full gap-4 rounded-[12px] px-6 pt-6 pb-[11px]">
                <div className="flex items-center gap-4">
                    <img className="w-[22px] h-[22px]" src="/img/btc-icon.svg" alt="icon"/>
                    <h5 className="text-[18px] text-white leading-[27px]">Total balance</h5>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-[25px] font-semibold text-white leading-[27px]">0.3454364</h3>
                    <p className="text-[16px] leading-6 text-[#A5ADCF]">2,345.21 USD</p>
                </div>
            </div>
        </div>

    )
}