import {BalanceBlock} from "@/features/dashboard/overview/balance-block.tsx";
import {TopAssetsSection} from "@/features/dashboard/overview/top-assets-section.tsx";
import {TransactionSection} from "@/features/dashboard/overview/transaction-section.tsx";
import {OverallGrowth} from "@/features/dashboard/overview/overall-growth.tsx";

export function OverviewPage() {
    return (
        <div className="flex px-8 gap-[27px] overflow-y-hidden h-full pb-8">
            <BalanceBlock/>
            <div className="flex flex-1 flex-col h-full gap-6 ">
                <OverallGrowth/>
                <div className="flex gap-[26px]">
                    <TopAssetsSection/>
                    <TransactionSection/>
                </div>
            </div>
        </div>
    )
}

export default OverviewPage;