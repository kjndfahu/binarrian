import {StackingBlock} from "@/features/dashboard/stacking/stacking-block.tsx";
import {StakeBlock} from "@/features/dashboard/stacking/stake-block.tsx";
import {StakingTable} from "@/features/dashboard/stacking/stacking-table.tsx";

export function StackingPage() {
    return (
        <div className="flex flex-col gap-8 w-full px-10 gap-8">
            <div className="flex gap-6">
                <StackingBlock logo="/img/btc-icon.svg" title="BTC" number={0.3454364} exchRate="2,345.21 USD"/>
                <StackingBlock logo="/img/eth-icon.svg" title="ETH" number={0.2133214214} exchRate="3,230.98 USD"/>
                <StackingBlock logo="/img/usdt-icon.svg" title="USDT" number={0.3454364} exchRate="2,345.21 USD"/>
                <StackingBlock logo="/img/bnb-icon.svg" title="BNB" number={0.3476544} exchRate="5,545.89 USD"/>
            </div>
            <div className="flex items-start h-full gap-6">
                <StakeBlock/>
                <StakingTable/>
            </div>
        </div>
    )
}

export default StackingPage;