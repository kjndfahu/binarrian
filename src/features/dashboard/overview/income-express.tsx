export function IncomeExpress(){
    return (
        <div className="flex md:pb-0 pb-6 md:border-none border-b-[1px] border-[#CACACA] mt-2 w-full justify-between">
            <div className="flex flex-col lg:gap-4 gap-2">
                <div className="flex items-center lg:gap-4 gap-2">
                    <div className="flex items-center justify-center lg:w-[24px] w-5 lg:h-[24px] h-5 rounded-full faq-bg">
                        <img src="/img/arrow-green-down.svg" alt="arrow"/>
                    </div>
                    <p className="lg:text-[16px] text-[14px] leading-6 text-[#EDEDED]">Income</p>
                </div>
                <h4 className="lg:text-[20px] text-[18px] font-semibold text-white leading-[27px]">USD 12.243,55</h4>
            </div>
            <div className="md:hidden flex w-[1px] h-[67px] bg-white"></div>
            <div className="flex flex-col lg:gap-4 gap-2">
                <div className="flex items-center lg:gap-4 gap-2">
                    <div className="flex items-center justify-center lg:w-[24px] w-5 lg:h-[24px] h-5 rounded-full faq-bg">
                        <img src="/img/red-arrow-up.svg" alt="arrow"/>
                    </div>
                    <p className="lg:text-[16px] text-[14px] leading-6 text-[#EDEDED]">Expenses</p>
                </div>
                <h4 className="lg:text-[20px] text-[18px] font-semibold text-white leading-[27px]">USD 3.132,23</h4>
            </div>
        </div>
    )
}