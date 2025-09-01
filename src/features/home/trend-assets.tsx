export function TrendAssets() {
    const trendAssets = [
        {
            name: "Bitcoin",
            icon: "/img/bnb-icon.svg",
            symbol: "BTC",
            price: "USD 53,260.20",
            change: "0.25%",
            isPositive: true,
            chartData: "/img/btc-chart.png"
        },
        {
            name: "Bitcoin",
            icon: "/img/bnb-icon.svg",
            symbol: "BTC",
            price: "USD 53,260.20",
            change: "0.25%",
            isPositive: true,
            chartData: "/img/btc-chart.png"
        },
        {
            name: "Bitcoin",
            icon: "/img/bnb-icon.svg",
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
            <div className="flex flex-col items-center justify-center md:gap-4 gap-6">
                <div className="py-3 px-[22px] w-[166px] trend-assets-border text-normal text-center bg-[#FFFFFF1F] text-[20px] leading-[24px] text-white rounded-full">
                    Trend Assets
                </div>
                <h2 className="md:text-[48px] sm:text-[36px] text-[32px] text-center z-[2] hero-text font-normal">Investigating the Latest Coin Trends</h2>
                <p className="md:text-[18px] text-[16px] mt-1 text-center z-[2] xl:w-[695px] md:w-[500px] sm:w-[400px] w-[320px] text-white font-normal">The pulse of modern cryptocurrency markets: detailed analysis of market dynamics and future potential.</p>
            </div>

            <div className="w-full md:rounded-[20px] rounded-[12px] bg-[#03021980] backdrop-blur-lg z-[3] border-[1px] border-[#FFFFFF1F] overflow-hidden">

                <div className="md:flex hidden items-center justify-between px-8 py-6 border-b border-[#D0DCFF2F]">
                    <div className="flex items-center gap-4 xl:w-[300px] lg:w-[270px] w-[200px]">
                        <span className="xl:text-[19px] md:text-[15px] text-[13px] text-white">Asset</span>
                    </div>
                    <div className="flex-1 ">
                        <span className="xl:text-[19px] md:text-[15px] text-[13px] text-white">Price</span>
                    </div>
                    <div className="lg:flex-1 w-[80px]">
                        <span className="xl:text-[19px] md:text-[15px] text-[13px] text-white">Change</span>
                    </div>
                    <div className="flex-1 ">
                        <span className="xl:text-[19px] md:text-[15px] text-[13px] text-white">Chart</span>
                    </div>
                    <div className="xl:w-[120px] lg:w-[95px] w-[75px]">
                        <span className="xl:text-[19px] md:text-[15px] text-[13px] text-white">Trade</span>
                    </div>
                </div>

                {trendAssets.map((asset, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between xl:px-8 md:px-5 px-4 md:py-6 py-4 md:border-b border-[#D0DCFF1F] transition-colors group relative"
                    >
                        <div className="flex items-center xl:gap-4 md:gap-3 gap-4 xl:w-[300px] lg:w-[270px] md:w-[200px] w-auto">
                            <img
                                className="w-[29px] h-[29px] pointer-events-none select-none"
                                src={asset.icon}
                                alt="logo"
                            />
                            <div className="flex md:flex-row flex-col md:items-center xl:gap-10 md:gap-5">
                                <span className="xl:text-[19px] md:text-[15px] text-[13px] font-semibold text-white">
                                    {asset.symbol}
                                </span>
                                <span className="xl:text-[19px] md:text-[15px] text-[13px] text-[#B9BDEA]">
                                    {asset.name}
                                </span>
                            </div>
                        </div>
                        <div className="md:flex hidden flex-1">
                            <span className="xl:text-[18px] md:text-[15px] text-[13px] font-semibold text-white">
                                {asset.price}
                            </span>
                        </div>
                        <div className="md:flex hidden lg:flex-1 w-[80px]">
                            <span
                                className={`xl:text-[19px] md:text-[15px] text-[13px] ${
                                    asset.isPositive ? "text-[#11CABE]" : "text-[#FA2256]"
                                }`}
                            >
                                {asset.change}
                            </span>
                        </div>
                        <div className="md:flex hidden flex-1">
                            <img
                                className="flex-1 xl:w-[172px] w-[150px] xl:h-[44px] h-[32px] pointer-events-none select-none"
                                src={asset.chartData}
                                alt="chart"
                            />
                        </div>
                        <div className="md:flex hidden xl:w-[120px] lg:w-[95px] w-[75px]">
                            <button className="lg:w-[92px] w-[75px] lg:h-[57px] h-[42px] cursor-pointer text-white font-bold text-[17px] hover:bg-gradient-to-r hover:from-[#B189FF] hover:to-[#8144F6] rounded-full border-[1px] border-[#6C24F6] transition-all duration-300">
                                Buy
                            </button>
                        </div>
                        <div className="md:hidden relative flex flex-col items-end w-[120px] text-[13px] font-semibold text-white">
                            <p className="transition-all duration-300 group-hover:opacity-0">{asset.price}</p>
                            <span
                                className={`text-[13px] transition-all duration-300 group-hover:opacity-0 ${
                                    asset.isPositive ? "text-[#11CABE]" : "text-[#FA2256]"
                                }`}
                            >
                                {asset.change}
                            </span>
                            <button className="absolute bottom-0 right-0 mt-2 w-[84px] h-[39px] cursor-pointer text-white font-bold text-[13px] bg-gradient-to-r from-[#B189FF] to-[#8144F6] rounded-full border-[1px] border-[#6C24F6] transition-all duration-300 opacity-0 group-hover:opacity-100">
                                Buy
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}