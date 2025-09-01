import { CurrencyAdaptive } from "./currency-adaptive";

export function CurrencyBlock(){
    return (
        <div
            className="lg:flex hidden relative w-full rounded-[14px] border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]">
            <div
                className="lg:flex hidden items-center justify-between py-4 2xl:px-8 px-3 bg-[#070322] w-full rounded-[12px]">
                <div className="flex items-start 2xl:gap-4 gap-2">
                    <img className="2xl:w-[44px] xl:w-[32px] w-[24px] 2xl:h-[44px] xl:h-[32px] h-[24px]"
                         src="/img/btc-icon.svg" alt="btc"/>
                    <div className="flex flex-col gap-2">
                        <h5 className="2xl:text-[16px] xl:text-[14px] text-[12px] leading-6 font-bold text-[#CACACA]">Bitcoin</h5>
                        <h3 className="2xl:text-[20px] xl:text-[17px] text-[15px] text-white font-semibold leading-[27px]">BTC/USD</h3>
                    </div>
                    <img className="xl:w-[24px] w-[17px] xl:h-[24px] h-[17px] rotate-90" src="/img/arrow-right.svg"
                         alt="arrow"/>
                </div>
                <div className="w-[1px] bg-[#CACACA] h-full"/>
                <div className="flex items-center 2xl:gap-4 gap-2">
                    <div className="flex flex-col xl:px-4 px-2 gap-2">
                        <h5 className="2xl:text-[16px] xl:text-[14px] text-[12px] leading-6 font-bold text-[#CACACA]">24h
                            Change</h5>
                        <div className="flex gap-2">
                            <h3 className="2xl:text-[20px] xl:text-[17px] text-[15px] text-[#11CABE] font-semibold leading-[27px]">0.53%</h3>
                            <img className="rotate-180 w-[24px] h-[24px]" src="/img/arrow-green-down.svg" alt="arrow"/>
                        </div>
                    </div>
                    <img className="xl:flex hidden 2xl:w-[86px] w-[62px] h-[28px]" src="/img/bnb-chart.svg"
                         alt="chart"/>
                </div>
                <div className="w-[1px] bg-[#CACACA] h-full"/>
                <div className="flex flex-col xl:px-4 px-2 gap-2">
                    <h5 className="2xl:text-[16px] xl:text-[14px] text-[12px] leading-6 font-bold text-[#CACACA]">Last
                        Price</h5>
                    <h3 className="2xl:text-[20px] xl:text-[17px] text-[15px] text-white font-semibold leading-[27px]">18372.595198
                        USD</h3>
                </div>
                <div className="w-[1px] bg-[#CACACA] h-full"/>
                <div className="flex flex-col xl:px-4 px-2 gap-2">
                    <h5 className="2xl:text-[16px] xl:text-[14px] text-[12px] leading-6 font-bold text-[#CACACA]">24h
                        Low</h5>
                    <h3 className="2xl:text-[20px] xl:text-[17px] text-[15px] text-white font-semibold leading-[27px]">18372.595198
                        USD</h3>
                </div>
            </div>
            <CurrencyAdaptive/>
        </div>
    )
}