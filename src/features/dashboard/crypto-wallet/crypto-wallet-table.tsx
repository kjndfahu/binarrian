export function CryptoWalletTable() {
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

        <div
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent' }}
            className="relative rounded-t-[22px] w-full overflow-x-auto border-b-0 border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]"
        >
            <style jsx>{`
                .custom-scroll::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }
                .custom-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scroll::-webkit-scrollbar-thumb {
                    background: #D0DCFF8F;
                    border-radius: 4px;
                }
            `}</style>
            <div className="flex flex-col h-full w-full items-center justify-center gap-6 min-w-[800px] lg:min-w-0">
                <div
                    className="w-full rounded-t-[20px] bg-[#070322] overflow-hidden"
                >
                    <div  className="flex items-center mt-6 justify-between xl:px-[30px] px-6 py-6 border-b border-[#D0DCFF2F]">
                        <div className="flex items-center gap-4 2xl:w-[300px] xl:w-[200px] lg:w-[160px] w-[300px]">
                            <span className="2xl:text-[16px] text-[15px] leading-6 text-[#CACACA]">Assets</span>
                        </div>
                        <div className="2xl:flex-1 xl:flex-initial flex-1 2xl:text-start lg:text-center text-start 2xl:w-auto xl:w-[100px] lg:w-[70px] w-auto">
                            <span className="2xl:text-[16px] text-[15px] leading-6 text-[#CACACA]">Orders</span>
                        </div>
                        <div className="2xl:flex-1 xl:flex-initial flex-1 2xl:text-start lg:text-center text-start 2xl:w-auto xl:w-[100px] lg:w-[80px] w-auto">
                            <span className="2xl:text-[16px] text-[15px] leading-6 text-[#CACACA]">Available Balance</span>
                        </div>
                        <div className="2xl:flex-1 xl:flex-initial flex-1 2xl:text-start lg:text-center text-start 2xl:w-auto xl:w-[100px] lg:w-[80px] w-auto">
                            <span className="2xl:text-[16px] text-[15px] leading-6 text-[#CACACA]">Total Balance</span>
                        </div>
                        <div className="2xl:w-[120px] xl:w-[90px] lg:w-[62px] w-[120px] text-right">
                            <span className="2xl:text-[16px] text-[15px] leading-6 text-[#CACACA]">24h Market</span>
                        </div>
                    </div>

                    <div
                        style={{ scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent' }}
                        className="overflow-y-auto max-h-[calc(570px-104px)] custom-scroll [direction:rtl] lg:[direction:ltr]"
                    >
                        <div className="[direction:ltr] pr-[20px] lg:pr-0">
                            {trendAssets.map((asset, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between xl:px-[30px] px-6 py-6 border-b border-[#D0DCFF1F] hover:bg-[#FFFFFF05] transition-colors"
                                >
                                    <div className="flex items-center xl:gap-4 lg:gap-2 gap-4 2xl:w-[300px] xl:w-[200px] lg:w-[160px] w-[300px]">
                                        <img
                                            className="w-[29px] h-[29px] pointer-events-none select-none"
                                            src={asset.icon}
                                            alt="logo"
                                        />
                                        <div className="flex items-center 2xl:gap-10 xl:gap-5 lg:gap-2 gap-10">
                                            <span className="2xl:text-[16px] text-[15px] leading-6 font-semibold text-white">{asset.symbol}</span>
                                            <span className="2xl:text-[16px] text-[15px] leading-6 text-[#B9BDEA]">{asset.name}</span>
                                        </div>
                                    </div>
                                    <div className="2xl:flex-1 xl:flex-initial flex-1 2xl:text-start lg:text-center text-start 2xl:w-auto xl:w-[100px] lg:w-[70px] w-auto">
                                        <span className="2xl:text-[16px] text-[15px] leading-6 text-white">{asset.orders}</span>
                                    </div>
                                    <div className="2xl:flex-1 xl:flex-initial flex-1 2xl:text-start lg:text-center text-start 2xl:w-auto xl:w-[100px] lg:w-[80px] w-auto">
                                        <span className="2xl:text-[16px] text-[15px] leading-6 text-white">{asset.availableBalance}</span>
                                    </div>
                                    <div className="2xl:flex-1 xl:flex-initial flex-1 2xl:text-start lg:text-center text-start 2xl:w-auto xl:w-[100px] lg:w-[80px] w-auto">
                                        <span className="2xl:text-[16px] text-[15px] leading-6 text-white">{asset.totalBalance}</span>
                                    </div>
                                    <div className="2xl:w-[120px] xl:w-[90px] lg:w-[62px] w-[120px] text-right">
                                        <span
                                            className={`${asset.isPositive ? 'text-[#11CABE]' : 'text-[#FA2256]'} 2xl:text-[16px] text-[15px] leading-6`}
                                        >
                                            {asset.change}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}