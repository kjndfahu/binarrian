import {ExchangeBlock} from "@/features/dashboard/trading/exchange-block.tsx";
import {TradingGraph} from "@/features/dashboard/trading/trading-graph.tsx";
import {MarketTradesSection} from "@/features/dashboard/trading/market-trades-section.tsx";

export function TradePage() {
    return (
        <div className="flex flex-col relative gap-[100px]">
            <ExchangeBlock/>
            <TradingGraph/>
            <MarketTradesSection/>
        </div>
    );
}

export default TradePage;