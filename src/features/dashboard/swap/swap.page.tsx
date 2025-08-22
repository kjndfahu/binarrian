import { Block } from "@/shared/ui/block.tsx";
import { SwapSection } from "@/features/dashboard/swap/swap-section.tsx";
import { HistorySwap } from "@/features/dashboard/swap/history-swap.tsx";

export function SwapPage() {
    return (
        <div className="flex flex-col lg:flex-row lg:px-8 md:px-5 px-4 gap-6">
            <div className="flex flex-col gap-[21px] w-full lg:w-auto">
                <Block />
                <SwapSection />
            </div>
            <div className="flex flex-col w-full lg:w-full lg:pb-0 pb-6">
                <HistorySwap />
            </div>
        </div>
    );
}

export default SwapPage;