import {TransBlock} from "@/features/dashboard/overview/trans-block.tsx";
import { TransactionPopup } from "./transaction-popup";

export function TransactionSection(){
    return (
        <div
            className="relative h-[311px] lg:w-[45%] w-full rounded-[14px] border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]">
            <div
                className="flex flex-col relative gap-8 overflow-h-hidden h-[311px] rounded-[12px] bg-[#070322] pt-6 pb-0">
                <div className="flex items-center justify-between px-6  w-full">
                    <h3 className="lg:text-[20px] text-[18px] leading-[24px] text-white font-bold">Transaction</h3>
                    <TransactionPopup/>
                </div>
                <div style={{scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent'}}
                     className="flex flex-col px-6 overflow-y-auto gap-4">
                    <TransBlock/>
                    <TransBlock/>
                    <TransBlock/>
                    <TransBlock/>
                </div>
                <img className="absolute w-full h-[77px] pointer-events-none select-none bottom-0 rounded-[12px]"
                     src="/img/shadow.png" alt="shadow"/>
            </div>
        </div>

    )
}