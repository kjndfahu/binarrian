export function FundBlock({styles}:{styles:string}){
    return (
        <div className={`absolute ${styles} flex flex-col lg:rounded-[8px] md:rounded-[4px] rounded-[2px] 2xl:p-[22px] lg:p-4 md:p-3 sm:p-2 p-[5px] bg-[#3C208C4D] 2xl:w-[315px] lg:w-[240px] md:w-[190px] sm:w-[140px] w-[80px]`} >
            <div className="flex items-start justify-between">
                <img className="2xl:w-10 lg:w-8 md:w-7 sm:w-5 w-3 2xl:h-10 lg:h-8 md:h-7 sm:h-5 h-3" src="/img/btc-icon.svg" alt="icon" />
                <div className="flex flex-col items-end">
                    <img className="2xl:w-[124px] lg:w-[90px] md:w-[70px] sm:w-[50px] w-[40px]" src="/img/btc-chart.png" alt="chart" />
                    <div className="flex items-center gap-1">
                        <img className="2xl:w-[18px] 2xl:h-[18px] xl:w-[14px] lg:w-[10px] md:w-[8px] w-[6px] xl:h-[14px] lg:h-[10px] md:h-[8px] h-[6px] rotate-180" src="/img/arrow-green-down.svg" alt=""/>
                        <h6 className="2xl:text-[14px] lg:text-[13px] md:text-[10px] sm:text-[7px] text-[4px] 2xl:leading-[22px] lg:leading-[18px] md:leading-[14px] sm:leading-[10px] leading-[6px] font-semibold text-[#11CABE]">2.36%</h6>
                    </div>
                </div>
            </div>
            <div className="flex items-end justify-between">
                <div className="flex flex-col lg:gap-2.5 md:gap-1.5 sm:gap-[3px] gap-[1px]">
                    <p className="2xl:text-[15px] lg:text-[14px] md:text-[10px] sm:text-[6px] text-[4px] text-[#A5ADCF] 2xl:leading-[18px] lg:leading-[16px] md:leading-[12px] sm:leading-[7px] leading-[5px]">Bitcoin</p>
                    <h5 className="2xl:text-[23px] lg:text-[19px] md:text-[13px] sm:text-[10px] text-[6px] 2xl:leading-6 lg:leading-5 md:leading-[15px] sm:leading-3 leading-2 font-semibold text-white">USD 53,260.20</h5>
                </div>
                <p className="2xl:text-[14px] lg:text-[13px] md:text-[10px] sm:text-[7px] text-[4px] 2xl:leading-[22px] lg:leading-[18px] md:leading-[14px] sm:leading-[10px] leading-[6px] text-[#5D6588] ">BTC</p>
            </div>
        </div>
    )
}