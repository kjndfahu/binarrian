export function IncomeExpress(){
    return (
        <div className="flex md:pb-0 pb-6 md:border-none border-b-[1px] border-[#CACACA] mt-2 w-full justify-between">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-[24px] h-[24px] rounded-full faq-bg">
                        <img src="/img/arrow-green-down.svg" alt="arrow"/>
                    </div>
                    <p className="text-[16px] leading-6 text-[#EDEDED]">Income</p>
                </div>
                <h4 className="text-[20px] font-semibold text-white leading-[27px]">USD 12.243,55</h4>
            </div>
            <div className="md:hidden flex w-[1px] h-[67px] bg-white"></div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-[24px] h-[24px] rounded-full faq-bg">
                        <img src="/img/red-arrow-up.svg" alt="arrow"/>
                    </div>
                    <p className="text-[16px] leading-6 text-[#EDEDED]">Expenses</p>
                </div>
                <h4 className="text-[20px] font-semibold text-white leading-[27px]">USD 3.132,23</h4>
            </div>
        </div>
    )
}