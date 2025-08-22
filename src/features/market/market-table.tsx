export function MarketTable(){
    const market = [
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            lastPrice: "$113,700.01",
            change24: "+0.11%",
            isPositive: true,
            low24: "$111,920.00",
            high24: "$114,063.49",
            volume24: "$241,837.00",
        },
        {
            name: "Ethereum",
            icon: "/img/eth-icon.svg",
            symbol: "ETH",
            lastPrice: "$3,245.67",
            change24: "-2.34%",
            isPositive: false,
            low24: "$3,120.00",
            high24: "$3,350.00",
            volume24: "$156,234.00",
        },
        {
            name: "BNB",
            icon: "/img/bnb-icon.svg",
            symbol: "BNB",
            lastPrice: "$567.89",
            change24: "+1.23%",
            isPositive: true,
            low24: "$550.00",
            high24: "$580.00",
            volume24: "$89,123.00",
        },
        {
            name: "USDT",
            icon: "/img/usdt-icon.svg",
            symbol: "USDT",
            lastPrice: "$1.00",
            change24: "+0.01%",
            isPositive: true,
            low24: "$0.99",
            high24: "$1.01",
            volume24: "$2,345,678.00",
        },
        {
            name: "XRP",
            icon: "/img/xrp-icon.svg",
            symbol: "XRP",
            lastPrice: "$0.45",
            change24: "-1.56%",
            isPositive: false,
            low24: "$0.44",
            high24: "$0.47",
            volume24: "$234,567.00",
        },
        {
            name: "Cardano",
            icon: "/img/btc-icon.svg",
            symbol: "ADA",
            lastPrice: "$0.67",
            change24: "+3.45%",
            isPositive: true,
            low24: "$0.65",
            high24: "$0.70",
            volume24: "$123,456.00",
        },
        {
            name: "Solana",
            icon: "/img/btc-icon.svg",
            symbol: "SOL",
            lastPrice: "$98.76",
            change24: "-0.89%",
            isPositive: false,
            low24: "$97.00",
            high24: "$100.00",
            volume24: "$345,678.00",
        },
        {
            name: "Polkadot",
            icon: "/img/btc-icon.svg",
            symbol: "DOT",
            lastPrice: "$7.89",
            change24: "+2.34%",
            isPositive: true,
            low24: "$7.70",
            high24: "$8.10",
            volume24: "$67,890.00",
        },
        {
            name: "Chainlink",
            icon: "/img/btc-icon.svg",
            symbol: "LINK",
            lastPrice: "$15.67",
            change24: "-1.23%",
            isPositive: false,
            low24: "$15.50",
            high24: "$16.00",
            volume24: "$45,678.00",
        },
        {
            name: "Litecoin",
            icon: "/img/btc-icon.svg",
            symbol: "LTC",
            lastPrice: "$78.90",
            change24: "+0.67%",
            isPositive: true,
            low24: "$78.00",
            high24: "$79.50",
            volume24: "$89,012.00",
        },
        {
            name: "Bitcoin Cash",
            icon: "/img/btc-icon.svg",
            symbol: "BCH",
            lastPrice: "$234.56",
            change24: "-0.45%",
            isPositive: false,
            low24: "$233.00",
            high24: "$236.00",
            volume24: "$34,567.00",
        },
        {
            name: "Stellar",
            icon: "/img/btc-icon.svg",
            symbol: "XLM",
            lastPrice: "$0.12",
            change24: "+1.78%",
            isPositive: true,
            low24: "$0.11",
            high24: "$0.13",
            volume24: "$56,789.00",
        },
        {
            name: "VeChain",
            icon: "/img/btc-icon.svg",
            symbol: "VET",
            lastPrice: "$0.023",
            change24: "-0.34%",
            isPositive: false,
            low24: "$0.022",
            high24: "$0.024",
            volume24: "$23,456.00",
        },
        {
            name: "Filecoin",
            icon: "/img/btc-icon.svg",
            symbol: "FIL",
            lastPrice: "$5.67",
            change24: "+4.56%",
            isPositive: true,
            low24: "$5.40",
            high24: "$5.90",
            volume24: "$78,901.00",
        },
        {
            name: "TRON",
            icon: "/img/btc-icon.svg",
            symbol: "TRX",
            lastPrice: "$0.089",
            change24: "-0.12%",
            isPositive: false,
            low24: "$0.088",
            high24: "$0.090",
            volume24: "$12,345.00",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center lg:pt-[170px] md:pt-[120px] pt-16 gap-12">
            <div className="w-full rounded-[20px] backdrop-blur-lg md:border-[1px] border-[#D0DCFF8F] overflow-hidden">
                <div className="flex items-center justify-between xl:px-8 sm:px-4 md:py-6 py-2 border-b border-[#D0DCFF2F]">
                    <div className="md:flex hidden xl:w-[50px] w-[27px]">
                        <span className="text-[19px] text-white">#</span>
                    </div>
                    <div className="flex items-center gap-4 xl:w-[300px] sm:w-[180px] w-[150px]">
                        <span className="md:text-[15px] text-[13px] md:text-white text-[#777E90]">Name</span>
                    </div>
                    <div className="flex-1 md:text-start text-end">
                        <span className="md:text-[15px] text-[13px] md:text-white text-[#777E90]">Last Price</span>
                    </div>
                    <div className="md:flex hidden flex-1 ">
                        <span className="text-[15px] text-white">24H Change</span>
                    </div>
                    <div className="md:flex hidden flex-1 ">
                        <span className="text-[15px] text-white">Low 24H</span>
                    </div>
                    <div className="md:flex hidden flex-1">
                        <span className="text-[15px] text-white">High 24H</span>
                    </div>
                    <div className="flex-1 md:text-start text-end">
                        <span className="md:text-[15px] text-[13px] md:text-white text-[#777E90]">Volume 24H</span>
                    </div>
                </div>

                <div className="" style={{ scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent' }}>
                    {market.map((asset, index) => (
                        <div key={index}
                             className="flex items-center justify-between xl:px-8 sm:px-4 py-6 border-b border-[#D0DCFF1F] hover:bg-[#FFFFFF05] transition-colors">
                            <div className="md:flex hidden xl:w-[50px] w-[27px]">
                                <span className="text-[18px] font-semibold text-white">{index+1}</span>
                            </div>
                            <div className="flex items-center gap-4 xl:w-[300px] sm:w-[180px] w-[150px]">
                                <img className=" w-[29px] h-[29px] pointer-events-none select-none" src={asset.icon}
                                     alt="logo"/>
                                <div className="flex items-center gap-3">
                                    <span className="md:flex hidden xl:text-[17px] md:text-[15px] text-[13px] font-medium text-white">{asset.symbol}</span>
                                    <span className="xl:text-[17px] md:text-[15px] text-[13px] text-[#B9BDEA]">{asset.name}</span>
                                </div>
                            </div>
                            <div className="flex-1 md:text-start text-end">
                                <span className="xl:text-[17px] md:text-[15px] text-[13px] font-medium text-white">{asset.lastPrice}</span>
                            </div>
                            <div className="flex-1 md:text-start text-end">
                                <span className={`xl:text-[19px] md:text-[15px] text-[13px] ${asset.isPositive ? 'text-[#11CABE]' : 'text-[#FA2256]'}`}>
                                    {asset.change24}
                                </span>
                            </div>
                            <div className="md:flex hidden flex-1">
                                <span className="xl:text-[17px] md:text-[15px] text-[13px] font-medium text-white">{asset.low24}</span>
                            </div>
                            <div className="md:flex hidden flex-1">
                                <span className="xl:text-[17px] md:text-[15px] text-[13px] font-medium text-white">{asset.high24}</span>
                            </div>
                            <div className="md:flex hidden flex-1">
                                <span className="xl:text-[17px] md:text-[15px] text-[13px] font-medium text-white">{asset.volume24}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}