export function TrendAssets(){
    const trendAssets = [
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            price: "USD 53,260.20",
            change: "0.25%",
            isPositive: true,
            chartData: "/img/btc-chart.png"
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            price: "USD 53,260.20",
            change: "0.25%",
            isPositive: true,
            chartData: "/img/btc-chart.png"
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            price: "USD 53,260.20",
            change: "0.25%",
            isPositive: true,
            chartData: "/img/btc-chart.png"
        },
        {
            name: "Ethereum",
            icon: "/img/eth-icon.svg",
            symbol: "ETH",
            price: "USD 1,643.80",
            change: "0.40%",
            isPositive: false,
            chartData: "/img/eth-chart.svg"
        },
        {
            name: "Binance Coin",
            icon: "/img/bnb-icon.svg",
            symbol: "BNB",
            price: "USD 247.72",
            change: "0.25%",
            isPositive: true,
            chartData: "/img/bnb-chart.svg"
        },
        {
            name: "XRP",
            icon: "/img/xrp-icon.svg",
            symbol: "XRP",
            price: "USD 0.5657",
            change: "0.25%",
            isPositive: true,
            chartData: "/img/xrp-chart.svg"
        },
        {
            name: "Tether",
            icon: "/img/xrp-icon.svg",
            symbol: "USDT",
            price: "USD 0.9999",
            change: "0.40%",
            isPositive: false,
            chartData: "/img/usdt-chart.svg"
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center 2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6 gap-12">
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="py-3 px-[22px] w-[166px] trend-assets-border text-normal text-center bg-[#FFFFFF1F] text-[20px] leading-[24px] text-white rounded-full">
                Trend Assets
                </div>
                <h2 className="text-[48px] text-center z-[2] text-white font-normal">Investigating the Latest Coin Trends</h2>
                <p className="text-[18px] mt-1 text-center z-[2] w-[695px] text-white font-normal">The pulse of modern cryptocurrency markets: detailed analysis of market dynamics and future potential.</p>
            </div>
            
            {/* Trend Assets Table */}
            <div className="w-full rounded-[20px] backdrop-blur-lg border-[1px] border-[#D0DCFF8F] overflow-hidden">
                {/* Table Header */}
                <div className="flex items-center justify-between px-8 py-6 border-b border-[#D0DCFF2F]">
                    <div className="flex items-center gap-4 w-[300px]">
                        <span className="text-[19px] text-white">Asset</span>
                    </div>
                    <div className="flex-1 ">
                        <span className="text-[19px] text-white">Price</span>
                    </div>
                    <div className="flex-1 ">
                        <span className="text-[19px] text-white">Change</span>
                    </div>
                    <div className="flex-1 ">
                        <span className="text-[19px] text-white">Chart</span>
                    </div>
                    <div className="w-[120px]">
                        <span className="text-[19px] text-white">Trade</span>
                    </div>
                </div>

                {/* Table Rows */}
                {trendAssets.map((asset, index) => (
                    <div key={index}
                         className="flex items-center justify-between px-8 py-6 border-b border-[#D0DCFF1F] hover:bg-[#FFFFFF05] transition-colors">
                        <div className="flex items-center gap-4 w-[300px]">
                            <img className="w-[29px] h-[29px] pointer-events-none select-none" src={asset.icon} alt="logo"/>
                            <div className="flex items-center gap-10">
                                <span className="text-[19px] font-semibold text-white">{asset.symbol}</span>
                                <span className="text-[19px] text-[#B9BDEA]">{asset.name}</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <span className="text-[18px] font-semibold text-white">{asset.price}</span>
                        </div>
                        <div className="flex-1 ">
                            <span className={`text-[19px] ${asset.isPositive ? 'text-[#11CABE]' : 'text-[#FA2256]'}`}>
                                {asset.change}
                            </span>
                        </div>
                        <div className="flex-1">
                            <img className="flex-1 pointer-events-none select-none" src={asset.chartData} alt="chart"/>
                        </div>
                        <div className="w-[120px]">
                            <button className="w-[92px] h-[57px] cursor-pointer text-white font-bold text-[17px] hover:bg-gradient-to-r hover:from-[#B189FF] hover:to-[#8144F6] rounded-full border-[1px] border-[#6C24F5] transition-all duration-300">Buy</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}