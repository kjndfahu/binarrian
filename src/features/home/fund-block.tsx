export function FundBlock({styles}:{styles:string}){
    return (
        <div className={`absolute ${styles} flex flex-col rounded-[8px] p-[22px] bg-[#3C208C4D] w-[315px]`} >
            <div className="flex items-start justify-between">
                <img src="/img/btc-icon.svg" alt="icon" />
                <div className="flex flex-col items-end">
                    <img className="w-[124px]" src="/img/btc-chart.png" alt="chart" />
                    <div className="flex items-center gap-1">
                        <img className="rotate-180" src="/img/arrow-green-down.svg" alt=""/>
                        <h6 className="text-[14px] leading-[22px] font-semibold text-[#11CABE]">2.36%</h6>
                    </div>
                </div>
            </div>
            <div className="flex items-end justify-between">
                <div className="flex flex-col gap-2.5">
                    <p className="text-[15px] text-[#A5ADCF] leading-[18px]">Bitcoin</p>
                    <h5 className="text-[23px] leading-6 font-semibold text-white">USD 53,260.20</h5>
                </div>
                <p className="text-[15px] text-[#5D6588] leading-[18px]">Bitcoin</p>
            </div>
        </div>
    )
}