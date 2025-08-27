import { useState } from "react";
import { MarketTab } from "@/features/dashboard/market/market-tab.tsx";

export function MarketTable() {
    const [tab, setTab] = useState('all')

    const trendAssets = [
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            price: "USD 53,260.20",
            marketCap: "USD 53,260.20",
            change: "0.25%",
            isPositive: true,
            chartData: "/img/btc-chart.png"
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            price: "USD 53,260.20",
            marketCap: "USD 53,260.20",
            change: "0.25%",
            isPositive: true,
            chartData: "/img/btc-chart.png"
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            price: "USD 53,260.20",
            marketCap: "USD 53,260.20",
            change: "0.25%",
            isPositive: true,
            chartData: "/img/btc-chart.png"
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            price: "USD 53,260.20",
            marketCap: "USD 53,260.20",
            change: "0.25%",
            isPositive: true,
            chartData: "/img/btc-chart.png"
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            price: "USD 53,260.20",
            marketCap: "USD 53,260.20",
            change: "0.25%",
            isPositive: true,
            chartData: "/img/btc-chart.png"
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            price: "USD 53,260.20",
            marketCap: "USD 53,260.20",
            change: "0.25%",
            isPositive: true,
            chartData: "/img/btc-chart.png"
        },
        {
            name: "Binance Coin",
            icon: "/img/bnb-icon.svg",
            symbol: "BNB",
            price: "USD 247.72",
            marketCap: "USD 247.72",
            change: "-2.43%",
            isPositive: false,
            chartData: "/img/bnb-chart.png"
        },
        {
            name: "Binance Coin",
            icon: "/img/bnb-icon.svg",
            symbol: "BNB",
            price: "USD 247.72",
            marketCap: "USD 247.72",
            change: "-2.43%",
            isPositive: false,
            chartData: "/img/bnb-chart.png"
        },
    ];

    return (
        <div
            className="flex flex-col w-full h-full items-center justify-center border-b-0 relative rounded-t-[22px] border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px] gap-6"
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
            <div
                style={{ scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent' }}
                className="w-full rounded-t-[20px] backdrop-blur-lg bg-[#070322] overflow-y-auto custom-scroll [direction:rtl] lg:[direction:ltr]"
            >
                <div className="[direction:ltr] min-w-[800px] lg:min-w-0 pr-[20px] lg:pr-0">
                    <div className="flex items-center justify-between pt-6 flex-shrink-0 xl:px-[30px] px-6">
                        <h3 className="text-[20px] text-white leading-[24px] font-bold">Market Assets</h3>
                        <div className="lg:flex hidden lg:gap-4 gap-2 items-center">
                            <div onClick={() => setTab('all')}
                                 className={`lg:text-[16px] text-[14px] ${tab === 'all' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>All Assets
                            </div>
                            <div onClick={() => setTab('gainers')}
                                 className={`lg:text-[16px] text-[14px] ${tab === 'gainers' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>Gainers
                            </div>
                            <div onClick={() => setTab('losers')}
                                 className={`lg:text-[16px] text-[14px] ${tab === 'losers' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>Losers
                            </div>
                            <div onClick={() => setTab('tradeble')}
                                 className={`lg:text-[16px] text-[14px] ${tab === 'tradeble' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>Tradeble
                            </div>
                        </div>
                        <MarketTab />
                    </div>
                    <div className="flex items-center mt-6 justify-between 2xl:px-8 px-4 lg:py-6 py-4 border-b border-[#D0DCFF2F]">
                        <div className="flex items-center gap-4 2xl:w-[300px] xl:w-[230px] lg:w-[185px] w-[140px]">
                            <span className="lg:text-[16px] text-[14px] leading-6 text-[#CACACA]">Assets</span>
                        </div>
                        <div className="flex-1">
                            <span className="lg:text-[16px] text-[14px] leading-6 text-white">Last Price</span>
                        </div>
                        <div className="flex-1">
                            <span className="lg:text-[16px] text-[14px] leading-6 text-white">Market Cap</span>
                        </div>
                        <div className="lg:w-[100px] w-[60px]">
                            <span className="lg:text-[16px] text-[14px] leading-6 text-[#CACACA]">Change</span>
                        </div>
                        <div className="xl:w-[220px] lg:w-[180px] w-[120px] lg:text-start text-center">
                            <span className="lg:text-[16px] text-[14px] leading-6 text-[#CACACA]">Chart</span>
                        </div>
                        <div className="xl:w-[100px] w-[70px]">
                            <span className="lg:text-[16px] text-[14px] leading-6 text-[#CACACA]">Trade</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        {trendAssets.map((asset, index) => (
                            <div key={index}
                                 className="flex items-center justify-between 2xl:px-8 px-4 lg:py-6 py-4 border-b border-[#D0DCFF1F] hover:bg-[#FFFFFF05] transition-colors">
                                <div className="flex items-center lg:gap-4 gap-2 2xl:w-[300px] xl:w-[230px] lg:w-[185px] w-[140px]">
                                    <img className="w-[29px] h-[29px] pointer-events-none select-none" src={asset.icon}
                                         alt="logo"/>
                                    <div className="flex items-center xl:gap-10 lg:gap-5 gap-2">
                                        <span
                                            className="lg:text-[16px] text-[14px] leading-6 font-semibold text-white">{asset.symbol}</span>
                                        <span className="lg:text-[16px] text-[14px] leading-6 text-[#B9BDEA]">{asset.name}</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <span className="lg:text-[16px] text-[14px] leading-6 text-white">{asset.price}</span>
                                </div>
                                <div className="flex-1">
                                    <span className="lg:text-[16px] text-[14px] leading-6 text-white">{asset.marketCap}</span>
                                </div>
                                <div className="lg:w-[100px] w-[50px]">
                                    <span
                                        className={`lg:text-[16px] text-[14px] leading-6 ${asset.isPositive ? 'text-[#11CABE]' : 'text-[#FA2256]'}`}>
                                        {asset.change}
                                    </span>
                                </div>
                                <div className="xl:w-[220px] lg:w-[180px] w-[120px]">
                                    <img className="flex-1 xl:w-[172px] lg:w-[140px] w-[110px] pointer-events-none select-none" src={asset.chartData}
                                         alt="chart"/>
                                </div>
                                <div className="xl:w-[100px] lg:w-[70px] w-[65px]">
                                    <button
                                        className="xl:w-[74px] lg:w-[60px] w-[52px] lg:h-[57px] h-10 cursor-pointer text-white font-bold text-[14px] leading-[22px] hover:bg-gradient-to-r hover:from-[#B189FF] hover:to-[#8144F6] rounded-full border-[1px] border-[#6C24F5] transition-all duration-300">Buy
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}