import {BalanceBlock} from "@/features/dashboard/overview/balance-block.tsx";
import {TopAssetsSection} from "@/features/dashboard/overview/top-assets-section.tsx";
import {TransactionSection} from "@/features/dashboard/overview/transaction-section.tsx";
import {OverallGrowth} from "@/features/dashboard/overview/overall-growth.tsx";

export function OverviewPage() {
    return (
        <div className="flex px-8 gap-5 h-[80%]">
            <BalanceBlock/>
            <div className="flex flex-col gap-6 w-full">
                <OverallGrowth/>
                <div className="flex w-full gap-[26px]">
                    <TopAssetsSection/>
                    <TransactionSection/>
                </div>
            </div>
        </div>
    )
}

export default OverviewPage;