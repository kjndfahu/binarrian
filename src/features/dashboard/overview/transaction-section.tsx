import {TransBlock} from "@/features/dashboard/overview/trans-block.tsx";

export function TransactionSection(){
    return (
        <div className="flex flex-col relative gap-8 overflow-h-hidden h-[311px] rounded-[12px] border-[1px] border-white pt-6 pb-0 w-[45%]">
            <div className="flex items-center justify-between px-6  w-full">
                <h3 className="text-[20px]leading-[24px] text-white font-bold">Transaction</h3>
                <div
                    className="flex items-center justify-center cursor-pointer border-[1px] border-white rounded-full gap-2 py-2 px-4">
                    <h3 className="text-[16px] leading-[24px] text-white font-semibold">All</h3>
                    <img className="w-[14px] h-[14px] rotate-90" src="/img/arrow-right.svg" alt=""/>
                </div>
            </div>
            <div style={{ scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent' }} className="flex flex-col px-6 overflow-y-auto gap-4">
                <TransBlock/>
                <TransBlock/>
                <TransBlock/>
                <TransBlock/>
            </div>
            <img className="absolute w-full h-[77px] pointer-events-none select-none bottom-0 rounded-[12px]" src="/img/shadow.png" alt="shadow"/>
        </div>
    )
}