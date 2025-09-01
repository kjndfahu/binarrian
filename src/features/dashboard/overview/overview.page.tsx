import {BalanceBlock} from "@/features/dashboard/overview/balance-block.tsx";
import {TopAssetsSection} from "@/features/dashboard/overview/top-assets-section.tsx";
import {TransactionSection} from "@/features/dashboard/overview/transaction-section.tsx";
import {OverallGrowth} from "@/features/dashboard/overview/overall-growth.tsx";

export function OverviewPage() {
    return (
        <div className="flex h-full pb-8 overflow-y-hidden px-4 gap-4 flex-col lg:flex-row lg:px-8 lg:gap-[27px]">
            <BalanceBlock/>
            <div className="flex flex-1 flex-col h-full gap-4 lg:gap-6 ">
                <OverallGrowth/>
                <div className="flex flex-col  gap-4 lg:flex-row lg:gap-[26px]">
                    <TopAssetsSection/>
                    <TransactionSection/>
                </div>
            </div>
        </div>
    )
}

export default OverviewPage;