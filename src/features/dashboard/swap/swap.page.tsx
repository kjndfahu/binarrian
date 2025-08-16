import {Block} from "@/shared/ui/block.tsx";
import {SwapSection} from "@/features/dashboard/swap/swap-section.tsx";
import {HistorySwap} from "@/features/dashboard/swap/history-swap.tsx";

export function SwapPage(){
    return (
        <div className="flex px-8 gap-6">
            <div className="flex flex-col gap-[21px]">
                <Block/>
                <SwapSection/>
            </div>
            <div className="flex flex-col w-full">
                <HistorySwap/>
            </div>
        </div>
    )
}

export default SwapPage;