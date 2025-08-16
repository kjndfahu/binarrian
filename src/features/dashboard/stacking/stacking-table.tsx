export function StakingTable(){
    const trendAssets = [
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            estApy: "22%",
            isPositiveApy: true,
            minLockedAmount: "1ZIL",
            duration: "120",
            status: "Success",
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            estApy: "22%",
            isPositiveApy: true,
            minLockedAmount: "1ZIL",
            duration: "120",
            status: "Working",
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            estApy: "22%",
            isPositiveApy: true,
            minLockedAmount: "1ZIL",
            duration: "120",
            status: "Error",
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            estApy: "22%",
            isPositiveApy: true,
            minLockedAmount: "1ZIL",
            duration: "120",
            status: "Success",
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            estApy: "22%",
            isPositiveApy: true,
            minLockedAmount: "1ZIL",
            duration: "120",
            status: "Working",
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            estApy: "22%",
            isPositiveApy: true,
            minLockedAmount: "1ZIL",
            duration: "120",
            status: "Success",
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            estApy: "22%",
            isPositiveApy: true,
            minLockedAmount: "1ZIL",
            duration: "120",
            status: "Success",
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            estApy: "22%",
            isPositiveApy: true,
            minLockedAmount: "1ZIL",
            duration: "120",
            status: "Success",
        },
    ];

    return (
        <div className="flex flex-col h-full w-full items-center justify-center gap-6">
            <div
                className="w-full rounded-[20px] px-[30px] backdrop-blur-lg border-[1px] border-[#D0DCFF8F] overflow-hidden">
                {/* Table Header */}
                <div className="flex items-center mt-6 justify-between pr-8 py-6 border-b border-[#D0DCFF2F]">
                    <div className="flex items-center gap-4 w-[300px]">
                        <span className="text-[16px] leading-6 text-[#CACACA]">Assets</span>
                    </div>
                    <div className="flex-1 ">
                        <span className="text-[16px] leading-6 text-[#CACACA]">Est. APY</span>
                    </div>
                    <div className="flex-1 ">
                        <span className="text-[16px] leading-6 text-[#CACACA]">Min LockedAmount</span>
                    </div>
                    <div className="flex-1">
                        <span className="text-[16px] leading-6 text-[#CACACA]">Duration (Days)</span>
                    </div>
                    <div className="w-[120px] text-right">
                        <span className="text-[16px] leading-6 text-[#CACACA]">Status</span>
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
                                <span className={`${asset.isPositiveApy ? 'text-[#11CABE]' : 'text-[#FA2256]'} text-[16px] leading-6`}>{asset.estApy}</span>
                            </div>
                            <div className="flex-1">
                                <span className="text-[16px] leading-6 text-white">{asset.minLockedAmount}</span>
                            </div>
                            <div className="flex-1">
                                <span className="text-[16px] leading-6 text-white">{asset.duration}</span>
                            </div>
                            <div className="w-[120px] text-right">
                                <span className={`${asset.status === "Success" && 'text-[#11CABE]' 
                                                    || asset.status === "Working" && 'text-[#F3BA2F]' 
                                                    || asset.status === "Error" && 'text-[#FA2256]'} text-[16px] leading-6`}>{asset.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}