import {BuyBlock} from "@/features/dashboard/trading/buy-block.tsx";
import {ExchangeBlock} from "@/features/dashboard/trading/exchange-block.tsx";
import {CurrencyBlock} from "@/features/dashboard/trading/currency-block.tsx";
import {MarketTradesSection} from "@/features/dashboard/trading/market-trades-section.tsx";
import {TradingGraph} from "@/features/dashboard/trading/trading-graph.tsx";

export function TradingPage() {
	return (
		<div className="flex px-8 gap-5 h-screen overflow-hidden py-[clamp(12px,2vh,32px)]">
			<div className="flex flex-col gap-6 h-full">
				<BuyBlock/>
				<ExchangeBlock/>
			</div>
			<div className="flex flex-col w-full gap-[25px] min-h-0">
				<CurrencyBlock/>
				<TradingGraph/>
				<MarketTradesSection/>
			</div>
		</div>
	)
}

export default TradingPage;