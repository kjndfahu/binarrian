export function CryptoWalletTable(){
    const trendAssets = [
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            orders: "USD 53,260.20",
            availableBalance: "USD 53,260.20",
            totalBalance: "USD 53,260.20",
            change: "0.25%",
            isPositive: true,
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            orders: "USD 53,260.20",
            availableBalance: "USD 53,260.20",
            totalBalance: "USD 53,260.20",
            change: "0.25%",
            isPositive: false,
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            orders: "USD 53,260.20",
            availableBalance: "USD 53,260.20",
            totalBalance: "USD 53,260.20",
            change: "0.25%",
            isPositive: false,
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            orders: "USD 53,260.20",
            availableBalance: "USD 53,260.20",
            totalBalance: "USD 53,260.20",
            change: "0.25%",
            isPositive: true,
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            orders: "USD 53,260.20",
            availableBalance: "USD 53,260.20",
            totalBalance: "USD 53,260.20",
            change: "0.25%",
            isPositive: true,
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            orders: "USD 53,260.20",
            availableBalance: "USD 53,260.20",
            totalBalance: "USD 53,260.20",
            change: "0.25%",
            isPositive: true,
        },
    ];

    return (
        <div className="flex flex-col h-full w-[75%] items-center justify-center relative rounded-[22px] border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px] gap-6">
            <div
                className="w-full rounded-[20px] px-[30px] backdrop-blur-lg bg-[#070322] overflow-hidden">
                <div className="flex items-center mt-6 justify-between pr-8 py-6 border-b border-[#D0DCFF2F]">
                    <div className="flex items-center gap-4 w-[300px]">
                        <span className="text-[16px] leading-6 text-[#CACACA]">Assets</span>
                    </div>
                    <div className="flex-1 ">
                        <span className="text-[16px] leading-6 text-[#CACACA]">Orders</span>
                    </div>
                    <div className="flex-1 ">
                        <span className="text-[16px] leading-6 text-[#CACACA]">Available Balance</span>
                    </div>
                    <div className="flex-1">
                        <span className="text-[16px] leading-6 text-[#CACACA]">Total Balance</span>
                    </div>
                    <div className="w-[120px] text-right">
                        <span className="text-[16px] leading-6 text-[#CACACA]">24h Market</span>
                    </div>
                </div>

                <div className="flex-1 h-full overflow-y-hidden">
                    {trendAssets.map((asset, index) => (
                        <div key={index}
                             className="flex items-center justify-between pr-8 py-6 border-b border-[#D0DCFF1F] hover:bg-[#FFFFFF05] transition-colors">
                            <div className="flex items-center gap-4 w-[300px]">
                                <img className="w-[29px] h-[29px] pointer-events-none select-none" src={asset.icon}
                                     alt="logo"/>
                                <div className="flex items-center gap-10">
                                    <span
                                        className="text-[16px] leading-6 font-semibold text-white">{asset.symbol}</span>
                                    <span className="text-[16px] leading-6 text-[#B9BDEA]">{asset.name}</span>
                                </div>
                            </div>
                            <div className="flex-1">
                                <span className="text-[16px] leading-6 text-white">{asset.orders}</span>
                            </div>
                            <div className="flex-1">
                                <span className="text-[16px] leading-6 text-white">{asset.availableBalance}</span>
                            </div>
                            <div className="flex-1">
                                <span className="text-[16px] leading-6 text-white">{asset.totalBalance}</span>
                            </div>
                            <div className="w-[120px] text-center">
                                <span className={`${asset.isPositive ? 'text-[#11CABE]' : 'text-[#FA2256]'} text-[16px] leading-6`}>{asset.change}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}