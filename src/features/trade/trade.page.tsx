import {TradingGraph} from "@/features/dashboard/trading/trading-graph.tsx";
import {MarketTradesSection} from "@/features/dashboard/trading/market-trades-section.tsx";
import { SearchBlockTrade } from "./search-block-trade";
import { BuyBlock } from "../dashboard/trading/buy-block";

export function TradePage() {
    return (
        <div
            className="flex relative overflow-hidden lg:flex-row flex-col-reverse h-full gap-6 2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6 py-[46px] relative items-stretch">
            <div className="flex flex-col gap-6">
                <SearchBlockTrade/>
                <BuyBlock/>
            </div>
            <div className="flex flex-col w-full gap-6">
                <TradingGraph/>
                <MarketTradesSection/>
            </div>

            <img className="absolute top-[150px] z-[1] right-[-100px]" src="/img/round-light-about.png"
                 alt="light"/>
        </div>
    );
}

export default TradePage;