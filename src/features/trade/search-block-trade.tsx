import { SearchBlock } from "./search-block";

export function SearchBlockTrade() {
    return (
        <div className="flex flex-col relative max-h-[446px] gap-[15px] rounded-[12px] border-[1px] border-[#D0DCFF8F] p-5 lg:w-[320px] w-full">
            <div className="flex items-center justify-between rounded-full border-[2.48px] p-[15px] border-white">
                <input placeholder="Search coin" className="text-[15px] outline-0 ring-0 leading-6 placeholder:text-[#CACACA] text-white" type="text"/>
                <img src="/img/search-logo.svg" alt="search"/>
            </div>
            <div className="flex items-center justify-between gap-4">
                <div className="flex w-[45%] cursor-pointer items-center font-semibold text-[15px] leading-6 text-[#777E90] gap-[5px]">
                    Pair
                    <img src="/img/filter.svg" alt="filter"/>
                </div>
                <div className="flex w-[30%] cursor-pointer items-center font-semibold text-[15px] leading-6 text-[#777E90] gap-[5px]">
                        Price
                        <img src="/img/filter.svg" alt="filter"/>
                </div>
                <div className="flex w-[25%] cursor-pointer items-center font-semibold text-[15px] leading-6 text-[#777E90] gap-[5px]">
                        Volume
                        <img src="/img/filter.svg" alt="filter"/>
                </div>
            </div>
            <div style={{ scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent' }} className="flex flex-col overflow-y-auto gap-2 pt-[15px]">
                <SearchBlock/>
                <SearchBlock/>
                <SearchBlock/>
                <SearchBlock/>
                <SearchBlock/>
                <SearchBlock/>
                <SearchBlock/>
                <SearchBlock/>
                <SearchBlock/>
                <SearchBlock/>
                <SearchBlock/>
                <SearchBlock/>
                <SearchBlock/>
                <SearchBlock/>
                <SearchBlock/>
                <SearchBlock/>
                <SearchBlock/>
                <SearchBlock/>
                <SearchBlock/>
                <SearchBlock/>
            </div>

            <img className="absolute w-full left-0 h-[77px] pointer-events-none select-none bottom-0 rounded-[12px]"
                 src="/img/shadow.png" alt="shadow"/>
        </div>
    )
}