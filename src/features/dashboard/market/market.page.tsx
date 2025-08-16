import {MarketTable} from "@/features/dashboard/market/market-table.tsx";
import {MarketBlock} from "@/features/dashboard/market/market-block.tsx";

export function MarketPage() {
    return (
        <div className="flex flex-col overflow-y-hidden gap-6 px-10">
            <div className="flex gap-6">
                <MarketBlock title="Top gainer (24h)" value="USD 567.34" name="Binance Coin" symbol="BNB" data={110.34} logo="img/bnb-icon.svg"/>
                <MarketBlock title="New listing" value="USD 34.02" name="Ethereum" symbol="ETH" data={0.34} logo="img/eth-icon.svg"/>
                <MarketBlock title="Highest volume (24h)" value="USD 236,213.22" name="Bitcoin" symbol="BTC" data={0.53} logo="img/btc-icon.svg"/>
                <MarketBlock title="Most Visited" value="USD 123.34" name="Tether" symbol="USDT" data={2.23} logo="img/usdt-icon.svg"/>
            </div>
            <MarketTable/>
        </div>
    )
}

export default MarketPage;