export function SearchBlockTrade() {
    return (
        <div className="flex flex-col gap-[15px] p-5 w-[320px]">
            <div className="flex items-center justify-between rounded-full border-[2.48px] p-[15px] border-white">
                <input placeholder="Search coin" className="text-[15px] leading-6 placeholder:text-[#CACACA] text-white" type="text"/>
                <img src="/img/search-logo.svg" alt="search"/>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center font-semibold text-[15px] leading-6 text-[#777E90] gap-[5px]">
                    Pair
                    <img src="/img/filter.svg" alt="filter"/>
                </div>
                <div className="flex items-center gap-[15px]">
                    <div className="flex items-center font-semibold text-[15px] leading-6 text-[#777E90] gap-[5px]">
                        Pair
                        <img src="/img/filter.svg" alt="filter"/>
                    </div>
                    <div className="flex items-center font-semibold text-[15px] leading-6 text-[#777E90] gap-[5px]">
                        Pair
                        <img src="/img/filter.svg" alt="filter"/>
                    </div>
                </div>
            </div>
        </div>
    )
}