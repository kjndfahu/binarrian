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
    ];

    return (
        <div className="flex flex-col items-center justify-center pt-[170px] gap-12">
            <div className="w-full rounded-[20px] backdrop-blur-lg border-[1px] border-[#D0DCFF8F] overflow-hidden">
                <div className="flex items-center justify-between px-8 py-6 border-b border-[#D0DCFF2F]">
                    <div className=" w-[50px]">
                        <span className="text-[19px] text-white">#</span>
                    </div>
                    <div className="flex items-center gap-4 w-[300px]">
                        <span className="text-[15px] text-white">Name</span>
                    </div>
                    <div className="flex-1 ">
                        <span className="text-[15px] text-white">Last Price</span>
                    </div>
                    <div className="flex-1 ">
                        <span className="text-[15px] text-white">24H Change</span>
                    </div>
                    <div className="flex-1 ">
                        <span className="text-[15px] text-white">Low 24H</span>
                    </div>
                    <div className="flex-1">
                        <span className="text-[15px] text-white">High 24H</span>
                    </div>
                    <div className="flex-1">
                        <span className="text-[15px] text-white">Volume 24H</span>
                    </div>
                </div>

                {/* Table Rows */}
                {market.map((asset, index) => (
                    <div key={index}
                         className="flex items-center justify-between px-8 py-6 border-b border-[#D0DCFF1F] hover:bg-[#FFFFFF05] transition-colors">
                        <div className=" w-[50px]">
                            <span className="text-[18px] font-semibold text-white">{index+1}</span>
                        </div>
                        <div className="flex items-center gap-4 w-[300px]">
                            <img className="w-[29px] h-[29px] pointer-events-none select-none" src={asset.icon}
                                 alt="logo"/>
                            <div className="flex items-center gap-3">
                                <span className="text-[17px] font-medium text-white">{asset.symbol}</span>
                                <span className="text-[17px] text-[#B9BDEA]">{asset.name}</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <span className="text-[17px] font-medium text-white">{asset.lastPrice}</span>
                        </div>
                        <div className="flex-1 ">
                            <span className={`text-[19px] ${asset.isPositive ? 'text-[#11CABE]' : 'text-[#FA2256]'}`}>
                                {asset.change24}
                            </span>
                        </div>
                        <div className="flex-1">
                            <span className="text-[17px] font-medium text-white">{asset.low24}</span>
                        </div>
                        <div className="flex-1">
                            <span className="text-[17px] font-medium text-white">{asset.high24}</span>
                        </div>
                        <div className="flex-1">
                            <span className="text-[17px] font-medium text-white">{asset.volume24}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}