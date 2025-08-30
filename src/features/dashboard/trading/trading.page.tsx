import {BuyBlock} from "@/features/dashboard/trading/buy-block.tsx";
import {ExchangeBlock} from "@/features/dashboard/trading/exchange-block.tsx";
import {CurrencyBlock} from "@/features/dashboard/trading/currency-block.tsx";
import {MarketTradesSection} from "@/features/dashboard/trading/market-trades-section.tsx";
import {TradingGraph} from "@/features/dashboard/trading/trading-graph.tsx";

export function TradingPage() {
	return (
		<div className="flex flex-col-reverse lg:flex-row px-4 md:px-8 gap-4 md:gap-5 pb-6 overflow-hidden">
			<div className="flex flex-col gap-4 lg:gap-6 h-full">
				<BuyBlock/>
				<ExchangeBlock/>
			</div>
			<div className="flex flex-col w-full gap-4 md:gap-[25px] min-h-0">
				<CurrencyBlock/>
				<TradingGraph/>
				<MarketTradesSection/>
			</div>
		</div>
	)
}

export default TradingPage;