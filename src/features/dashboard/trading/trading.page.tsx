import {BuyBlock} from "@/features/dashboard/trading/buy-block.tsx";
import {ExchangeBlock} from "@/features/dashboard/trading/exchange-block.tsx";
import {CurrencyBlock} from "@/features/dashboard/trading/currency-block.tsx";
import {MarketTradesSection} from "@/features/dashboard/trading/market-trades-section.tsx";
import {TradingGraph} from "@/features/dashboard/trading/trading-graph.tsx";

export function TradingPage() {
    return (
        <div className="flex px-8 gap-5 h-full min-h-screen max-h-screen">
            <div className="flex flex-col h-full gap-6">
                <BuyBlock/>
                <ExchangeBlock/>
            </div>
            <div className="flex flex-col w-full gap-[25px]">
                <CurrencyBlock/>
                <TradingGraph/>
                <MarketTradesSection/>
            </div>
        </div>
    )
}

export default TradingPage;